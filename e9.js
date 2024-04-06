const {peoples} = require('./utils');
function verifyAge (peoples) {
    if (peoples.some(people => people.idade < 25)) {
        console.log(peoples);
    }
}

verifyAge(peoples); 