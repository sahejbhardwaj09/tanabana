// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// FADE-IN SCROLL ANIMATION
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

faders.forEach(item => observer.observe(item));

// YEAR FOOTER AUTO UPDATE
document.getElementById("year").textContent = new Date().getFullYear();
