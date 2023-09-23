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
// function countryAlphaCode(country, alphacode) {
// 	console.log(country + " " + alphacode);
// }

// countryAlphaCode('Nigeria', 'NIG');
// countryAlphaCode('Ghana', 'GHA');
// countryAlphaCode('Kenya', 'KEN');

// // class work
// /**
//  * multiply - a function
//  */

// function add(a, b) {
// 	console.log(a + " + " + b + " = ", a + b)
// 	console.log(a + " + " + b + " = " + (a + b))
// }

// // function add(a, b) {
// //     let result = a + b
// //     console.log(a + b)
// //     console.log(a + ' + ' + b + ' = ' + a + b)
// // }

// add(2, 3)


// //assignment
// // multiply
// function multiply(a, b) {
// 	console.log(a + " x " + b + " = " + a * b)
// }

// multiply(2, 3)

// // subtraction

// function subtraction(a, b) {
// 	console.log(a + " - " + b + " = " + (a - b))
// }

// subtraction(2, 3)



// /**
//  * Objects
//  */


// let Course = {
// 	name: "Real Analysis II",
// 	code: "MAT 221",
// 	unit: 3,
// 	facultyID: 8,
// 	departmentID: 6,
// 	getDetails: function () {
// 		console.log("Name: Real Analysis, Dept: Mathematics")
// 	}
// }

// console.log(Course.code);

// Course.unit = 4

// console.log(Course)


// Course.getDetails()


// /**
//  * Array
//  */


// let planets = ["Mercury", "Venus", "Mars", "Mars", "Jupiter", "Uranus", "Saturn", "Neptune", "Pluto"]

// console.log(planets);

// planets[2] = "Earth"

// console.log(planets);


// let person = [
// 	{
// 		gender: "male",
// 		address: {
// 			street: "Josh",
// 			city: "Lagos"
// 		}
// 	},
// 	{
// 		gender: "female",
// 		address: {
// 			street: "Josh",
// 			city: "Lagos"
// 		}
// 	}

// ]

// console.log(person[0].gender)
// console.log(person[1].gender)

// person[0].address.city = "ogun"
// person[1].address.city = "ogun"

// console.log(person[0])

// person[2] = "Jamiu"


let age = prompt("Please enter your age: ")

console.log(age)

let citizenship = prompt("Are you a citizen: ")

console.log(citizenship)

if (age >= 18 && citizenship == 'yes') {
	console.log("You are eligible to vote")
}
else {
	console.log("You are not eligible to vote")
}