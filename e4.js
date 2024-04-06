function stringReplace (str, replace) {
    return str.replace(/[0-9]/g, replace);
  }
const str = 'teste 1 de 2 string 3';
const replace = '[removido]';

console.log(stringReplace(str, replace));