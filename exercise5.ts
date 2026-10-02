// 1. Echo FOundation with Generics

function echo<T> (input: T): T {
    return input;
}

// Example usage with string type
const input1 = echo<string>("Hello, TypeScript!");
console.log(input1); // Output: Hello, TypeScript!

// Example usage with number type
const input2 = echo<number>(42);
console.log(input2); // Output: 42

// Example usage with array type
const input3 = echo<string[]>(["Abdalla", "Leila"]);
console.log(input3[0]); // Output: Abdalla
console.log(input3[1]); // Output: Leila

// Example usage with object type
const input4 = echo<{ name: string; age: number }>({ name: "Aisha", age: 27 });
console.log(input4.name); // Output: Aisha
console.log(input4.age); // Output: 27

// 2. Generic Interface

interface ApiResult<T> {
    status: string;
    data: T;
}


// Example usage with string type
const result1: ApiResult<string> = {
    status: "success",
    data: "Operation completed successfully."
};

console.log(result1.status); // Output: success
console.log(result1.data);   // Output: Operation completed successfully.

// Example usage with object type
const result2: ApiResult<{ id: number; name: string }> = {
    status: "success",
    data: { id: 1, name: "Aisha" }
};

console.log(result2.status); // Output: success
console.log(result2.data.id);   // Output: 1
console.log(result2.data.name); // Output: Aisha

// 3, First Element Foundation with Generics

function firstElement<T>(items: T[]): T {
    return items[0];
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const firstNumber = firstElement(numbers);
console.log(firstNumber); // Output: 1

const strings = ["apple", "banana", "cherry"];
const firstString = firstElement(strings);
console.log(firstString); // Output: apple