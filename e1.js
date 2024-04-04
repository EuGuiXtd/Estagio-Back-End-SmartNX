function greaterLength (str1, str2) {
    return str1.length > str2.length ? str1 : str2;
}

console.log(greaterLength('hello', 'user')); // 'hello'

module.exports = { greaterLength };