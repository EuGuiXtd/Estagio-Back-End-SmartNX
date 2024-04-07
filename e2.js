const {greaterLength} = require('./utils');

function nestedFunction (func, str1, str2) {
    console.log(func(str1, str2));  // 'player'
  }
  
nestedFunction(greaterLength, 'hello', 'player'); 