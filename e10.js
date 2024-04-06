const {peoples} = require ('./utils');

function getPeoplesFilteredByAge (peoples) {
    peoples.filter(people => people.idade < 30).forEach((e)=> console.log(e));
}

getPeoplesFilteredByAge(peoples); //  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 }, { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 }, { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 } 