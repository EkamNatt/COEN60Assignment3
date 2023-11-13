let totalPlays = 0;
let paperCount = 0;
let scissorsCount = 0;
let rockCount = 0;

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
    document.getElementById("computerResult").textContent = `Result: ${result}`;
}

function getRandomChoice() {
    const choices = ["paper", "scissors", "rock"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateCounts(choice) {
    if (choice === "paper") paperCount++;
    if (choice === "scissors") scissorsCount++;
    if (choice === "rock") rockCount++;
}

function updateHistoryText() {
    let historyText = `History: You have played total: ${totalPlays} time(s)! Paper: ${paperCount} time(s) & Scissors: ${scissorsCount} time(s) & Rock: ${rockCount} time(s).`;
    document.getElementById("playHistory").textContent = historyText;
}

function compare(yourChoice, computerChoice) {
    if (yourChoice === computerChoice) return "It's a tie!";
    if ((yourChoice === "rock" && computerChoice === "scissors") || (yourChoice === "paper" && computerChoice === "rock") || (yourChoice === "scissors" && computerChoice === "paper")) return "You win!";
    return "Computer wins!";
}
