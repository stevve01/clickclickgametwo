let score = 0;
let upgradeCost = 50;
let autoClickerCost = 100;
let upgradeMultiplier = 1;

// Handle clicks on the main button
document.getElementById('clickButton').addEventListener('click', function() {
    score += upgradeMultiplier;
    document.getElementById('score').innerText = score;

    // Play click sound
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0; // Reset sound to start
    clickSound.play();

    // Check for milestones
    if (score % 100 === 0) {
        alert(`Congratulations! You've reached ${score} points!`);
    }
});

// Handle opening and closing the upgrade modal
const modal = document.getElementById('upgradeModal');
const upgradesButton = document.getElementById('upgradesButton');
const closeButton = document.getElementsByClassName('close')[0];

// Open the modal
upgradesButton.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if clicked outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Upgrade Button
document.getElementById('upgradeButton').addEventListener('click', function() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        upgradeMultiplier += 1; // Increase score per click
        document.getElementById('score').innerText = score;
        upgradeCost *= 1.5; // Increase cost for next upgrade
        this.innerText = `Buy Upgrade (Cost: ${Math.round(upgradeCost)})`; // Update button text
    } else {
        alert("Not enough points for upgrade!");
    }
});

// Reset Button
document.getElementById('resetButton').addEventListener('click', function() {
    score = 0;
    upgradeMultiplier = 1;
    document.getElementById('score').innerText = score;
    document.getElementById('upgradeButton').innerText = `Buy Upgrade (Cost: 50)`;
});

// Auto Clicker
document.getElementById('autoClickerButton').addEventListener('click', function() {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        document.getElementById('score').innerText = score;

        // Start auto-clicking
        setInterval(() => {
            score += upgradeMultiplier; // Increment score automatically
            document.getElementById('score').innerText = score;
        }, 1000); // Auto-click every second

        this.disabled = true; // Disable auto-clicker button
        this.innerText = "Auto Clicker Activated!";
    } else {
        alert("Not enough points for Auto Clicker!");
    }
});
