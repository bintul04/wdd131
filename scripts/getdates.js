document.addEventListener('DOMContentLoaded', () => {
    // Display the current year dynamically
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Display the last modified date dynamically
    document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;
});
