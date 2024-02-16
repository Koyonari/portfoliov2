const navbar = document.querySelector('.wrapper');
const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Get current scroll position

    // Calculate opacity based on scroll position
    const opacity = Math.max(0, 1 - scrollY / 100); // Adjust 200 for desired fade distance

    navbar.style.opacity = opacity;
    parallax.style.opacity = opacity;
});

//Responsive Navbar to Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Close navbar when clicked on nav-link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));