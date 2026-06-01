// 1. Force browser to always restore scroll to top on refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Wait for the DOM to fully load (Sari cheezein isi ek event ke andar handle hongi)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Shayan's Script Loaded Successfully! 🔥");

    // [SMOOTH SCROLL ON REFRESH]
    if (window.location.hash) {
        window.scrollTo(0, window.scrollY);
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);
        history.replaceState(null, null, window.location.pathname);
    }

    // 2. Navbar Scroll Effect (Adds shadow and background on scroll)
    const nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                nav.classList.add("nav-scrolled");
            } else {
                nav.classList.remove("nav-scrolled");
            }
        });
    }

    // 3. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll(".nav-links a, nav h1");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
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

    // 5. LIVE DYNAMIC GREETING BASED ON TIME
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

    // 6. INTERACTIVE BUTTON CLICKS (No Duplicate Variables)
    const resumeBtn = document.querySelector(".main-div button:nth-of-type(1)");
    if (resumeBtn) {
        resumeBtn.style.cursor = "pointer";
        resumeBtn.addEventListener("click", () => {
            alert("Opening Shayan Ali's Resume... 📄");
        });
    }

    // SINGLE LINKEDIN BUTTON HANDLER
    const linkedinBtn = document.querySelector(".linkedln-btn");
    if (linkedinBtn) {
        linkedinBtn.addEventListener("click", () => {
            window.open("https://www.linkedin.com/in/shayan-ali-0b7592398/", "_blank");
        });
    }
});