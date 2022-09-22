// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting () {
  console.log("Hello, it's nice to meet you.");
}

printGreeting();
printGreeting();
printGreeting();



// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function printGreeting2 (name) {
  console.log(`Hello ${name}, it's nice to me you.`);
}

printGreeting2("Faye");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function company (name, payMax, payMin) {
 var payRange = payMax - payMin;
  console.log(`The name of this company is ${name} and the pay range is $${payRange} with a starting salary of $${payMin}`);
}
company("Turing","100000","80000");

// 4: Write a function that satifies the following interaction pattern:

function checkStock(amount, food) {
 if (amount > 3) {
  console.log(`${food} is stocked`);
}
  else if (amount < 1) {
  console.log(`${food} - OUT of stock!`);
}
  else {
  console.log(`${food} - running LOW`);
}
}

// 

checkStock(4, "Coffee");
checkStock(3, "Tortillas");
checkStock(0, "Cheese");
checkStock(1, "Salsa");



// checkStock(4, "Coffee");
// // => "Coffee is stocked"
//
// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"
//
// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"
//
// checkStock(1, "Salsa");
// // => "Salsa - running LOW"
