const e1 = require('./e1');

function nestedFunction (func, str1, str2) {
    return func(str1, "user") && func(str2, 'user');
}

console.log(nestedFunction(e1.greaterLength, 'hello', 'player')); // 'hello, player'