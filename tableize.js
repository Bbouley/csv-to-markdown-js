var data = require('./strings');
var people = data.mvp.people;
var companies = data.mvp.companies;


function splitToLines(string){
  var output = string.split('\n');
  return output;
}

var peopleLines =  splitToLines(people);

function sortByLines(array){
  var eachWord = [];
  for (var i = 0; i < array.length; i++) {
    var newArr = array[i].split(',');
    eachWord.push(newArr);
  }
  return eachWord;
}

var peopleLinesArray = sortByLines(peopleLines);
console.log(peopleLinesArray);


function columnSize(array){
  lengthArray = [];
  for (var i = 0; i < array[i].length; i++) {
    length = 0;
    for (var j = 0; j < array.length; j++) {
      if(array[j][i].length > length ){
        length = array[j][i].length;
      }
    }
    lengthArray.push(length);
  }
  return lengthArray;
}

var peopleColumns = columnSize(peopleLinesArray);
console.log(peopleColumns);


//try to output the grid system first, use the setCharAt, with the output from columnSize

// function makeGrid(array, lines){
//   var ca = 0;
//   var grid = [];
//   for (var i = 0; i < lines.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       grid.push(array[j], '|');
//       ca += array[j];
//      }
//   } console.log(grid);
// }

// makeGrid(peopleColumns);
