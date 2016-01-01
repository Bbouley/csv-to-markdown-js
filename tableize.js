var data = require('./strings');
var fs = require('fs');
var people = data.mvp.people;
var companies = data.mvp.companies;
var stretchCompanies = data.stretch.companies;


function splitToLines(string){
  var output = string.split('\n');
  return output;
}

function sortByLines(array){
  var eachWord = [];
  for (var i = 0; i < array.length; i++) {
    var newArr = array[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    eachWord.push(newArr);
  }
  return eachWord;
}

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

function whiteSpace(word, columnLength){
  var string = word;
  for (var i = word.length; i <= columnLength; i++) {
    string += ' ';
  }
  return string;
}

function underline(array){
  var secondLine = '';
  var distance = 0;
  for (var i = 0; i < array.length; i++) {
    distance += array[i];
  }
  for (var j = 0; j < distance+(array.length*2)-2; j++) {
    secondLine += '_';
  } return secondLine;
}


function printGrid(columnArray, wordArray){
  var gridArray = [];
  var lineString = '';
  for (var i = 0; i < wordArray.length; i++) {
    if(i === 1){
      lineString += underline(columnArray) + '\n';
    }
    for (var j = 0; j < columnArray.length; j++) {
      if(j === columnArray.length-1){
      lineString += whiteSpace(wordArray[i][j], columnArray[j]);
      lineString += '\n';
      } else {
      lineString += whiteSpace(wordArray[i][j], columnArray[j]) +'|';
     }
    }
  } gridArray.push(lineString);
    return lineString;
}

function printFullGrid(string){
  var stringLines = splitToLines(string);
  var stringLinesArray = sortByLines(stringLines);
  var columns = columnSize(stringLinesArray);
  return printGrid(columns, stringLinesArray);
}

console.log(printFullGrid(people));
console.log(printFullGrid(companies));
console.log(printFullGrid(stretchCompanies));


