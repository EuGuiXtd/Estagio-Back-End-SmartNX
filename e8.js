const peoples = require ('./utils').peoples;

function getSumAge (peoples) {
    return peoples.reduce((acc, cur) => acc + cur.idade, 0);
}

console.log(getSumAge(peoples)); // 112