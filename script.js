// Quick View Popup
const quickView = document.getElementById("quickView");
const closeBtn = document.querySelector(".close");

document.getElementById("productImage").addEventListener("click", () => {
    quickView.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    quickView.style.display = "none";
});

// Add to Cart Functionality
let cart = 0;
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        alert(`Item added to cart! Total items: ${cart}`);
    });
});
