"use strict";
// 1. Echo FOundation with Generics
function echo(input) {
    return input;
}
// Example usage with string type
const input1 = echo("Hello, TypeScript!");
console.log(input1); // Output: Hello, TypeScript!
// Example usage with number type
const input2 = echo(42);
console.log(input2); // Output: 42
// Example usage with array type
const input3 = echo(["Abdalla", "Leila"]);
console.log(input3[0]); // Output: Abdalla
console.log(input3[1]); // Output: Leila
// Example usage with object type
const input4 = echo({ name: "Aisha", age: 27 });
console.log(input4.name); // Output: Aisha
console.log(input4.age); // Output: 27
// Example usage with string type
const result1 = {
    status: "success",
    data: "Operation completed successfully."
};
console.log(result1.status); // Output: success
console.log(result1.data); // Output: Operation completed successfully.
// Example usage with object type
const result2 = {
    status: "success",
    data: { id: 1, name: "Aisha" }
};
console.log(result2.status); // Output: success
console.log(result2.data.id); // Output: 1
console.log(result2.data.name); // Output: Aisha
