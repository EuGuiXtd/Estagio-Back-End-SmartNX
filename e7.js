const peoples = require('./utils').peoples;

function getFullName (names) {
    return names.map(name => {
        const nameUpercase = name.nome.charAt(0).toUpperCase() + name.nome.slice(1);
        return `${nameUpercase} ${name.sobrenome}`;
    });
}

console.log(getFullName(peoples)); // [ 'Juca da silva', 'Daniel gonçalves', 'Matheus garcia', 'Gabriel pinheiro' ]