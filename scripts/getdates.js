document.addEventListener('DOMContentLoaded', () => {
    // Get the current year and display it in the footer
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.querySelector('#current-year');
    copyrightYearElement.textContent = currentYear;  // Display the current year dynamically

    // Get the last modified date and display it in the footer
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedString = `Last Modified: ${lastModifiedDate.toLocaleString()}`;
    lastModifiedElement.textContent = lastModifiedString;  // Display last modified date dynamically

    // Toggle visibility of the "Web Dev Resources" section
    const resources = document.querySelector('.resources');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Resources';
    toggleButton.addEventListener('click', () => {
        // Toggle the display of the resources section
        if (resources.style.display === 'none') {
            resources.style.display = 'block';
        } else {
            resources.style.display = 'none';
        }
    });
    // Add the toggle button above the resources section
    document.body.insertBefore(toggleButton, resources);
});
