const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('My name is chiboy');
});

app.listen(3000, function() {
  console.log(`Server is running at http://localhost:3000`)
});