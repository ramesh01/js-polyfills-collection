// Array method - Filter polyfill

Array.prototype.myFilter = function (callbackFn, thisArg) {
	if (typeof callbackFn !== "function") {
		throw new TypeError(callbackFn + " is not a function");
	}
	var arr = [];
	for (var i = 0; i < this.length; i++) {
		if (callbackFn.call(thisArg, this[i], i, this)) {
			arr.push(this[i]);
		}
	}
	return arr;
};

function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].myFilter(isBigEnough);
console.log(filtered);
