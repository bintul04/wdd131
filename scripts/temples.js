// Dynamic Footer Updates
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById("copyright-year").textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
});

// Hamburger Menu Toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});
