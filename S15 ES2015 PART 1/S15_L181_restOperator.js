// Write a function to sum all arguments and return the total

// 1st implementation (standard javascript)
function sumArguments1() {
    let total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// 2nd implementation (fancier javascript ES2015)
function sumArguments2() {
    let args = [].slice.call(arguments);
    console.log(args);
    return args.reduce(function(curr, accum) {
        return curr + accum;
    });
}

// 3rd implementation (rest operator with arrow functions)
let sumArguments3 = (...args) => args.reduce((curr, accum) => curr + accum);

console.log(sumArguments1(1, 2, 3, 4, 5));
console.log(sumArguments2(1, 2, 3, 4, 5));
console.log(sumArguments3(1, 2, 3, 4, 5));
