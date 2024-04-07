const {people} = require('./utils');

function removeKey (person,key) {
    delete person[key]
    return person;
}
console.log(removeKey(people,'documento')); // { nome: 'juca', sobrenome: 'da silva', idade: 25 }