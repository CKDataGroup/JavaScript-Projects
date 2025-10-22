/* Pizza_JavaScript/Pizza.js
   Change pricing here dictionary-based pricing, helpers, and clear flow.
*/

(() => {
  // ---- Configuration -------------------------------------------------------
  const SIZE_PRICES = {
    "Personal Pizza": 6,
    "Small Pizza": 8,          // <-- newly added size
    "Medium Pizza": 10,
    "Large Pizza": 14,
    "Extra Large Pizza": 16
  };

  const TOPPING_PRICE = 1;      // price per topping after the free allowance
  const FREE_TOPPINGS = 1;      // first N toppings are free

  // ---- Helpers -------------------------------------------------------------
  function getSelectedRadioValue(className) {
    const nodes = document.getElementsByClassName(className);
    for (let i = 0; i < nodes.length; i++) {
      const el = nodes[i];
      if (el.type === "radio" && el.checked) return el.value;
    }
    return null;
  }

  function getCheckedValues(className) {
    const values = [];
    const nodes = document.getElementsByClassName(className);
    for (let i = 0; i < nodes.length; i++) {
      const el = nodes[i];
      if (el.type === "checkbox" && el.checked) values.push(el.value);
    }
    return values;
  }

  function money(n) {
    // Format as $X.00 (EU style). Adjusted to local currency
    return n.toLocaleString("pt-PT", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
  }

  // ---- Main flow -----------------------------------------------------------
  window.getReceipt = function getReceipt() {
    // Size
    const selectedSize = getSelectedRadioValue("size");
    const sizePrice = SIZE_PRICES[selectedSize] ?? 0;

    // Toppings
    const toppings = getCheckedValues("toppings");
    const toppingCount = toppings.length;
    const chargeableToppings = Math.max(0, toppingCount - FREE_TOPPINGS);
    const toppingsTotal = chargeableToppings * TOPPING_PRICE;

    // Totals
    const runningTotal = sizePrice + toppingsTotal;

    // ---- Render ------------------------------------------------------------
    let html = "<h3>You Ordered:</h3>";
    if (selectedSize) {
      html += `${selectedSize} — ${money(sizePrice)}<br>`;
    } else {
      html += `<em>No size selected</em> — ${money(0)}<br>`;
    }

    if (toppings.length) {
      html += "<br><strong>Toppings:</strong><br>";
      html += toppings.map((t, i) => {
        // Mark which toppings are charged vs. free
        const isCharged = i >= FREE_TOPPINGS;
        return `${t}${isCharged ? ` (+${money(TOPPING_PRICE)})` : " (free)"}`;
      }).join("<br>");
      html += `<br>`;
    } else {
      html += "<br><strong>Toppings:</strong> None<br>";
    }

    document.getElementById("showText").innerHTML = html;
    document.getElementById("totalPrice").innerHTML =
      `<h3>Total: <strong>${money(runningTotal)}</strong></h3>`;
  };
})();
