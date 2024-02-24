// Array method - Map polyfill

Array.prototype.myMap = function (callbackFn, thisArg) {
	if (typeof callbackFn !== "function") {
		throw new TypeError(callbackFn + " is not a function");
	}
	const result = [];
	const arr = this;
	for (let i = 0; i < arr.length; i++) {
		const response = callbackFn.call(thisArg, arr[i], i, this);
		result.push(response);
	}
	return result;
};

console.log(
	[1, 2, 3].myMap((item) => {
		return item * 2;
	})
);
