// Floating hearts and flowers

const decorations = ["❤️", "💕", "💗", "🌸", "🌷", "✨"];

function createDecoration() {
    const element = document.createElement("div");

    element.classList.add("floating");

    element.textContent =
        decorations[Math.floor(Math.random() * decorations.length)];

    element.style.left = Math.random() * 100 + "vw";
    element.style.fontSize = Math.random() * 20 + 15 + "px";
    element.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(element);

    setTimeout(() => element.remove(), 10000);
}

setInterval(createDecoration, 400);

// Envelope functionality

const surpriseBtn = document.getElementById("surpriseBtn");
const envelopeArea = document.getElementById("envelopeArea");
const envelope = document.getElementById("envelope");
const continueBtn = document.getElementById("continueBtn");

if (surpriseBtn && envelopeArea) {
    surpriseBtn.addEventListener("click", () => {
        envelopeArea.style.display = "block";

        envelopeArea.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}

if (envelope && continueBtn) {

    envelope.addEventListener("click", () => {

        const isOpen = envelope.classList.toggle("open");

        if (isOpen) {
            continueBtn.style.display = "block";
        } else {
            continueBtn.style.display = "none";
        }

    });
}

// Navigate to memories page

if (continueBtn) {
    continueBtn.addEventListener("click", () => {
        window.location.href = "memories.html";
    });
}
const music = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", function () {
    music.play();
});
