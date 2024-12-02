
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Named function');
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Anonymous function');
    };
}

module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
