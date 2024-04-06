const peoples = [{
    id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42
},  {
    id:2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21
},  {
    id:3,nome: 'matheus', sobrenome: 'garcia', idade: 28},  
    {
    id: 4, nome:'gabriel', sobrenome: 'pinheiro', idade: 21
}];

const people = {
    "nome": "Dev",
    "sobrenome":"smart",
    "idade":"26",
    "cargo":"analista de sistemas",
    "documento":"123.345.678-90"
    }

function greaterLength (str1, str2) {
    return str1.length > str2.length ? str1 : str2;
    }


module.exports = {
    peoples,
    people,
    greaterLength
};