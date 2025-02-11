document.getElementById("yesBtn").addEventListener("click", function() {
    redirectToResponse("Yes");
});

document.getElementById("veryMuchYesBtn").addEventListener("click", function() {
    redirectToResponse("Very Much Yes");
});

function redirectToResponse(choice) {
    // Redirect to the response page with the selected choice
    window.location.href = `response.html?choice=${encodeURIComponent(choice)}`;
}

// Sparkle Effect
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
