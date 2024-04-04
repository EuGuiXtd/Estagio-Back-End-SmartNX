const peoples = require ('./utils').peoples;

function getPeopleAtAgeSmallerThanTwentyFive (peoples) {
    return peoples.filter(people => people.idade < 25);
}

console.log(getPeopleAtAgeSmallerThanTwentyFive(peoples)); // [ { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 }, { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 }, { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 } ]