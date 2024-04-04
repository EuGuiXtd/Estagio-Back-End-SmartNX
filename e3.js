function stringConcatenation (...args) {
    return args.map(arg => arg).join(' ');
}

console.log(stringConcatenation("hello", 'user')); // ' hello user'