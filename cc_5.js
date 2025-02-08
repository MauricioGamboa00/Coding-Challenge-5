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

// Task 5 Filter Method

let inventory = [5, 0, 12, 8, 0]; // created an array

let availableProducts = inventory.filter(quantity => quantity > 0); // removed objects in array which were 0 quantity

console.log("Products Available:", availableProducts); // logging of available products in console

// Task 6 Reduce Method

let sales = [500, 300, 200, 400]; // creating an array of sales

let totalrevenue = sales.reduce((acc, sale) => acc + sale, 0); // adding up all sales in array

console.log("Total Revenue:", totalrevenue); // logging the total revenue into the console

// Task 7 find() Method

let customers = ["Alice", "Bob", "Charlie", "David"]; // created an array of customers

let locatedCustomer = customers.find(name => name === "Charlie"); // locating charlie in array

console.log("Located Customer:", locatedCustomer); // logging located customer to console

// Task 8 Function Declaration

function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Tax: $${tax}`);
    return tax;
}; // Created a calculate tax function

calculateTax(500, 0.06); // declared numbers for calculating tax

