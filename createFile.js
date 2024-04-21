var fs = require('fs');

fs.appendFile('test.txt', 'Magai is always in attentance!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});