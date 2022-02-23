const findTheOldest = function(people) {
	let sorted = people.sort((first, second) => {
		let firstAge = (first.yearOfDeath ? first.yearOfDeath : new Date().getFullYear()) - first.yearOfBirth;
		let secondAge = (second.yearOfDeath ? second.yearOfDeath : new Date().getFullYear()) - second.yearOfBirth;
		return firstAge > secondAge ? -1 : 1});
	return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
