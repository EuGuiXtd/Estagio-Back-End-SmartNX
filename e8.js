const {peoples} = require ('./utils');

function getSumAge (peoples) {
    console.log(peoples.reduce((acc, cur) => acc + cur.idade, 0));
}

getSumAge(peoples); // 112