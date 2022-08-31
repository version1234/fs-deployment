const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../webPage.html'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './server/index.js'))
  });

  app.use('/js', express.static(path.join(__dirname, 'server/index.js')))

const port = process.env.PORT || 4005;
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})