function stringReplace (str, search, replace) {
    let newStr = str;
    search.forEach((element) => {
        newStr = newStr.replace(element, replace);
    });
    return newStr;
    }

const str = 'teste 1 de 2 string 3';
const search = ['1', '2', '3'];
const replace = '[removido]';

console.log(stringReplace(str, search, replace));