// Apni real images lagao aur sath me cute captions likho
const images = [
    { src: "./Images/s3.png", caption: "........ 📸" },
    { src: "./Images/s1.png", caption: "....... 🌧️❤️" },
    { src: "./Images/s2.png", caption: "...... ✨" },
    { src: "./Images/sorry.jpg", caption: "gusaa mat krna baby ✨" },
    { src: "./Images/s4.png", caption: "....... ♾️" },
    { src: "./Images/s5.png", caption: "......❤️" },
    { src: "./Images/s6.png", caption: "...... ✨" },
    { src: "./Images/s7.png", caption: "......" },
    { src: "./Images/s8.png", caption: "...... ✨" },
    { src: "./Images/s9.png", caption: "......" },
    { src: "./Images/s10.png", caption: "...... ✨" },
    { src: "./Images/s11.png", caption: "......" },
    { src: "./Images/kiki.jpeg", caption: "......" },
      { src: "./Images/a1.png", caption: "......" },
      { src: "./Images/a2.png", caption: "......" },
      { src: "./Images/a3.png", caption: "......" },
      { src: "./Images/a4.png", caption: "......" },
      { src: "./Images/a5.png", caption: "......" },
      { src: "./Images/a6.png", caption: "......" },
      { src: "./Images/a7.png", caption: "......" },
      { src: "./Images/a8.png", caption: "......" },
      { src: "./Images/a9.png", caption: "......" },
      { src: "./Images/b1.png", caption: "......" },
      { src: "./Images/b2.png", caption: "......" },
      { src: "./Images/b3.png", caption: "......" },
      { src: "./Images/b4.png", caption: "......" },
      { src: "./Images/b5.png", caption: "......" },
      { src: "./Images/b6.png", caption: "......" },
      { src: "./Images/b7.png", caption: "......" },
      { src: "./Images/b8.png", caption: "......" },
      { src: "./Images/b9.png", caption: "......" },
      { src: "./Images/c1.png", caption: "......" },
      { src: "./Images/c2.png", caption: "......" },
      { src: "./Images/c3.png", caption: "......" },
      { src: "./Images/c4.png", caption: "......" },
      { src: "./Images/c5.png", caption: "......" },
      { src: "./Images/c6.png", caption: "......" },
      { src: "./Images/c7.png", caption: "......" },
      { src: "./Images/c8.png", caption: "......" },
      { src: "./Images/c9.png", caption: "......" },
      { src: "./Images/d1.png", caption: "......" },
      { src: "./Images/d2.png", caption: "......" },
      { src: "./Images/d3.png", caption: "......" },
      { src: "./Images/d4.png", caption: "......" }
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const counter = document.getElementById("counter");
const bgMusic = document.getElementById("bg-music");

let currentIndex = 0;

// Render Gallery with Captions
function renderGallery() {
    gallery.innerHTML = "";
    images.forEach((image, index) => {
        gallery.innerHTML += `
            <div class="card" data-index="${index}">
                <img src="${image.src}" alt="Memory ${index + 1}" loading="lazy">
                <div class="card-caption">${image.caption}</div>
            </div>
        `;
    });
}
renderGallery();

function showImage() {
    lightbox.classList.add("active");
    document.body.classList.add("no-scroll");
    lightboxImg.src = images[currentIndex].src;
    lightboxCaption.textContent = images[currentIndex].caption;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

// Gallery Click Support for Cards
gallery.addEventListener("click", (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    currentIndex = Number(card.dataset.index);
    showImage();
});

// Navigation Functions
function closeViewer() { lightbox.classList.remove("active"); document.body.classList.remove("no-scroll"); }
function nextImage() { currentIndex = (currentIndex + 1) % images.length; showImage(); }
function prevImage() { currentIndex = (currentIndex - 1 + images.length) % images.length; showImage(); }

closeBtn.addEventListener("click", closeViewer);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeViewer(); });

// Welcome & Password Verification
const welcome = document.getElementById("welcome");
const openGallery = document.getElementById("openGallery");
const password = document.getElementById("password");
const error = document.getElementById("error");

const SECRET_PASSWORD = "kiki";

