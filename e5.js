function compareAndReplace (dic, str)
{
    for (let key in dic) {
      str = str.replaceAll(dic[key], key);
    }
    return str;
}

const dic = {'a': 4, 'e': 3 ,'i': 1 , 's': 5 };
const str = 'T35t3 d3 35t4g1o';
console.log(compareAndReplace(dic, str));