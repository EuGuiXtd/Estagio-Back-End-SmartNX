function compareAndReplace (dic, str)
{
    var newStr = str;
    for (let i = 0; i < str.length; i++)
    {
        for (let key in dic)
        {
            newStr = newStr.replace(dic[key], key);
        }
    }
    return newStr;
}

const dic = {'a': 4, 'e': 3 ,'i': 1 , 's': 5 };
const str = 'T35t3 d3 35t4g1o';
console.log(compareAndReplace(dic, str));