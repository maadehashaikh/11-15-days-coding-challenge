// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.
var decimal_roundingoff = function (value) {
    return Math.round(value);
};
console.log(decimal_roundingoff(76.9978));
