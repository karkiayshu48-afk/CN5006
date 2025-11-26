// Basic Arithmetic Operations on two or more numbers

function add(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function subtract(...numbers) {
  return numbers.reduce((a, b) => a - b);
}

function multiply(...numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}

function divide(...numbers) {
  return numbers.reduce((a, b) => a / b);
}

// Example usage:
console.log("Addition:", add(10, 5, 2));        // 17
console.log("Subtraction:", subtract(10, 5, 2)); // 3
console.log("Multiplication:", multiply(10, 5, 2)); // 100
console.log("Division:", divide(100, 5, 2));    // 10