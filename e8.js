const peoples = require ('./utils').peoples;

function getSumAge (ages) {
    return ages.reduce((acc, cur) => acc + cur.idade, 0);
}

console.log(getSumAge(peoples)); // 112