var fs = require('fs');
var parseFile = require('./utils/parseFile.js');


//Read in a CSV and write it as a json
var passengers_parsed = parseFile('passengers.csv', function (row) {
  row.Age = +row.Age
  return row;
});
var passengers_json = fs.writeFileSync('passengers.json', JSON.stringify(passengers_parsed, null, 2), 'utf-8');


//Read in a JSON and print out a silly thing
var names = [];
var json_parsed = parseFile('astronauts.json');
var people = json_parsed.people;

people.forEach(function(person){
  names.push(person.name);
});

console.log(names);
