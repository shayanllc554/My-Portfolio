// 1. Force browser to always restore scroll to top on refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

    // [UPDATED FOR SMOOTH SCROLL ON REFRESH]
    if (window.location.hash) {
        // Pehle thoda sa down scroll rakhein taake upar aate hue smooth transition dikhe
        window.scrollTo(0, window.scrollY);

        // Kuch milliseconds ke gap ke baad smoothly top par le jayein
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);

        // URL se hash (#projects) clean karein
        history.replaceState(null, null, window.location.pathname);
    }

    // 2. Navbar Scroll Effect (Adds shadow and background on scroll)
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    });

    // 3. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll(".nav-links a, nav h1");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");

            // Check if the link is an anchor link
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 4. Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".card-1, .project-card, .div-2, .div-3");

    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("element-show");
            }
        });
    };

    revealElements.forEach(el => el.classList.add("element-hidden"));
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // 5. [FIXED & ADDED INSIDE DOM] LinkedIn Button Click Handler
    // Note: Make sure your HTML button has class="linkedin-btn" or class="LinkedIn" (case-sensitive)
    const linkedinBtn =document.querySelector(".linkedln-btn");

    if (linkedinBtn) {
        linkedinBtn.addEventListener("click", () => {
            const linkedinUrl = "https://www.linkedin.com/in/shayan-ali-0b7592398/";
            window.open(linkedinUrl, "_blank");
        });
    }
});

// Ensure karte hain ki code tabhi chale jab browser sab read karle
window.onload = function() {
    console.log("Shayan's Script Loaded Successfully! 🔥");

    // ==========================================
    // 1. DYNAMIC NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.querySelector("nav");
    
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                navbar.classList.add("nav-scrolled");
            } else {
                navbar.classList.remove("nav-scrolled");
            }
        });
    }

    // ==========================================
    // 2. LIVE DYNAMIC GREETING BASED ON TIME
    // ==========================================
    const heroHeading = document.querySelector(".main-div h1");
    if (heroHeading) {
        const currentHour = new Date().getHours();
        let greeting = "";

        if (currentHour < 12) {
            greeting = "Good Morning! ☀️ I'm a ";
        } else if (currentHour < 18) {
            greeting = "Good Afternoon! 🌤️ I'm a ";
        } else {
            greeting = "Good Evening! 🌙 I'm a ";
        }

        const originalText = "Creative Ai and Web Developer";
        heroHeading.innerText = greeting + originalText;
    }

    // ==========================================
    // 3. INTERACTIVE BUTTON CLICKS
    // ==========================================
    // Resume Button Click
    const resumeBtn = document.querySelector(".main-div button:nth-of-type(1)");
    if (resumeBtn) {
        resumeBtn.style.cursor = "pointer"; // Ensuring hover cursor
        resumeBtn.addEventListener("click", () => {
            alert("Opening Shayan Ali's Resume... 📄");
        });
    }

    // LinkedIn Button Click
    const linkedinBtn = document.querySelector(".linkedln-btn");
    if (linkedinBtn) {
        linkedinBtn.addEventListener("click", () => {
            // LinkedIn par redirect karne ke liye (Aap apni profile ka link yahan daal sakte hain)
            window.open("https://www.linkedin.com/in/shayan-ali-0b7592398/", "_blank");
        });
    }
};