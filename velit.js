// Define a generator function
function* generateValues() {
    yield [2, 27, 0.0026652043797913785];
    // You can yield more values or perform other operations here
}

// Create a generator object
const generator = generateValues();

// Retrieve values from the generator
let result = generator.next();
console.log(result.value); // Output: [2, 27, 0.0026652043797913785]
console.log(result.done);  // Output: false

result = generator.next();
console.log(result.done);  // Output: true (No more values to yield)
