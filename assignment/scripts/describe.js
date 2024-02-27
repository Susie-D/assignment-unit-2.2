// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set as a string variable with an initial value of "Dane".
// We check if the name variable is equivalent the initial value of "Dane" with the value of "Mary".
// If the name variable is "Mary", we console.log, 'Hi, Mary'.
// If the name variable is not "Mary", we instead console.log 'How do you do?'.
// In this case, since the initial value is "Dane" (and we did not update the value), we would console.log 'How do you do?' as a result.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret. We also create a variable called code. The variable code has a value which is set to 123 as a number.
// If code has the value 123, we set and update the variable secret to a 'super' which is a string. We also set and update the variable code (which has the initial number value of 123). Code is now 123 multiped by 2 which equals to a number value of 246.
// Now we move on the next code block to check and compare our values. If code is greater than the number value of 250, (which it is NOT since we discovered that it equals to 246), the variable secret would have been set and updated the to 'duper' string value.
// When we console.log secret, we should have an output string value of 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called isStudent. The variable isStudent is set to a value of true. 
// When a value is set to only true (or only false), we consider the variable to have a boolean value. 
// We create a variable called age that is set to a number value of 34 that represents a student's age. We also create a variable called zip that is set to a number value of 55407 that represents an area code.
// Now we move on to the next code block and compare the variables and the values the variables contain. 
// If the isStudent boolean value is true, as well as the zip code number value is less than the number value 80000, console.log will output a string value 'You're a student on the West Coast!'
// If the isStudent boolean value is false, or the age number value is less than the number value 30, console.log will output a string value 'What are your hobbies?'
// If none of the previous statements met the statement's criteria, we would move on to the next code block and only check if the isStudent variable has a value of true. Since our initial value of isStudent is true, the initial value of zip is not greater than 8000, and the initial value of age is not less than 30, we would indeed console.log 'Welcome to Prime'. This would complete the code.
// We would not move on to the next statement and we would not console.log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
