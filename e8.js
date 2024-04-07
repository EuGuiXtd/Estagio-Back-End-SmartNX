const {peoples} = require ('./utils');

function getSumAge (persons) {
    console.log(persons.reduce((acc, cur) => acc + cur.idade, 0));
}

getSumAge(peoples); // 112