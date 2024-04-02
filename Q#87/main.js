// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
var extracting_characters = function (sentence) {
    return sentence.substring(0, 10);
};
console.log(extracting_characters("I'm maadeha shaikh learning TS now ."));
