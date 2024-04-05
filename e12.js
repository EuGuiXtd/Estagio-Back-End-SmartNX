const people = require('./utils').people;

function removeKey (people) {
    const { documento, ...rest } = people;
    return rest;
}
console.log(removeKey(people)); // { nome: 'juca', sobrenome: 'da silva', idade: 25 }