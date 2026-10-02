"use strict";
// 1. 🟢 Declare Variables with Explicit Types
// const productName: string = 29; // this is error b/c the type of productName is string, not number
const productName = "SuperWidget";
// const price: number = "19.99"; // this is error b/c the type of price is number, not string
const price = 19.99;
// const discountAvailable: boolean = "true";  // this is error b/c the type of discountAvailable is boolean, not string
const discountAvailable = true;
console.log("Product Name: " + productName);
console.log("Price: $" + price.toFixed(2));
console.log("Discount Available: " + discountAvailable);
// 2. 🔧 Fix this Broken JavaScript
// Convert this JS function to TypeScript and add types:
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(200, 0.5)); // should return 100
// 3. ⚠️ Dangerous `any`
// Here’s a risky TypeScript function using `any`:
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
}
printLength("Hello, TypeScript!"); // should print 15
