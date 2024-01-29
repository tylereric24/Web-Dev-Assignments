// Step 1: Create a variable called coinFlip and set it equal to a random number
var coinFlip = Math.random();

// Step 2: Prompt the user to select "Heads or Tails" and set the result to a new variable called choice
var choice = prompt("Select 'Heads' or 'Tails'");

// Step 3: Use a conditional to check the result of the coin flip
if (coinFlip < 0.5) {
    // Step 4: If the result is heads and the user selects heads, display the following message within an alert
    if (choice.toLowerCase() === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    }
    // Step 5: If the result is heads and the user selects tails, display the following message within an alert
    else if (choice.toLowerCase() === "tails") {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else {
    // Step 6: If the result is tails and the user selects heads, display the following message within an alert
    if (choice.toLowerCase() === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    }
    // Step 7: If the result is tails and the user selects tails, display the following message within an alert
    else if (choice.toLowerCase() === "tails") {
        alert("The flip was tails and you chose tails...you win!");
    }
}
