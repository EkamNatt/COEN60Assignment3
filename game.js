let playerName = "";

function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName === "") {
        alert("Please enter your name.");
    } else {
        document.getElementById("gameContainer").style.display = "block";
        document.write(`Welcome, ${playerName}! Let's play Rock Paper Scissors.`);
    }
}

function getRandomChoice() {
    const choices = ["paper", "scissors", "rock"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let totalPlays = 0;
let paperCount = 0;
let scissorsCount = 0;
let rockCount = 0;

function updateHistoryText() {
    document.getElementById("totalPlays").textContent = totalPlays;
    document.getElementById("historyText").textContent = `History: You have played total ${totalPlays} time(s)!
    Paper: ${paperCount} time(s) & Scissors: ${scissorsCount} time(s) & Rock: ${rockCount} time(s).`;
}

function play() {
    const selectedChoice = document.querySelector("input[name='choice']:checked");
    if (!selectedChoice) {
        alert("Please select an option before playing.");
        return;
    }

    const yourChoice = selectedChoice.value;
    const computerChoice = getRandomChoice();
    document.getElementById("yourChoice").textContent = `You selected: ${yourChoice}`;
    document.getElementById("computerChoice").textContent = `Computer selected: ${computerChoice}`;

    totalPlays++;
    updateHistoryText();

    const result = compare(yourChoice, computerChoice);
    document.getElementById("computerResult").textContent = result;
}

function compare(yourChoice, computerChoice) {
    if (yourChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (yourChoice === "rock" && computerChoice === "scissors") ||
        (yourChoice === "paper" && computerChoice === "rock") ||
        (yourChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
