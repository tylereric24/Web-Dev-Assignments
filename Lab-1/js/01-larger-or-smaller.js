// Prompt the user for the first integer
const firstNumber = parseInt(prompt("Enter the first integer:"));

// Prompt the user for the second integer
const secondNumber = parseInt(prompt("Enter the second integer:"));

let result;

// Compare the two numbers
if (firstNumber > secondNumber) {
    result = firstNumber;
} else if (secondNumber > firstNumber) {
    result = secondNumber;
} else {
    result = "The two numbers are equal";
}

// Display the result in the browser window
document.write(`The larger number is: ${result}`);
