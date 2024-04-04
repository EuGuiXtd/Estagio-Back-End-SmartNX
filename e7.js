const names = require('./utils').names;

function getFullNameAndPassTheFisrtLetterTouppercase (names) {
    return names.map(name => {
        const nameUpercase = name.nome.charAt(0).toUpperCase() + name.nome.slice(1);
        return `${nameUpercase} ${name.sobrenome}`;
    });
}

console.log(getFullNameAndPassTheFisrtLetterTouppercase(names)); // [ 'Juca da silva', 'Daniel gonçalves', 'Matheus garcia', 'Gabriel pinheiro' ]