/*
More Javascript Concepts: async... await

Task:
	1. A coin flip is expected to take at least 2.6 seconds and at most 5 seconds. The time taken is somewhat random.
	Using the function coinFlipPromise which returns the coin flip after a given time, define a function `coinFlips`
	The function will take an argument `n` which defines the number of coin flips within a given time.
	The function must generate `n` coin flips one after the other and display the output of each of them.

	For example:
	coinFlips(2)

	Output:
	Heads		(at t = 3.47s)
	Heads		(at t = 8.62s)

	Note: The time (t = x s) does not have to be displayed 

	2. Rewrite the function `responseHandler` into an async function `asyncResponseHandler`
*/

// Do not edit the code until mentioned

const { writeFile } = require('fs').promises;

const coinFlipPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => resolve(Math.random() >= 0.5 ? 'Heads' : 'Tails'),
		(2.6 + 2.4 * Math.random()) * 1_000);
});

const responseHandler = payload => {
	fetch(URL, {
		method: 'POST',
		body: JSON.stringify(payload)
	}).then(response => response.json())
		.then(body => {
			console.log(body);
			return Promise.resolve(body.message)
		}).then(message => writeFile('output.txt', JSON.stringify(message)));
};

// Write your code over here. Make sure to comment before each part.

// 1.the coinFlips function
const coinFlips = async (n) => {
	for (let i = 0; i < n; i++) {

		const result = await coinFlipPromise();

		console.log(result);
	}
};

//2. Rewrite the function `responseHandler` into an async function `asyncResponseHandler`
async function asyncResponseHandler() {
	try {
		const response = await fetch("url");
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(" an error occured.");
	}
}