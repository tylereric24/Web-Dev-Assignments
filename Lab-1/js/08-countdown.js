// Prompt the user for a number
const number = parseInt(prompt("Enter a number:"));

// Validate the input
if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Countdown from the input number to 0
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
