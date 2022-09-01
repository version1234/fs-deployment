const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json())
app.use(cors())
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '5131b6eeed6c4c5cb89aab7c5919f7f7',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../webPage.html'));
});
app.get('/css', function(req, res) {
    res.sendFile(path.join(__dirname, '../styles.css'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
  });
  
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  };
  

const port = process.env.PORT || 4005;
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})