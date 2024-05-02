// Sample player data
const playerData = {
    playerName: "John Doe",
    playerRank: "Gold",
    playerScore: 1500,
};

const matchHistory = [
    { opponent: "Player1", result: "Win" },
    { opponent: "Player2", result: "Loss" },
    { opponent: "Player3", result: "Win" },
    // Add more match history entries as needed
];

// Function to display player profile
function displayPlayerProfile() {
    const playerProfile = document.getElementById("playerProfile");
    playerProfile.innerHTML = `
        <p><strong>Name:</strong> ${playerData.playerName}</p>
        <p><strong>Rank:</strong> ${playerData.playerRank}</p>
        <p><strong>Score:</strong> ${playerData.playerScore}</p>
    `;
}

// Function to display match history
function displayMatchHistory() {
    const matchHistoryElement = document.getElementById("matchHistory");
    matchHistoryElement.innerHTML = "<h3>Recent Matches</h3>";

    matchHistory.forEach((match) => {
        matchHistoryElement.innerHTML += `
            <p><strong>Opponent:</strong> ${match.opponent}</p>
            <p><strong>Result:</strong> ${match.result}</p>
            <hr>
        `;
    });
}

// Call functions to display data
displayPlayerProfile();
displayMatchHistory();
