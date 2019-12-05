const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', async (req, res) => {
  res.send('Ready for some webhooks!\n');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
