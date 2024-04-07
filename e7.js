const {peoples} = require('./utils');

function getFullName (persons) {
    persons.forEach(people => {
        const nameUpercase = people.nome.charAt(0).toUpperCase() + people.nome.slice(1);
        console.log(`Ola, ${nameUpercase} ${people.sobrenome}`);
    });
}

getFullName(peoples); // [ 'Ola, Juca da silva', 'Ola, Daniel gonçalves', 'Ola, Matheus garcia', 'Ola, Gabriel pinheiro' ]