function addition_Function() {
  const result = 2 + 2;
  document.getElementById("Addition").innerHTML = "2 + 2 = " + result;
}
function subtraction_Function() {
  const result = 10 - 3;
  document.getElementById("Subtraction").innerHTML = "10 - 3 = " + result;
}
function multiplication_Function() {
  const result = 6 * 7;
  document.getElementById("Multiplication").innerHTML = "6 × 7 = " + result;
}
function division_Function() {
  const result = 21 / 3;
  document.getElementById("Division").innerHTML = "21 ÷ 3 = " + result;
}
function more_Math_Function() {
  // Example of a combined operation
  const result = (1 + 2) * (3 + 4) - 5 / 5;
  document.getElementById("more_Math").innerHTML =
    "(1 + 2) × (3 + 4) − 5 ÷ 5 = " + result;
}
function modulus_Operator() {
  const result = 25 % 6;
  document.getElementById("modulus").innerHTML = 
  "25 % 6  = " + result;
}
function negation_Operator() {
  const x = 10;
  document.getElementById("negation").innerHTML = -x;
}
function increment_Operator() {
  var x = 5;
  x++;
  document.getElementById("increment").innerHTML = x;  
}
function decrement_Operator() {
  var x = 5.25;
  x--;
  document.getElementById("decrement").innerHTML = x;
}  
function random_Number() {
  var x = Math.random() * 100;
  document.getElementById("random").innerHTML = x;
}
function math_object() {  //I am choosing the square root function
  const num = 25;
  const result = Math.sqrt(num);
  document.getElementById("math_object").innerHTML = "The square root of " + num + " is " + result;
}
function my_Dictionary() {
  var Animal = {
      Species: "Dog",
      Color: "Black",
      Breed: "Labrador",
      Age: 5,
      Sound: "Bark!"
  }
  document.getElementById("Dictionary").innerHTML = Animal.Sound;
}  
  
  
  
  
  
  // It is working on all the operators
  