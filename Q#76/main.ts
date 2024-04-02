// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
// Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like personal assistants that do a specific task for you and report back with the results.
const addition = (val1:number,val2:number) =>{
  let sum = val1 + val2;
    return sum;
}
console.log(addition(2,8));