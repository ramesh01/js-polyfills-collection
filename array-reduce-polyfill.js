// Array method - Reduce polyfill

Array.prototype.myReduce = function (callbackFn, initialValue) {
	if (typeof callbackFn !== "function") {
		throw new TypeError(callbackFn + " is not a function");
	}
	let accumulator = initialValue;
	const arr = this;
	for (let i = 0; i < arr.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callbackFn.call(undefined, accumulator, arr[i], i, arr);
        } else {
            accumulator = arr[i];
        }
	}
	return accumulator;
};

console.log(
	[1, 2, 3].myReduce((accu, item) => {
		return accu + item * 2;
	})
);