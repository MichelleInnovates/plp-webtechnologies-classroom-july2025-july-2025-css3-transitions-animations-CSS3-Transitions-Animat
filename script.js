/* ===============================
   Part 2: JavaScript Functions
   =============================== */

// Global variable
let globalMultiplier = 2;

// Function with parameters + return value
function calculateRectangleArea(length, width) {
  // Local variable
  let area = length * width;
  // Use global variable
  return area * globalMultiplier;
}

// Demonstration of scope + function call
document.getElementById("calcBtn").addEventListener("click", () => {
  const result = calculateRectangleArea(5, 3); // length=5, width=3
  document.getElementById("calcResult").textContent =
    `Calculated area (with multiplier): ${result}`;
});


/* ===============================
   Part 3: Combining CSS + JS
   =============================== */

const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Function to trigger animation
function triggerAnimation(element, className) {
  element.classList.remove(className); // reset animation
  void element.offsetWidth; // trick to restart animation
  element.classList.add(className);
}

animateBtn.addEventListener("click", () => {
  triggerAnimation(box, "animate");
});
