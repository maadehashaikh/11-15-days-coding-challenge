// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.
function logObjectProperties(obj:{ [key: string]: any }) {
  for (let key in obj) {
          console.log(`${key}: ${obj[key]}`);
      }
}
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2023,
  color: "blue"
};
logObjectProperties(car);