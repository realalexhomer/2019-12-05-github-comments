# Comment Scrapbook (Front-end)

Sometimes you run into a great comment on a GitHub issue and you just wish you had a way to save it for revisiting years down the road. Let's build a comment scrapbook for ourselves to suit this need.

This project is split into both a client-side component and a server-side component. Consider the server-side piece a bonus. This exercise is designed to be a bit larger than might be possible in the time limit, so don't worry if you don't have a complete solution by the end 🙂

1. Write a React app that displays a list of comments for a GitHub issue. The page should show a text box where a user can paste in an issue URL and get back the comments on the issue. For example, a user should be able to paste in `https://github.com/koaninc/github-comments-interview/issues/1` and get back the issue's comments, if the issue exists. Also, since we don't have a backend, feel free to store an API token directly in your code. Each comment in the list should show the user's avatar, username, and comment body. The avatar and username should appear in a single line above the comment body.

2. Provide a way to learn more about a user, so that we have an idea of whose comments we're favoriting. Clicking a user's profile picture or username should reveal a user bio on the side of the page. Bio information should include:

- the person's username
- the person's name
- the person's avatar
- a link to their repos page

3. Add a text box for adding a comment to the issue thread. The user should be able to submit a comment back to GitHub by clicking a Submit button. When the comment is finished submitting, we should refetch the comment list so that we can see both our new comment and any other comments that have been added since we last fetched.

4. Next to each comment, add a "Favorite" button that lets the user save comments they really enjoy for later. The user should be able to toggle a comment between the favorited and unfavorited state as they wish. Again, since we don't have a backend, this should be entirely client-side.

Bonus: Since this app would clearly benefit from persistent state, let's build a backend! Write a server (Node.js preferred, but not required) with a database for persistent storage that tracks our favorite GitHub issue comments. The server should expose endpoints for clients to mark and unmark comments as favorites, as well as list all of a user's favorite comments.

For the bonus, we've provided a very barebones key-value database module for you to use (see db.js). Feel free to modify it if necessary, or even use a different database if you prefer.

You will be evaluated on multiple factors:

- Code style and organization
- User interface choices. It doesn't need to be a masterpiece, but try to make your app pleasant to use!
- Application architecture. Favor getting something working over making the most elegant and scalable solution, but try not to make an app that you'd hate working in six months down the road 😅
- Testing approach. While you don't necessarily need to write automated tests in this interview, you should write your code in a way that will make it easy to add tests to without significant refactoring.
- Database design

You may use any open source library as a dependency, but be prepared to defend your reasons for choosing your dependencies.

Useful resources:

- [GitHub's Personal Access Token Generator](https://github.com/settings/tokens)
- [GitHub's REST API for Issue Comments](https://developer.github.com/v3/issues/comments/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
