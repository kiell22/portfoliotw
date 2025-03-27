document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    const navLinks = document.querySelectorAll("nav a"); // Link dalam navbar

    // Navbar Fixed saat di-scroll
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("navbar-fixed", window.pageYOffset > header.offsetTop);
        }, { passive: true });
    }

    // Hamburger Menu
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger-active");
            navMenu.classList.toggle("hidden");
        });
    }

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight, // Sesuaikan dengan tinggi navbar
                    behavior: "smooth"
                });
            }
            // Tutup menu di tampilan mobile
            if (navMenu.classList.contains("hidden") === false) {
                navMenu.classList.add("hidden");
                hamburger.classList.remove("hamburger-active");
            }
        });
    });
});
