interface User {
    readonly id: number;
    name: string;
    password: string;
    email?: string;

}

//With out Email
const login: User = {
    id: 1,
    name: "Ali",
    password: "ali123"
}

console.log(login); // ✅ valid

//With Email
const login2: User = {
    id: 2,
    name: "farah",
    password: "farah123",
    email: "farah@example.com"
}

console.log(login2); // ✅ valid

// Re=asign the id property of login object

// login.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.