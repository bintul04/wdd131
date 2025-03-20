// const radiusOutput = document.getElementById('radius');
// const areaOutput = document.querySelector('area');

// let area = 0;
// const PI = 3.14159;

// let radius = 10;
// area = PI * radius * radius;
// radiusOutput = radius;
// areaOutput = area;

// radius = 20;
// area = PI * radius * radius;
// radiusOutput.textContent = radius;
// areaOutput.textContent = area;










// Select elements from the HTML
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

// Initialize variables
let area = 0;
const PI = 3.14159; // Constant value of Pi

// First calculation: Radius = 10
let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius; // Update radius display
areaOutput.textContent = area; // Update area display

// Second calculation: Radius = 20
radius = 20; // Update radius
area = PI * radius * radius; // Recalculate area
radiusOutput.textContent = radius; // Update radius display
areaOutput.textContent = area; // Update area display
