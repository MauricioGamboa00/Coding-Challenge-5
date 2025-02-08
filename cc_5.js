// Task 1 Object Properties

let customer =  {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}; // Declaring an object with multiple properties

console.log(`Name: ${customer.name}`); // Logging customer name into console
console.log(`Age: ${customer.age}`); // Logging customer age into console
console.log(`Email: ${customer.email}`); // Logging customer email into console

// Task 2 Object Methods

let order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",

    displayOrder: function() {
        console.log(`Order ID: ${this.orderID}, Amount: $${this.totalAmount}, Status: ${this.status}`);
    }

}; // Logging of order details in console

order.displayOrder();

// Task 3 Array Manipulation (push, pop, shift, unshift)

let cartItems = ["Phone", "Backpack", "Charger"]; // Created an array of three items

cartItems.push("Laptop"); // added a new product to the array
cartItems.pop(); // removed the last product of the array
cartItems.unshift("Tablet"); // added a product at the start of the array
cartItems.shift(); // removed the first product of the array

console.log("Updated Cart Items:", cartItems); // logging updated list of cart items to console

// Task 4 Map Method

let prices = [100, 200, 300]; // created an array of prices

let discountedPrices = prices.map(price => price * .9); // Applying 10% discount to prices array

console.log("Discounted Prices:", discountedPrices); // logging discounted prices to console
