// Product Class
class Product {
    constructor(name, productId, price, stock = 0) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
            console.log(`${quantity} units added to ${this.name}. New stock: ${this.stock}`);
        } else {
            console.log("Invalid quantity to add.");
        }
    }

    sell(quantity) {
        if (quantity > 0 && quantity <= this.stock) {
            this.stock -= quantity;
            console.log(`${quantity} units sold from ${this.name}. Remaining stock: ${this.stock}`);
        } else {
            console.log("Not enough stock available or invalid quantity.");
        }
    }
}

// Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`${product.name} added to inventory.`);
    }

    sellProduct(productId, quantity) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            product.sell(quantity);
        } else {
            console.log("Product not found in inventory.");
        }
    }

    checkStock(productId) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            console.log(`Stock for ${product.name}: ${product.stock}`);
        } else {
            console.log("Product not found in inventory.");
        }
    }
}

// Testing the Inventory Management System
const inventory = new Inventory();
const product1 = new Product("Laptop", 101, 50000, 10);
const product2 = new Product("Phone", 102, 20000, 5);

inventory.addProduct(product1);
inventory.addProduct(product2);

product1.addStock(5);
inventory.sellProduct(101, 3);
inventory.checkStock(101);
inventory.sellProduct(102, 2);
inventory.checkStock(102);