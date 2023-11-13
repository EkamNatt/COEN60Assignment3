let playerName = "";
let gameStarted = false;
let totalPlays = 0;
let paperCount = 0;
let scissorsCount = 0;
let rockCount = 0;

function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName === "") {
        alert("Please enter your name.");
    } else {
        document.getElementById("welcomeText").textContent = `Welcome, ${playerName}! Let's play Rock Paper Scissors.`;
        gameStarted = true;
        document.getElementById("gameContainer").style.display = "block";
    }
}

function getRandomChoice() {
    const choices = ["paper", "scissors", "rock"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateHistoryText() {
    document.getElementById("totalPlays").textContent = totalPlays;
    document.getElementById("paperCount").textContent = paperCount;
    document.getElementById("scissorsCount").textContent = scissorsCount;
    document.getElementById("rockCount").textContent = rockCount;
}

function play(choice) {
    if (!gameStarted) {
        alert("Please start the game first.");
        return;
    }

    const computerChoice = getRandomChoice();
    document.getElementById("yourChoice").textContent = `You selected: ${choice}`;
    document.getElementById("computerChoice").textContent = `Computer selected: ${computerChoice}`;

    totalPlays++;

    // Update the counters based on the user's choice
    if (choice === "paper") {
        paperCount++;
    } else if (choice === "scissors") {
        scissorsCount++;
    } else if (choice === "rock") {
        rockCount++;
    }

    updateHistoryText();

    const result = compare(choice, computerChoice);
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
