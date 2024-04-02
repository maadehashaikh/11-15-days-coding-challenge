"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).
// const isinclude = (sentence : string) => {
//    return sentence.includes("Javascript");
// }
// console.log(isinclude("The main and focused languages for web developers are javascript"));
const isInclude = (sentence) => {
    return sentence.includes("JavaScript");
};
console.log(isInclude("The main and focused languages for web developers are JavaScript"));
