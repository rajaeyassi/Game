// Initialize PlayFab SDK with  Title ID
PlayFab.settings.titleId = "33451"; 

// Callback function for login
var LoginCallback = function(result, error) {
    if (result !== null) {
        document.getElementById("resultOutput").innerHTML = "Congratulations, you made your first successful API call!";
        // Example usage: Call getPlayerData function with the player's PlayFab ID after successful login
        getPlayerData(result.data.PlayFabId);
    } else if (error !== null) {
        document.getElementById("resultOutput").innerHTML = "Something went wrong with your login.\n" +
            "Here's some debug information:\n" + PlayFab.GenerateErrorReport(error);
    }
}

// Function to perform login with custom ID
function DoExampleLoginWithCustomID() {
    var loginRequest = {
        CustomId: document.getElementById("customId").value,
        CreateAccount: true
    };

    // Call LoginWithCustomID function with the login request and callback function
    PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
}

// Function to get player data
function getPlayerData(playFabId) {
    var request = {
        PlayFabId: playFabId
    };

    // Call GetUserData function with the player's PlayFab ID and a callback function
    PlayFabClientSDK.GetUserData(request, function(result, error) {
        if (result !== null) {
            console.log("Player data retrieved successfully:", result.data);
            // Process player data here (inventory, progress, statistics, etc.)
        } else if (error !== null) {
            console.error("Error retrieving player data:", error);
        }
    });
}
