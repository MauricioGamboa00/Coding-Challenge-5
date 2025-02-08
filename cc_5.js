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

order.displayOrder()

