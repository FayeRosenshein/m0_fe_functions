// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
  // I added a ; at the end of the log
}
//  I put a ; at the end of this call
nameQuestion();


// EX 2:
function addThreeNums(first, second, third) {
// I add an indent for var and console.log and added a ; at the end
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
// I changed func to function as func is not a command and then I added a space between
//the parenheses and the curly bracket
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
  // I placed the last curly bracket down one line
}

makeFreshPesto();


//  EX 4:
// I placed the curly bracket back to the first line then I indented the first var and removed
// an indent from the second var
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
// I took away the last . before the parenheses and took an indent away from the last curly bracket
// and added a final ; at the end of the console.log
  console.log(`the average is: ${avg}`);
}