openGallery.addEventListener("click", () => {
    if (password.value.trim().toLowerCase() === SECRET_PASSWORD) {
        welcome.classList.add("hide");
        // Password sahi hote hi gaana shuru ho jayega!
        bgMusic.play().catch(err => console.log("Audio autoplay blocked, click anywhere to play."));
    } else {
        error.style.display = "block";
        password.style.borderColor = "#ff1744";
        password.value = "";
    }
});

password.addEventListener("keypress", (e) => { if (e.key === "Enter") openGallery.click(); });

// Live Relationship Timer (Apni anniversary date yahan set karo)
const anniversaryDate = new Date("2024-05-13T00:00:00"); // YYYY-MM-DD format

function updateTimer() {
    const now = new Date();
    const diff = now - anniversaryDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("together-timer").innerHTML = 
        `${days} Days, ${hours}h : ${minutes}m : ${seconds}s`;
}
setInterval(updateTimer, 1000);

// Floating Hearts Engine
const hearts = document.getElementById("hearts");
function createHeart() {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";
    hearts.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 9000);
}
setInterval(createHeart, 600);








// ============================
// Virtual Love Letter Logic
// ============================
const envelopeWrapper = document.getElementById("envelope-wrapper");
const openLetterBtn = document.getElementById("open-letter-btn");

openLetterBtn.addEventListener("click", () => {
    envelopeWrapper.classList.toggle("letter-open");
    if (envelopeWrapper.classList.contains("letter-open")) {
        openLetterBtn.textContent = "Close My Letter 🔒";
    } else {
        openLetterBtn.textContent = "Open My Letter 💌";
    }
});

// ==========================================
// 1. LOVE METER QUIZ LOGIC
// ==========================================
const quizData = [
    {
        question: "Hum pehli baar kaha mile the? 🤔",
        options: ["AV", "KV", "aap ki coaching ke pass", "Kahi Aur ✨"],
        correct: 2 // Apne hisab se index change kar lena (0, 1, 2, ya 3)
    },
    {
        question: "Mera favourite stall food?  🍳",
        options: ["Maggi", "PaniPuri", "Nothing", "chhole Kulache"],
        correct: 3
    },
    {
        question: "Our Dream trip? ❤️",
        options: ["J&K", "East State", "Kerala", "ham dono sath me kahi bhi"],
        correct: 3
    }
];

let currentQuizIndex = 0;

function loadQuiz() {
    const quizBox = document.getElementById("quiz-box");
    const quizSurprise = document.getElementById("quiz-surprise");
    
    if (currentQuizIndex < quizData.length) {
        document.getElementById("question-number").textContent = `Question ${currentQuizIndex + 1} of ${quizData.length}`;
        document.getElementById("quiz-question").textContent = quizData[currentQuizIndex].question;
        
        const optionsContainer = document.getElementById("quiz-options");
        optionsContainer.innerHTML = "";
        
        quizData[currentQuizIndex].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "quiz-opt-btn";
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(index, button));
            optionsContainer.appendChild(button);
        });
    } else {
        // Quiz Khatam, Surprise active!
        quizBox.style.display = "none";
        quizSurprise.classList.remove("hide-surprise");
        quizSurprise.classList.add("show-surprise");
    }
}

function checkAnswer(selectedIndex, clickedButton) {
    const correctIndex = quizData[currentQuizIndex].correct;
    const allButtons = document.querySelectorAll(".quiz-opt-btn");
    
    // Disable all options during checking animation
    allButtons.forEach(btn => btn.style.pointerEvents = "none");

    if (selectedIndex === correctIndex) {
        clickedButton.style.background = "#2ecc71"; // Green for right
        clickedButton.style.color = "white";
        setTimeout(() => {
            currentQuizIndex++;
            loadQuiz();
        }, 1000);
    } else {
        clickedButton.style.background = "#e74c3c"; // Red for wrong
        clickedButton.style.color = "white";
        clickedButton.classList.add("shake-animation");
        
        // Reset state after a second so she can try again
        setTimeout(() => {
            clickedButton.style.background = "";
            clickedButton.style.color = "";
            clickedButton.classList.remove("shake-animation");
            allButtons.forEach(btn => btn.style.pointerEvents = "auto");
        }, 1000);
    }
}

// Automatically start the quiz logic
loadQuiz();


// ==========================================
// 2. VIRTUAL TREATS LOGIC
// ==========================================
const treatOverlay = document.getElementById("treat-overlay");
const treatContent = document.getElementById("treat-content");

