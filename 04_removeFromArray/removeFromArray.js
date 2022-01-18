const removeFromArray = function(array, ...toRemove) {
	for (let i = 0; i < array.length; i++) {
		for (const argument of toRemove) {
			if (array[i] === argument) {
			array.splice(i, 1);
			i--;
			}
		}
	}
	return array
};

// Do not edit below this line
module.exports = removeFromArray;
