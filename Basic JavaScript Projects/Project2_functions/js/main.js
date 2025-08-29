/* ===== Archived code (preserved; no longer runs) =====
var A = "Hello World!"; // variable assignment
document.write(A); // the write function is deprecated

let message1 = 'It\'s a beautiful day!'; // escape character
let message2 = "She said, \"Hello there!\""; // escape character

window.alert(message1); // alert function
window.alert(message2);

// concatenate function
document.write("\"Be who you are and say what you feel, "
  + "because those who mind don\'t matter, and those who matter don\'t mind.\""
  + "- Dr. Seuss");

// multiple variables
var Family = "The Arezzinis", Dad = "Jacob", Mom = "Beth",
  Son = "Josh", Daughter = "Emily";
// document.getElementByIdwrite(Dad)  // invalid, leaves as reference

// writing an expression
let result = 5 + 10;
window.alert("The result of 5 + 10 is: " + result);
===== End archived code ===== */



function showGreeting() {
  // Two variables
  const firstName = "Manuel";
  const favoriteColor = "navy";

  // Build the sentence with +=
  var sentence = "Hello Manuel, ";
  sentence += "it seems that your favorite color is ";
  sentence += favoriteColor;
  sentence += ".";

  // Write it to the page
  var p = document.getElementById("greeting");
  p.textContent = sentence;
  p.style.color = favoriteColor; // optional styling
}