function sendVirtualTreat(type) {
    treatOverlay.classList.add("show-treat");
    document.body.classList.add("no-scroll");
    
    if(type === 'hug') {
        treatContent.innerHTML = `
            <div style="font-size: 65px; animation: heartbeat 1s infinite alternate;">🫂🧸</div>
            <h2 style="color: #ff4d6d; margin: 15px 0;">Sending you 1000% tightest hug right now!</h2>
            <p style="color: #555; line-height: 1.6; font-size: 15px;">Consider this a real, warm hug from me. Close your eyes for 3 seconds and feel it. I am always right here with you! ❤️</p>
        `;
    } else if(type === 'kiss') {
        treatContent.innerHTML = `
            <div style="font-size: 65px; animation: heartbeat 1s infinite alternate;">💋✨</div>
            <h2 style="color: #c9184a; margin: 15px 0;">Muahhh! 😘</h2>
            <p style="color: #555; line-height: 1.6; font-size: 15px;">A sweet little virtual kiss planted straight on your forehead to remind you that you are my favorite person ever! 💖</p>
        `;
    }
}

function closeTreat() {
    treatOverlay.classList.remove("show-treat");
    document.body.classList.remove("no-scroll");
}

treatOverlay.addEventListener("click", (e) => {
    if (e.target === treatOverlay) closeTreat();
});




