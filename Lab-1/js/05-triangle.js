// Initialize an empty string to store the triangle pattern
var triangle = '';

// Loop through each row of the triangle
for (let i = 1; i <= 7; i++) {
    // Add '#' characters to the triangle string based on the current row number
    triangle += '#'.repeat(i) + '\n';
}

// Print the triangle pattern to the console
console.log(triangle);
