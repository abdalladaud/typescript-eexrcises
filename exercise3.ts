function fullname(fname: string, lname: string): string {
    return fname + " " + lname;
}

console.log(fullname("Hamza", "Ali")); // ✅ valid

// part2

function registerUser(username: string, isAdmin?: boolean, language: string = "en"):string{
    return `Username: ${username}, Admin: ${isAdmin}, Language: ${language}`;
}

console.log(registerUser("Hamza", true, "Somali")); // ✅ valid

// rest operators

const averageScore = (...scores: number[]): number => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};

console.log(averageScore(90, 85, 100)); // ✅ valid