let playerName = "";

function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName === "") {
        alert("Please enter your name.");
    } else {
        document.getElementById("welcomeMessage").textContent = playerName;
        document.getElementById("gameContainer").style.display = "block";
    }
}

function playGame() {
    const playerChoice = document.querySelector('input[name="playerChoice"]:checked');
    if (!playerChoice) {
        alert("Please select an option.");
        return;
    }

    const choices = ["paper", "scissors", "rock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerSelection").textContent = `You selected: ${playerChoice.value}`;
    document.getElementById("computerChoice").textContent = `Computer selected: ${computerChoice}`;

    const result = compare(playerChoice.value, computerChoice);
    document.getElementById("result").textContent = `Result: ${result}`;

    updateHistory(result, choices);
}

function compare(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Win";
    } else {
        return "Lose";
    }
}

function updateHistory(result, choices) {
    let totalPlays = parseInt(document.getElementById("history").textContent.match(/\d+/)[0]) + 1;
    let choiceCounts = { paper: 0, scissors: 0, rock: 0 };

    choices.forEach((choice) => {
        choiceCounts[choice] = parseInt(document.getElementById("history").textContent.match(new RegExp(`${choice}: (\\d+)`))[1]);
    });

    document.getElementById("history").textContent = `History: You have played total: ${totalPlays} time(s)!
        Paper: ${choiceCounts.paper} time(s) & Scissors: ${choiceCounts.scissors} time(s) & Rock: ${choiceCounts.rock} time(s).`;
}
