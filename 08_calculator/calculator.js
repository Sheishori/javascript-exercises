const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function() {
  let a = Array.from(arguments).flat();
  const sumAll = a.reduce((result, current) => result + current, 0);
  return sumAll;
};

const multiply = function() {
  let a = Array.from(arguments).flat();
  const multiplied = a.reduce((result, current) => result * current, 1);
  return multiplied;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let num = 1;
  for (i = 1; i <= a; i++) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
