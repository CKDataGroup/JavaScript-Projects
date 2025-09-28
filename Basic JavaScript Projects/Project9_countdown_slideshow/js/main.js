(function () {
    'use strict';

    var timeoutId = null;

    function formatTime(totalSeconds) {
        var minutes = Math.floor(totalSeconds / 60);
        var secs = totalSeconds % 60;
        return minutes + ":" + (secs < 10 ? "0" + secs : secs);
    }

    function countdown() {
        var inputEl = document.getElementById("seconds");
        var timerEl = document.getElementById("timer");

        // Parse starting value
        var seconds = parseInt(inputEl.value, 10);

        if (isNaN(seconds) || seconds <= 0) {
            alert("Please enter a valid number of seconds.");
            return;
        }

        // Clear any previous timer
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        // Render immediately
        inputEl.value = seconds;
        timerEl.textContent = formatTime(seconds);

        function tick() {
            if (seconds <= 0) {
                timerEl.textContent = "";
                alert("Time's up!");
                return;
            }

            seconds -= 1;

            // Update both display locations
            inputEl.value = seconds;
            timerEl.textContent = formatTime(seconds);

            timeoutId = setTimeout(tick, 1000);
        }

        timeoutId = setTimeout(tick, 1000);
    }

    // Attach after DOM is ready; "defer" in the HTML guarantees this too
    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.getElementById("startButton");
        if (!btn) {
            console.error("startButton element not found");
            return;
        }
        btn.addEventListener("click", countdown);
    });
})();