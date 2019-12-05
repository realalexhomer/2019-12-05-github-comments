import './App.css';

import React, { useMemo, useRef, useState } from 'react';

import axios from 'axios';

const HEADERS = {
  Authorization: "token 29c43853b078338f668a2c92f777cc3bf830a9a9"
}

// stubbed this out so we dont have to fetch real user, and we have something to display when we make comments
const USER = {
  login: 'testlogin',
  html_url: 'https://www.bing.com',
  avatar_url: 'https://avatars2.githubusercontent.com/u/9168961?s=60&v=4'
}

// text box on top
// method to fetch issue / comments

// Comment component
// User component

const githubUrlToApiUrl = (githubUrl) => {
  return githubUrl.replace('github.com/', 'api.github.com/repos/') + '/comments';
};

// this is for the inital fetch
const REPO_URL = 'https://github.com/facebook/react/issues/1';

const fetchIssue = async (repoUrl) => {
  const response = await axios.get(repoUrl, {
    headers: HEADERS
  });

  return response;
}

const commentsResolver = (commentsResponse) => {
  return commentsResponse.data.map(comment => {
    return {
      ...comment,
      isFavorited: false
    }
  })
};


// Stubbed this out. We could make POST but we dont want to make real comments. There is an alert to show we have the correct
// parameters
const submitComment = async (repoUrl, body) => {
  // const response = await axios.post(repoUrl, {
  //   body,
  // }, { headers: HEADERS });

  alert(`axios args ${JSON.stringify({
    body,
    headers: HEADERS,
    githubUrl: repoUrl
  })}`);

  // return response;
};

const Comment = (props) => {
  const { comment, toggleTab, isTabOpen, toggleFavorite } = props;
  return (
    <div className={'comment'}>
      <p onClick={toggleTab}>{comment.user.login}</p>
      <p>{comment.body}</p>
      <p onClick={toggleFavorite}>{comment.isFavorited ? 'unfavorite' : 'favorite'}</p>
      {isTabOpen && (
        <div className={'commentTab'}>
          <p onClick={toggleTab}>{comment.user.login}</p>
          <a href={comment.user.html_url + '?tab=repositories'}>repos</a>
          <img className={'commentTabAvatar'} onClick={toggleTab} src={comment.user.avatar_url} />
        </div>
      )}
    </div>
  )
}

const App = () => {
  const [githubUrl, setGithubUrl] = useState('');

  const urlInputRef = useRef();
  const commentInputRef = useRef();

  // would use below to display errors if necessary
  const [status, setStatus] = useState(null);
  const [comments, setComments] = useState([]);

  const [openTabIndex, setOpenTabIndex] = useState(-1);

  const toggleTab =
    (index) => { // would be better to look up ID than use index here, as if we need to delete comments or move them around we would have issues
      if (index === openTabIndex) {
        setOpenTabIndex(-1);
      } else {
        setOpenTabIndex(index);
      }
    }


  const handleSubmitCommentButtonClick = () => {
    submitComment(githubUrl, commentInputRef.current.value);

    setComments([...comments, { user: USER, body: commentInputRef.current.value }]);

    commentInputRef.current.value = '';
  };

  const handleUrlButtonClick = async () => {
    setGithubUrl(githubUrlToApiUrl(urlInputRef.current.value));
    const response = await fetchIssue(githubUrlToApiUrl(urlInputRef.current.value));

    setComments(commentsResolver(response));
    console.log('response', response);
  };

  // we want to populate when we first land on page so we dont have to enter a url every time we come to the page
  const initialCall = useMemo(() => {
    setTimeout(() => {
      handleUrlButtonClick();
    }, 100)
  }, []);

  const toggleFavorite =  // would be better to look up ID than use index here
    (index) => {
      const newComments = [...comments];

      newComments[index].isFavorited = !newComments[index].isFavorited
      console.log('here');
      setComments(newComments)
    };


  return (
    <div className="App">
      {githubUrl}
      <input ref={urlInputRef} defaultValue={REPO_URL}></input>
      <button onClick={handleUrlButtonClick}>submit url</button>

      <input ref={commentInputRef}></input>
      <button onClick={handleSubmitCommentButtonClick}>submit comment</button>

      <div className={'commentContainer'}>
        {comments.map((comment, index) => {
          return <Comment
            comment={comment}
            isTabOpen={index === openTabIndex}
            key={comment.id}
            toggleFavorite={() => toggleFavorite(index)}
            toggleTab={() => { toggleTab(index) }}
          />
        })}
      </div>
    </div>
  );
}

export default App;


// access token: 29c43853b078338f668a2c92f777cc3bf830a9a9