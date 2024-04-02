// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.
// Function Declaration:
function addition(val1, val2) {
    return val1 + val2;
}
console.log(addition(3, 4));
//Function Expression
var Addition = function (val1, val2) {
    return val1 + val2;
};
console.log(Addition(6, 1));
