// Numbers and Colors
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var colors = ["#2b8ead", "#6f98a8", "#2f454e", "#bfbfbf"];

// Shuffling all numbers
function shuffle() {
  numbers.sort(() => Math.random() - 0.5);
  renderElements();
}

// Render Numbers to page
function renderElements() {
  var element = "";
  let color = "";
  for (j = 0; j < numbers.length; j++) {
    color = colors[Math.floor(Math.random() * colors.length)];
    let style = `background: ${color}; border-left: 4px solid ${color}`;
    element += `<div class=boxes style="${style}">${numbers[j]}</div>`;
  }
  document.getElementById("numbersContainer").innerHTML = element;
}

// Sort numbers
function sortNum() {
  numbers.sort((a, b) => a - b);
  renderElements();
}

// render when page loads
window.addEventListener("load", (event) => {
  shuffle();
});
