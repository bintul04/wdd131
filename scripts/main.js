// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    updateYear();
    updateLastModified();
    renderProducts();
});

// Update copyright year
function updateYear() {
    const year = new Date().getFullYear();
    const yearEl = document.getElementById("copyright-year");
    if (yearEl) yearEl.textContent = year;
}

// Display last modified date
function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    const modifiedEl = document.getElementById("last-modified");
    if (modifiedEl) {
        modifiedEl.textContent = lastModified.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    }
}

// Product data
const products = [
    {
        id: 1,
        image: "images/arrival-1.jpg",
        title: "Hoodies and Shorts",
        price: "$70.99",
    },
    {
        id: 2,
        image: "images/arrival-2.jpg",
        title: "Coats and Parkas",
        price: "$69.99",
    },
    {
        id: 3,
        image: "images/arrival-3.jpg",
        title: "Tees and Shirts",
        price: "$45.00",
    },
    {
        id: 4,
        image: "images/favorite-1.jpg",
        title: "Trending on Instagram",
        price: "$47.00",
    },
    {
        id: 5,
        image: "images/header.jpg",
        title: "Elegants and Classic Dresses",
        price: "$55.00",
    },
    {
        id: 6,
        image: "images/header-bg.jpg",
        title: "Casual Outfits",
        price: "$65.00",
    },
    {
        id: 7,
        image: "images/sale.jpg",
        title: "Hottest Sport and Casual Outfits",
        price: "$95.00",
    },
    {
        id: 8,
        image: "images/favorite-3.jpg",
        title: "Casual Blue Color Elegant Suit Dresses",
        price: "$120.00",
    },
    {
        id: 9,
        image: "images/favorite-4.jpg",
        title: "Your Go TO Winter Outfits",
        price: "$80.29",
    },
];

// Cart state
let cartCount = 0;
let cartItems = [];

// Add product to cart
function addToCart(itemId) {
    const item = products.find((product) => product.id === itemId);
    if (item) {
        cartCount++;
        cartItems.push(item);
        updateCartCount();
        alert(`"${item.title}" has been added to your cart!`);
        console.log("🛒 Cart Items:", cartItems);
    } else {
        console.warn("⚠️ Item not found.");
    }
}

// Update cart count in UI
function updateCartCount() {
    const cartEl = document.querySelector(".cart p");
    if (cartEl) {
        cartEl.innerText = cartCount;
    }
}

// Render products into HTML
function renderProducts() {
    const root = document.getElementById("root");
    if (!root) return;

    root.innerHTML = products
        .map((item) => {
            return `
      <div class="box">
        <div class="img-box">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="left">
          <p>${item.title}</p>
          <h2>${item.price}</h2>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      </div>`;
        })
        .join("");
}
