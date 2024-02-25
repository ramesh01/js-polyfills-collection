// function - Apply polyfill

Function.prototype.myBind = function(context, args) {
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

greet.myBind(person, ['Alice']);