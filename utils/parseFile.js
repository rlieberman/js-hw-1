var fs = require('fs');
var parse = require('csv-parse/lib/sync');

module.exports = function parseFile(file) {
  var ext = getFileExt(file);
  var data_string = fs.readFileSync(file, 'utf-8'); //reading in the file
  var data_parsed;

  if (ext == 'csv') {
    data_parsed = parse(data_string, {columns: true}); //use the CSV parser
  }

  else if (ext == 'json') {
    data_parsed = JSON.parse(data_string);
  }

  else {
    console.log("ERR! your file is neither CSV nor JSON");
    return;
  }

  return data_parsed;
}


function getFileExt (file) {
  var ext = file.split('.')[1];
  return ext;
}
