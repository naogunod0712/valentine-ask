// Get the choice from the URL
const params = new URLSearchParams(window.location.search);
const choice = params.get("choice");

// Display the choice on the page
document.getElementById("choiceText").textContent = choice;

// Sparkle Effect (same as main page)
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
