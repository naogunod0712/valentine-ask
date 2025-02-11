document.getElementById("yesBtn").addEventListener("click", function() {
    sendChoice("Yes");
});

document.getElementById("veryMuchYesBtn").addEventListener("click", function() {
    sendChoice("Very Much Yes");
});

function sendChoice(choice) {
    fetch("https://your-app-name.onrender.com/submit", {  // Replace with your actual Flask backend URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice: choice })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Log success message
        showThankYouMessage(choice); // Show confirmation on the page
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong! Try again.");
    });
}

function showThankYouMessage(choice) {
    document.body.innerHTML = `
        <div class="container">
            <h1 class="title">Thank You, My Love ❤️</h1>
            <p class="subtitle">You chose: <strong>${choice}</strong></p>
            <p class="subtitle">I can’t wait to spend Valentine's with you!</p>
        </div>
    `;
}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 300);
