// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
// Explain & TIP: The .length property of a string gives you the total number of characters it contains, helping you understand more about the data you're working with
function lenString(message) {
    return ("The length of the string you pass is : ".concat(message.length));
}
console.log(lenString("I am maadeha shaikh learing TS !"));