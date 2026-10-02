
// 1. User Role Enum Usage

enum UserRole {
    Admin = "superadmin",
    Moderator = "moderator",
    Viewer = "viewer"
}

// create a fnction can edit that returns false only for viewr role and true for other roles

function canEdit(role: UserRole): boolean {
    return role !== UserRole.Viewer;
}

console.log(canEdit(UserRole.Admin)); // ✅ true
console.log(canEdit(UserRole.Moderator)); // ✅ true
console.log(canEdit(UserRole.Viewer)); // ❌ false

// 2. Type Assertion with as using DOM Elements
const inputElement = document.getElementById("username") as HTMLInputElement;

console.log(inputElement.value); // ✅ valid, assuming the element exists and is an input