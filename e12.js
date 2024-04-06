const {people} = require('./utils');

function removeKey (people,key) {
    delete people[key]
    return people;
}
console.log(removeKey(people,'documento')); // { nome: 'juca', sobrenome: 'da silva', idade: 25 }