// Initialize time variables
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display"); // Reference to display element
let int = null; // Interval variable

// Start Timer
document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int); // Clear previous interval if it exists
    }
    int = setInterval(displayTimer, 10); // Start the timer
});

// Pause Timer
document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int); // Clear the interval to pause
});

// Reset Timer
document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int); // Clear interval on reset
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; // Reset time values
    timeRef.innerHTML = "00 : 00 : 00 : 000"; // Reset display
});

// Display Timer Function
function displayTimer() {
    milliseconds += 10; // Increment milliseconds

    // Check if milliseconds reached 1000
    if (milliseconds >= 1000) {
        milliseconds = 0; // Reset milliseconds
        seconds++; // Increment seconds

        // Check if seconds reached 60
        if (seconds >= 60) {
            seconds = 0; // Reset seconds
            minutes++; // Increment minutes

            // Check if minutes reached 60
            if (minutes >= 60) {
                minutes = 0; // Reset minutes
                hours++; // Increment hours
            }
        }
    }

    // Format time values
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds :
             milliseconds < 100 ? "0" + milliseconds : milliseconds;

    // Update display
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
