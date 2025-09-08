// Example with different variable types
var myNumber = 42;
var myString = "Hello World";
var myBoolean = true;

// Display results using typeof
document.getElementById("typeof1").innerHTML = "myNumber is of type: " + typeof myNumber;
document.getElementById("typeof2").innerHTML = "myString is of type: " + typeof myString;
document.getElementById("typeof3").innerHTML = "myBoolean is of type: " + typeof myBoolean;

// Type coercion examples

// String + Number → Number becomes a string
var result1 = "5" + 5;  
document.getElementById("coercion1").innerHTML =
  '"5" + 5 = ' + result1 + " (Type: " + typeof result1 + ")";

// String - Number → String is coerced into a number
var result2 = "10" - 2; 
document.getElementById("coercion2").innerHTML =
  '"10" - 2 = ' + result2 + " (Type: " + typeof result2 + ")";

// Boolean + Number → Boolean is coerced into a number (true = 1, false = 0)
var result3 = true + 5; 
document.getElementById("coercion3").innerHTML =
  "true + 5 = " + result3 + " (Type: " + typeof result3 + ")";

// Equality with coercion
var result4 = (0 == false);  
document.getElementById("coercion4").innerHTML =
  "0 == false → " + result4 + " (coercion allowed)";

// Strict equality (no coercion)
var result5 = (0 === false);  
document.getElementById("coercion5").innerHTML =
  "0 === false → " + result5 + " (no coercion)";

  // Console log example with math
var a = 8;
var b = 4;
var result = a * b;  // multiplication
console.log("The result of " + a + " * " + b + " is: " + result);

// Example: Display "false" in the console using Boolean logic
console.log(10 > 20);   // false

console.log(5 === "5");   // false (strict equality check)
console.log(true && false); // false (AND operator)
console.log(!true);        // false (NOT operator)

// a. Return true (same data type and same value)
document.getElementById("example1").innerHTML = "10 === 10 → " + (10 === 10);

// b. Return false (different data type and different value)
document.getElementById("example2").innerHTML = "'10' === 20 → " + ("10" === 20);

// c. Return false (different data type but same value)
document.getElementById("example3").innerHTML = "5 === '5' → " + (5 === "5");

// d. Return false (same data type but different value)
document.getElementById("example4").innerHTML = "100 === 200 → " + (100 === 200);

// Logical Operators Demo with <p> elements

// AND (&&) - both must be true
document.getElementById("and1").innerHTML = "true && true → " + (true && true);
document.getElementById("and2").innerHTML = "true && false → " + (true && false);

// OR (||) - at least one must be true
document.getElementById("or1").innerHTML = "true || false → " + (true || false);
document.getElementById("or2").innerHTML = "false || false → " + (false || false);

// NOT (!) - negates the value
document.getElementById("not1").innerHTML = "!true → " + (!true);
document.getElementById("not2").innerHTML = "!false → " + (!false);



