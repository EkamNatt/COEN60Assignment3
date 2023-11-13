// Prompt for the player's name
const playerName = window.prompt("Please enter your name:");

// Check if the player entered a name and it's not empty
if (playerName) {
    // Display the player's name and welcome message
    const welcomeContainer = document.getElementById("welcomeContainer");
    welcomeContainer.innerHTML = `<p>Welcome, ${playerName}!</p>`;
} else {
    // Handle the case where the player didn't enter a name
    alert("Please enter your name to continue.");
}

// Game variables
let totalPlays = 0;
let paperCount = 0;
let scissorsCount = 0;
let rockCount = 0;

// Play function
function play() {
    let choice = document.querySelector('input[name="choice"]:checked');
    if (!choice) {
        alert("Please select Rock, Paper, or Scissors.");
        return;
    }
    choice = choice.value;

    const computerChoice = getRandomChoice();
    document.getElementById("yourChoice").textContent = `Your choice: ${choice}`;
    document.getElementById("computerChoice").textContent = `Computer choice: ${computerChoice}`;

    totalPlays++;
    updateCounts(choice);
    updateHistoryText();

    const result = compare(choice, computerChoice);
    document.getElementById("resultText").textContent = `Result: ${result}`;
}

// Function to get a random computer choice
function getRandomChoice() {
    const choices = ["paper", "scissors", "rock"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to update play counts
function updateCounts(choice) {
    if (choice === "paper") paperCount++;
    if (choice === "scissors") scissorsCount++;
    if (choice === "rock") rockCount++;
}

// Function to update history text
function updateHistoryText() {
    let historyText = `History: You have played a total of ${totalPlays} time(s)! Paper: ${paperCount} time(s) & Scissors: ${scissorsCount} time(s) & Rock: ${rockCount} time(s).`;
    document.getElementById("historyText").textContent = historyText;
}

// Function to compare player and computer choices
function compare(yourChoice, computerChoice) {
    if (yourChoice === computerChoice) return "It's a tie!";
    if ((yourChoice === "rock" && computerChoice === "scissors") || (yourChoice === "paper" && computerChoice === "rock") || (yourChoice === "scissors" && computerChoice === "paper")) return "You win!";
    return "Computer wins!";
}
