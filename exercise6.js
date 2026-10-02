"use strict";
// 1. User Role Enum Usage
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
// create a fnction can edit that returns false only for viewr role and true for other roles
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log(canEdit(UserRole.Admin)); // ✅ true
console.log(canEdit(UserRole.Moderator)); // ✅ true
console.log(canEdit(UserRole.Viewer)); // ❌ false
// 2. Type Assertion with as using DOM Elements
const inputElement = document.getElementById("username");
console.log(inputElement.value); // ✅ valid, assuming the element exists and is an input
