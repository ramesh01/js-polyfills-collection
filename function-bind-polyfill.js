// function - Bind polyfill

Function.prototype.myBind = function(thisArg, ...args) {
    let fn = this; // this is the function that you are calling `bind` on.
    return function(...args1) {
        return fn.apply(thisArg, [...args, ...args1]);
    }
}


// Example

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
    name: 'John'
};

const boundGreet = greet.myBind(person, 'Alice');
boundGreet(); // Output: Hello, Alice! My name is John.