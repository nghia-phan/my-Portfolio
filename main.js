document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in effect on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("opacity-0", "transition-opacity", "duration-1000");
        observer.observe(section);
    });

    // Navbar background change on scroll
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-blue-500", "shadow-lg");
        } else {
            navbar.classList.remove("bg-blue-500", "shadow-lg");
        }
    });

    // Button hover effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.classList.add("scale-105", "transition-transform", "duration-300");
        });
        button.addEventListener("mouseout", function () {
            this.classList.remove("scale-105");
        });
    });
});
