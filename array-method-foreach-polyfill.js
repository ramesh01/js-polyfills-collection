// Array method - forEach polyfill

Array.prototype.myForEach = function(callbackFn, thisArg) {
    const arr = this;
    for (let index = 0; index < arr.length; index++) {
        callbackFn.call(thisArg, arr[index], index, arr);
    }
};

// Example usage:
const numbers = [1, 2, 3];

numbers.myForEach(function (currentValue, index, array) {
    console.log(currentValue, index, array);
});