const reverseString = function(str) {
	let splitString = str.split("");
	let reversed = "";
	let arrayLength = splitString.length;
	for (let i = 0; i < arrayLength; i++) {
		reversed += splitString.pop();
	}
	return reversed
};

// Do not edit below this line
module.exports = reverseString;
