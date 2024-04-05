const peoples = require ('./utils').peoples;

function verifyAge (peoples) {
    if (peoples.some(people => people.idade < 25) === true ) {
        return peoples;
    }
    return false;
}

console.log(verifyAge(peoples)); // true