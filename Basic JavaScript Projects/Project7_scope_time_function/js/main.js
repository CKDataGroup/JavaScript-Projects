// Global variable
var globalVar = "I am a global variable";

function testScope() {
  // Local variable
  var localVar = "I am a local variable";

  console.log(globalVar); // ✅ Works
  console.log(localVar);  // ✅ Works

  // Demonstrate intentional error by trying to use localVar outside
  try {
    console.log("Outside localVar: " + outsideLocalVar);
  } catch (error) {
    console.log("Error: localVar is not accessible outside its function");
  }
}
