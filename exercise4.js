"use strict";
//With out Email
const login = {
    id: 1,
    name: "Ali",
    password: "ali123"
};
console.log(login); // ✅ valid
//With Email
const login2 = {
    id: 2,
    name: "farah",
    password: "farah123",
    email: "farah@example.com"
};
console.log(login2); // ✅ valid
// Re=asign the id property of login object
// login.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
