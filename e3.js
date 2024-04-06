function stringConcatenation (...args) {
    console.log(args.map(arg => arg).join(''));
}

stringConcatenation("hello", 'user'); // ' hello user'