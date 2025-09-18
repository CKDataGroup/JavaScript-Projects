// ==== Previous scope demo (kept; simple no-op if different in your version) ====
function testScope() {
  // Example local/global demonstration (harmless if your original differed)
  const localMessage = "Local scope is working.";
  console.log(localMessage);
  window.globalMessage = "Global scope is working.";
  console.log(window.globalMessage);
}

// ==== Previous greeting feature (unchanged) ====
function displayGreeting() {
  let hour = new Date().getHours(); // 0-23
  let message = "";

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  document.getElementById("greeting").innerHTML = message;
}

// ==== Previous time check feature (unchanged) ====
function checkTimeOfDay() {
  let hour = new Date().getHours(); // 0-23
  let message = "";

  if (hour < 12) {
    message = "Good morning! It is before noon.";
  } else {
    message = "Good afternoon or evening! It is after noon.";
  }

  alert(message);
}

// ==== Age function (fixed: always displays a proper message) ====
function Age_Function() {
  const ageInput = document.getElementById("Age").value.trim();
  const age = parseInt(ageInput, 10);

  let voteMessage;

  if (Number.isNaN(age)) {
    voteMessage = "Please enter a valid age.";
  } else if (age >= 18) {
    voteMessage = "You are old enough to vote!";
  } else {
    voteMessage = "You are not old enough to vote!";
  }

  // Writes the message regardless of branch (fixed ID and placement)
  document.getElementById("Age_Result").textContent = voteMessage;
}

