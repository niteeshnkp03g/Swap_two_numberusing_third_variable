//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a swap variable
let swap;

//swap variables
swap = a;
a = b;
b = swap;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
