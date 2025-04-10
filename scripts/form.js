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
// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Function to populate select options
window.onload = () => {
    const productSelect = document.getElementById("productSelect");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; 
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
};

// Function to increment review counter only after submission
if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem('reviewCount');
    const reviewSubmitted = localStorage.getItem('reviewSubmitted');

    if (reviewSubmitted === null) {
        if (reviewCount === null) {
            reviewCount = 0;
        }

        // Increment the review counter
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);

        // Mark that the review has been submitted
        localStorage.setItem('reviewSubmitted', true);
    }

    // Display review count
    document.getElementById('reviewCounter').textContent = `Reviews Completed: ${reviewCount}`;
}
