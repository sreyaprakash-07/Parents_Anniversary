
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


// Elements

const surpriseBtn = document.getElementById("surpriseBtn");
const envelopeArea = document.getElementById("envelopeArea");
const envelope = document.getElementById("envelope");
const continueBtn = document.getElementById("continueBtn");
const music = document.getElementById("bgMusic");
const resumeMusicBtn = document.getElementById("resumeMusicBtn");


// Music functionality

function playMusic() {
    if (music) {
        music.play().then(() => {
            sessionStorage.setItem("musicPlaying", "true");

            if (resumeMusicBtn) {
                resumeMusicBtn.hidden = true;
            }
        }).catch(() => {
            if (resumeMusicBtn) {
                resumeMusicBtn.hidden = false;
            }
        });
    }
}


// Start music on home page

if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {

        if (envelopeArea) {
            envelopeArea.style.display = "block";

            envelopeArea.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        playMusic();
    });
}


// Resume music on memories page

if (music && sessionStorage.getItem("musicPlaying") === "true") {
    playMusic();
}

if (resumeMusicBtn) {
    resumeMusicBtn.addEventListener("click", playMusic);
}


// Envelope functionality

if (envelope && continueBtn) {
    envelope.addEventListener("click", () => {

        const isOpen = envelope.classList.toggle("open");

        continueBtn.style.display = isOpen ? "block" : "none";
    });
}


// Navigate to memories page

if (continueBtn) {
    continueBtn.addEventListener("click", () => {
        sessionStorage.setItem("musicPlaying", "true");
        window.location.href = "memories.html";
    });
}
