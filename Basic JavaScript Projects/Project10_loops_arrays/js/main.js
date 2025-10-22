function searchColor() {
  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous results

  const colors = ["Blue", "Yellow", "Red", "Orange", "White"];

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const colorStyle = `color: ${color.toLowerCase()}`; // Apply color dynamically

    output.innerHTML += `<strong>Step 1:</strong> Acquired <span class="color-text" style="${colorStyle}">${color}</span><br>`;
    output.innerHTML += `Step 2: Checked if item "<span class="color-text" style="${colorStyle}">${color}</span>" is equal to "Red"<br>`;

    if (color === "Red") {
      output.innerHTML += `<span style="color: green;">Step 3: Item equal to "Red." Exited the loop.</span><br><br>`;
      break;
    } else {
      output.innerHTML += `Step 3: Item not equal to "Red." Did not exit the loop.<br>`;
      output.innerHTML += `Step 4: Item not equal to "Red." Looped back to Step 1.<br><br>`;
    }
  }
}

