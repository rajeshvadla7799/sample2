document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.getElementById("product-grid");

    for (let i = 1; i <= 50; i++) {
        let product = document.createElement("div");
        product.classList.add("product");

        product.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="Gadget ${i}">
            <h3>Gadget ${i}</h3>
            <p>$${(Math.random() * 100 + 50).toFixed(2)}</p>
            <button>Add to Cart</button>
        `;

        productGrid.appendChild(product);
    }
});