// ==========================================
// 1. CUSTOM TOAST NOTIFICATION SYSTEM
// ==========================================
function showCustomToast(message, type = "success") {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast-message ${type}`;
    toast.innerHTML = `✨ ${message}`;
    
    toastContainer.appendChild(toast);
    
    // 4 seconds baad slide out ho kar delete ho jayega
    setTimeout(() => {
        toast.style.animation = "slideOutLeft 0.4s ease forwards";
        setTimeout(() => toast.remove(), 400);
    }, 500);
}

// Intercept original password verification to throw custom toasts
const originalButton = document.getElementById("openGallery");
if(originalButton) {
    originalButton.addEventListener("click", () => {
        const passInput = document.getElementById("password");
        if (passInput && passInput.value.trim().toLowerCase() === "kiki") {
            setTimeout(() => {
                showCustomToast("Monika logged in just now! 🥰");
                showCustomToast("Romantic background tracks loaded 🎵", "info");
                // Web Audio API Visualizer initialize function call
                initVisualizer();
            }, 800);
        }
    });
}


// ==========================================
// 2. DYNAMIC REAL AUDIO VISUALIZER (WAVEFORM)
// ==========================================
let visualizerInitialized = false;

function initVisualizer() {
    if (visualizerInitialized) return;
    visualizerInitialized = true;

    const audio = document.getElementById("bg-music");
    const canvasV = document.getElementById("visualizer-canvas");
    if (!audio || !canvasV) return;

    const ctxV = canvasV.getContext("2d");
    
    // Setup Web Audio API Context
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const srcNode = audioCtx.createMediaElementSource(audio);
    const analyzer = audioCtx.createAnalyser();

    srcNode.connect(analyzer);
    analyzer.connect(audioCtx.destination);

    analyzer.fftSize = 64; // Small size for neat aesthetic bars
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function resizeCanvas() {
        canvasV.width = window.innerWidth;
        canvasV.height = 60; // Bottom bar height
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function drawVisualizer() {
        requestAnimationFrame(drawVisualizer);
        analyzer.getByteFrequencyData(dataArray);

        ctxV.clearRect(0, 0, canvasV.width, canvasV.height);

        const barWidth = (canvasV.width / bufferLength) * 1.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] * 0.22; // Scale factor for bounce

            // Pink gradient wave effect
            ctxV.fillStyle = `rgba(255, 77, 109, ${0.3 + (barHeight/60)})`;
            
            // Draw smooth rounded bars at the screen bottom
            ctxV.fillRect(x, canvasV.height - barHeight, barWidth - 4, barHeight);
            x += barWidth;
        }
    }
    drawVisualizer();
}


// ==========================================
// 3. INTERACTIVE CANVAS SCRATCH CARD LOGIC
// ==========================================
const scratchCanvas = document.getElementById("scratch-canvas");
if (scratchCanvas) {
    const ctxS = scratchCanvas.getContext("2d");
    let isDrawing = false;

    // Outer Silver Glitter Layer
    ctxS.fillStyle = "#cfd8dc";
    ctxS.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
    
    // Text Guide overlay on grey block
    ctxS.font = "15px Poppins, sans-serif";
    ctxS.fillStyle = "#546e7a";
    ctxS.textAlign = "center";
    ctxS.fillText("Scratch me with love... 💖", scratchCanvas.width / 2, scratchCanvas.height / 2 + 5);

    function scratch(e) {
        if (!isDrawing) return;
        
        const rect = scratchCanvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        
        // Remove silver layer dynamically on swipe
        ctxS.globalCompositeOperation = "destination-out";
        ctxS.beginPath();
        ctxS.arc(x, y, 18, 0, Math.PI * 2);
        ctxS.fill();
    }

    // Mouse Controls
    scratchCanvas.addEventListener("mousedown", () => isDrawing = true);
    scratchCanvas.addEventListener("mouseup", () => isDrawing = false);
    scratchCanvas.addEventListener("mousemove", scratch);

    // Mobile Responsive Touch Controls
    scratchCanvas.addEventListener("touchstart", (e) => { isDrawing = true; scratch(e); });
    scratchCanvas.addEventListener("touchend", () => isDrawing = false);
    scratchCanvas.addEventListener("touchmove", (e) => { e.preventDefault(); scratch(e); });
}



// ==========================================
// 1. VIRTUAL LOVE NOTE JAR LOGIC
// ==========================================
const loveNotes = [
    "You are my favorite notification in the entire day! 📱❤️",
    "I love you more than words can describe. Infinitely! ♾️",
    "Your smile is my absolute favorite sight in the whole world. 😊",
    "Thank you for being my constant supporter and my Love. 🥺🌸",
    "No matter how hard the day is, thinking of you makes everything better. ✨",
    "You make my heart skip a beat every single time you text me. 💓",
    "Sending you a million virtual kisses right now! Muahhh! 😘"
];

const loveJar = document.getElementById("love-jar");
const jarMessageBox = document.getElementById("jar-message-box");

if (loveJar) {
    loveJar.addEventListener("click", () => {
        loveJar.classList.add("shake-jar");
        setTimeout(() => loveJar.classList.remove("shake-jar"), 500);

        const randomIndex = Math.floor(Math.random() * loveNotes.length);
        jarMessageBox.style.opacity = 0;
        
        setTimeout(() => {
            jarMessageBox.textContent = loveNotes[randomIndex];
            jarMessageBox.style.opacity = 1;
            if (typeof showCustomToast === "function") {
                showCustomToast("New love note drawn! 💌", "info");
            }
        }, 250);
        
        triggerLoveConfetti(8);
    });
}


// ==========================================
// 2. CELEBRATION LOVE CONFETTI BURST LOGIC
// ==========================================
function triggerLoveConfetti(amount = 35) {
    const emojis = ["❤️", "💖", "✨", "🌸", "💕"];
    
    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("span");
        confetti.className = "love-confetti";
        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Automatically bind confetti to login button click sequence
const originalLoginBtn = document.getElementById("openGallery");
if (originalLoginBtn) {
    originalLoginBtn.addEventListener("click", () => {
        const passVal = document.getElementById("password");
        if (passVal && passVal.value.trim().toLowerCase() === "kiki") {
            setTimeout(() => triggerLoveConfetti(45), 600);
        }
    });
}

// Link confetti to quiz completion surprise (Updating the older quiz flow)
const originalCheckAnswer = window.checkAnswer;
window.checkAnswer = function(selectedIndex, clickedButton) {
    const correctIndex = quizData[currentQuizIndex].correct;
    if (selectedIndex === correctIndex && currentQuizIndex === quizData.length - 1) {
        // Last question correctly answered
        setTimeout(() => triggerLoveConfetti(50), 1000);
    }
    // Call the rest of execution naturally
    if(typeof originalCheckAnswer === "function") {
        originalCheckAnswer(selectedIndex, clickedButton);
    }
};


// ==========================================
// 3. DYNAMIC BACKGROUND FLOATING STARS (PARALLAX)
// ==========================================
const starCanvas = document.getElementById("scratch-canvas"); // Safe check
const starfieldCanvas = document.getElementById("starfield-canvas");

if (starfieldCanvas) {
    const ctxS = starfieldCanvas.getContext("2d");
    let starsArray = [];
    const maxStars = 80;

    function resizeStarfield() {
        starfieldCanvas.width = window.innerWidth;
        starfieldCanvas.height = window.innerHeight;
    }
    resizeStarfield();
    window.addEventListener("resize", resizeStarfield);

    // Star Object Generator
    class Star {
        constructor() {
            this.x = Math.random() * starfieldCanvas.width;
            this.y = Math.random() * starfieldCanvas.height;
            this.size = Math.random() * 2;
            this.twinkleSpeed = Math.random() * 0.02 + 0.005;
            this.alpha = Math.random();
            this.velocity = Math.random() * 0.2 + 0.05; // Gentle float
        }
        draw() {
            ctxS.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctxS.beginPath();
            ctxS.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctxS.fill();
        }
        update() {
            // Twinkle Logic
            this.alpha += this.twinkleSpeed;
            if (this.alpha > 1 || this.alpha < 0) {
                this.twinkleSpeed = -this.twinkleSpeed;
            }
            // Parallax float movement simulation on vertical scroll tracking
            this.y -= this.velocity;
            if (this.y < 0) {
                this.y = starfieldCanvas.height;
                this.x = Math.random() * starfieldCanvas.width;
            }
        }
    }

    function initStars() {
        starsArray = [];
        for (let i = 0; i < maxStars; i++) {
            starsArray.push(new Star());
        }
    }
    initStars();

    function animateStars() {
        requestAnimationFrame(animateStars);
        ctxS.clearRect(0, 0, starfieldCanvas.width, starfieldCanvas.height);
        
        // Stars background layer logic should render only during active dark mode theme
        if (document.body.classList.contains("dark-theme")) {
            starsArray.forEach(star => {
                star.update();
                star.draw();
            });
        }
    }
    animateStars();
}



// ==========================================
// 1. PRE-LOADER HIDE LOGIC
// ==========================================
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        // 1.5 seconds ka buffer diya hai taaki animation acche se dikhe
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }, 1400);
    }
});

// ==========================================
// 2. VIRTUAL HUG METER LOGIC (LOCALSTORAGE)
// ==========================================
const sendHugBtn = document.getElementById("send-hug-btn");
const hugCountDisplay = document.getElementById("hug-count");

// LocalStorage se purana count nikalna
let savedHugs = localStorage.getItem("monika-total-hugs") ? parseInt(localStorage.getItem("monika-total-hugs")) : 0;
if (hugCountDisplay) hugCountDisplay.textContent = savedHugs;

if (sendHugBtn) {
    sendHugBtn.addEventListener("click", () => {
        savedHugs++;
        localStorage.setItem("monika-total-hugs", savedHugs);
        hugCountDisplay.textContent = savedHugs;
        
        // Agar pehle se banaya hua floating hearts ya toast system active h to trigger hoga
        if (typeof createHeart === "function") {
            // Instant 5 floating hearts screen par udayega
            for(let i=0; i<5; i++) { setTimeout(createHeart, i * 150); }
        }
    });
}

// ==========================================
// 3. SECRET TERMINAL COMMAND (SECRET WORD: AARU)
// ==========================================
let inputSequence = "";
const secretWord = "aaru"; // Isko tum chaho toh change bhi kar sakte ho (humesha lowercase me rakhna)
const secretOverlay = document.getElementById("secret-overlay");
const closeLetterBtn = document.getElementById("close-letter-btn");

document.addEventListener("keydown", (e) => {
    // Sirf single alphabets character text track karenge
    if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        inputSequence += e.key.toLowerCase();
        
        // Sequence check buffer logic
        if (inputSequence.length > secretWord.length) {
            inputSequence = inputSequence.substring(inputSequence.length - secretWord.length);
        }
        
        // Checking match sequence
        if (inputSequence === secretWord) {
            if (secretOverlay) {
                secretOverlay.classList.add("active-letter");
                inputSequence = ""; // Clear sequence buffer after success
            }
        }
    }
});

if (closeLetterBtn && secretOverlay) {
    closeLetterBtn.addEventListener("click", () => {
        secretOverlay.classList.remove("active-letter");
    });
}