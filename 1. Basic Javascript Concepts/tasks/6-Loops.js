/*
Basic Javascript Concepts: Loops

Task:
	1. Using a for loop, display the squares of numbers from 1 to 10 (both included)
	2. Using a while loop, display the number and its corresponding factorial while the factorial is less than 2023.
	3. 
		a. Define a variable 'v' with the value 0. 
		b. Define a loop such that the loop runs at least once and as long as the value of v is positive after that.
		c. The loop should display the value of 'v' and then decrease the value of v by 1.
*/

// Write your code over here. Make sure to comment before each part.

console.log('\n');
//for displaying squares of numbers
console.log('squares of numbers from 1 to 10');
for(let i=1;i<=10;i++)
{
	let a=i*i;
	console.log(' square of',i,'is',a);
}

console.log('\n');

//for displaying the number and its factorial
console.log('the number and its factorial');
let fact = 1;
let n = 1;
while (1) {
	let i = n;
	fact = 1;
	while (i >= 1) {
		fact *= i;
		i--;
	}
	if (fact < 2023) {
		console.log(n, '!', '=', fact);
	}
	else {
		break;
	}
	n++;

}


console.log('\n');

//defining variable v with value 0 and defining a loop which atleast runs once
console.log('variable v with value 0 and defining a loop which atleast runs once');
let v=0;
while(v>=0)
{
	console.log(v);
	v--;
}