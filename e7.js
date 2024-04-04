const peoples = require('./utils').peoples;

function getFullName (peoples) {
    return peoples.map(people => {
        const nameUpercase = people.nome.charAt(0).toUpperCase() + people.nome.slice(1);
        return `${nameUpercase} ${people.sobrenome}`;
    });
}

console.log(getFullName(peoples)); // [ 'Juca da silva', 'Daniel gonçalves', 'Matheus garcia', 'Gabriel pinheiro' ]