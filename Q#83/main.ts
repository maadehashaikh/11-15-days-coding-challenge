// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.
const converting_toupper_tolower_case = (sentence :string) => {
     let toUppercase = sentence.toUpperCase();
     let toLowercase = sentence.toLowerCase();
     console.log(`This is in uppercase : ${toUppercase} \n This is in lowecase :${toLowercase}`)
}
converting_toupper_tolower_case("hey there is it fun to learn programming ? ")