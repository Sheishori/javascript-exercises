const palindromes = function (string) {
	let input = string.toLowerCase().replace(/[^a-z]/g, "");
	let reversed = input.split("")
	                    .reverse()
											.join("");
	return input === reversed;
};

// Do not edit below this line
module.exports = palindromes;
