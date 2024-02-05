// Function to generate computer's choice
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return "It's a tie!";
    }
    if(userChoice === "rock") {
        if(computerChoice === "paper") {
            return "You lose!";
        } else {
            return "You win!";
        }
    }
    if(userChoice === "paper") {
        if(computerChoice === "scissors") {
            return "You lose!";
        } else {
            return "You win!";
        }
    }
    if(userChoice === "scissors") {
        if(computerChoice === "rock") {
            return "You lose!";
        } else {
            return "You win!";
        }
    }
}

// Function to play the game
function playGame() {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    userChoice = userChoice.toLowerCase(); // Convert user choice to lowercase for comparison

    if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Please enter a valid choice (rock, paper, or scissors).");
        return; // Exit the function if user input is invalid
    }

    var computerChoice = getComputerChoice();

    alert("Opponent chooses: " + computerChoice);

    var result = determineWinner(userChoice, computerChoice);
    alert(result);
}

// Call the function to play the game
playGame();
