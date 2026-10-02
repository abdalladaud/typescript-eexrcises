"use strict";
function fullname(fname, lname) {
    return fname + " " + lname;
}
console.log(fullname("Hamza", "Ali")); // ✅ valid
// part2
function registerUser(username, isAdmin, language = "en") {
    return `Username: ${username}, Admin: ${isAdmin}, Language: ${language}`;
}
console.log(registerUser("Hamza", true)); // ✅ valid
