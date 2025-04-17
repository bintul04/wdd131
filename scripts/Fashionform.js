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

const products = [
    { id: "d-101", name: "Hoodies and Shorts", category: "Athleisures", averagerating: 4.8 },
    { id: "t-202", name: "Coats and Parkas", category: "outerwears", averagerating: 4.5 },
    { id: "a-303", name: "Tees and Shirts", category: "casual wears", averagerating: 4.7 },
    { id: "s-404", name: "Elegants and Classic Dresses", category: "formal wears", averagerating: 4.6 },
    { id: "b-505", name: "Your Go TO Winter Outfits", category: "Winter Wears", averagerating: 4.9 }
];
window.onload = () => {
    const productSelect = document.getElementById("productSelect");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
};

if (window.location.pathname.includes("Formreview.html")) {
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
