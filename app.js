const express = require('express');
const app = express();
const myFunction = require('./myFunction');
const conn = require('./database/connection');
conn



app.get('/', function (req, res) {
  let callFunction = myFunction()
  res.send(callFunction);
});

app.listen(3000, function() {
  console.log(`Server is running at http://localhost:3000`)
});