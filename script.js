function startFireworks() {
    const fireworksContainer = document.createElement("div");
    fireworksContainer.classList.add("fireworks-container");
    document.body.appendChild(fireworksContainer);
    
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        fireworksContainer.appendChild(firework);
    }
    
    setTimeout(() => {
        fireworksContainer.remove();
    }, 5000);
}

function noClicked() {
    document.getElementById("animation").classList.remove("hidden");
}

function yesClicked() {
    startFireworks();
}
