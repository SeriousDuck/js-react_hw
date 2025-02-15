// Ask category
let category;
while (true) {
    category = prompt("Enter the category (vegetables or fruits):").trim().toLowerCase();
    if (category === "vegetables" || category === "fruits") {
        break;
    }
    alert("Invalid input. Please enter 'vegetables' or 'fruits'.");
}

// Identify products for category
let validProducts = category === "vegetables" ? ["cabbage", "avocado", "tomato"] : ["grapes", "raspberry", "coconut"];

let product;
while (true) {
    product = prompt(`Enter a product (${validProducts.join(", ")}):`).trim().toLowerCase();
    if (validProducts.includes(product)) {
        break;
    }
    alert(`Invalid input. Please enter one of the following: ${validProducts.join(", ")}.`);
}

// Ask about quantity
let quantity;
while (true) {
    quantity = parseInt(prompt("Enter the quantity (must be greater than 1):"), 10);
    if (!isNaN(quantity) && quantity > 1) {
        break;
    }
    alert("Invalid input. Please enter a number greater than 1.");
}

// Ask for the season and calculate multiplier
let season;
while (true) {
    season = prompt("Enter the season (winter or summer):").trim().toLowerCase();
    if (season === "winter" || season === "summer") {
        break;
    }
    alert("Invalid input. Please enter 'winter' or 'summer'.");
}

// Define prices for product selected by the user
let productPrice;
if (category === "vegetables") {
    if (product === "cabbage") {
        productPrice = 7;
    } else if (product === "avocado") {
        productPrice = 5;
    } else if (product === "tomato") {
        productPrice = 2;
    }
} else if (category === "fruits") {
    if (product === "grapes") {
        productPrice = 8;
    } else if (product === "raspberry") {
        productPrice = 5;
    } else if (product === "coconut") {
        productPrice = 7;
    }
}

// Calculate final price
let finalPrice;
if (season === "winter") {
    finalPrice = productPrice * quantity * 2;  // Winter multiplier (x2)
} else {
    finalPrice = productPrice * quantity * 0.8;  // Summer multiplier (x0.8)
}

const purchaseDetails = document.getElementById('purchase-details');
        purchaseDetails.innerHTML = `
            <div class="purchase-details">
                <div>
                    <h3>Product: ${product}</h3>
                    <p>Category: ${category}</p>
                    <p>Quantity: ${quantity}</p>
                    <p>Season: ${season}</p>
                    <p>Final Price: $${finalPrice}</p>
                </div>
            </div>
        `;