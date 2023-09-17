/**
 * functions: a function is a block of code designed to perform a particular task
 * Our function can take parameters and can also be empty
 *
 * funstions take parameters and return values
 * our functions can also take more than one parameter
 * when calling a function, we specify the value to be passed into the function, this is called an argument
 *
 */

//class work

/**
 * countryAlphaCode  a function that returns the country name with it's alpha code of the country passed in
 * {string} country: the country name
 * {string} alphacode: the alpha code of the country
 *
 * return {string} the alpha code of the country
 */
function countryAlphaCode(country, alphacode) {
	console.log(country + " " + alphacode);
}

countryAlphaCode('Nigeria', 'NIG');
countryAlphaCode('Ghana', 'GHA');
countryAlphaCode('Kenya', 'KEN');

// class work
/**
 * multiply - a function
 */

function add(a, b) {
	console.log(a + " + " + b + " = ", a + b)
	console.log(a + " + " + b + " = " + (a + b))
}

// function add(a, b) {
//     let result = a + b
//     console.log(a + b)
//     console.log(a + ' + ' + b + ' = ' + a + b)
// }

add(2, 3)


//assignment
// multiply
function multiply(a, b) {
	console.log(a + " x " + b + " = " + a * b)
}

multiply(2, 3)

// subtraction

function subtraction(a, b) {
	console.log(a + " - " + b + " = " + (a - b))
}

subtraction(2, 3)
