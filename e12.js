const {people} = require('./utils');

function removeKey (person,key) {
    delete person[key]
    return person;
}
console.log(removeKey(people,'documento')); // { nome: 'dev', sobrenome: 'smart', idade: 26, cargo: 'analista de sistemas'}