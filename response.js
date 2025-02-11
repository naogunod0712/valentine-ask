// Get the choice from the URL
const params = new URLSearchParams(window.location.search);
const choice = params.get("choice");

// Display the choice on the page
document.getElementById("choiceText").textContent = choice;