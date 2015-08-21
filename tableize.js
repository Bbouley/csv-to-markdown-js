var data = require('./strings');
var people = data.mvp.people;
var companies = data.mvp.companies;



function splitToLines(string){
  var output = string.split('\n');
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

console.log(columnSize(linesArray));
