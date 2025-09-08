// ===== Vehicle Example =====
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function showVehicle() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " +
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// ===== Student Example =====
function Student(Name, Age, Major) {
  this.Student_Name = Name;
  this.Student_Age = Age;
  this.Student_Major = Major;
}
var Alex = new Student("Alex Johnson", 21, "Computer Science");

function showStudent() {
  document.getElementById("New_and_This").innerHTML =
    Alex.Student_Name + " is " + Alex.Student_Age + " years old and studies " + Alex.Student_Major + ".";
}

// 1. Reserved Keyword Example
function reservedKeywordTest() {
  // You CANNOT do this: var var = "Hello";  (syntax error)
  // Instead, we'll just show what happens if you try to use "var"

  try {
    // This line would throw an error if uncommented:
    // var var = "Hello";

    document.getElementById("reserved").innerHTML =
      "You cannot use 'var' (or other reserved keywords) as variable names!";
  } catch (error) {
    document.getElementById("reserved").innerHTML = error.message;
  }
}

// 2. Object Constructor Function Example
function Person(Name, Age) {
  this.Person_Name = Name;
  this.Person_Age = Age;
}

var John = new Person("John Doe", 30);

function constructorTest() {
  document.getElementById("constructor").innerHTML =
    John.Person_Name + " is " + John.Person_Age + " years old.";
}

// Nested Function Example
function outerFunction() {
  function innerFunction(x) {
    return x * x; // Inner function squares the number
  }

  let result = innerFunction(5); // Call inner function

  document.getElementById("Nested_Function").innerHTML =
    "The result of the nested function is: " + result;
}
