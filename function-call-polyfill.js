// function - Call polyfill

Function.prototype.myCall = function(context, ...args){
    if (typeof this !== "function") {
        throw new TypeError("Function.prototype.myApply - what is trying to be called is not callable");
    }
    let currentContext = context || globalThis;
    let randomProp = Math.random();
    while( currentContext[randomProp] !== undefined ){
        randomProp = Math.random();
    }
    currentContext[randomProp] = this;
    let result = currentContext[randomProp](...args);
    delete currentContext[randomProp];
    return result;
}

// Example

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
    name: 'John'
};

greet.myCall(person, 'Alice');