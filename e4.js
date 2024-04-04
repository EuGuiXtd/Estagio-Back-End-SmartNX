function stringReplace (str, search, replace) {
    let newStr = str;
    search.forEach((element) => {
        newStr = newStr.replace(element, replace);
    });
    return newStr;
    }

let str = 'teste 1 de 2 string 3';
let search = ['1', '2', '3'];
let replace = '[removido]';

console.log(stringReplace(str, search, replace));