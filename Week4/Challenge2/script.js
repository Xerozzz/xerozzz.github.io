// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
var innerBox = document.getElementById("result");
var button = document.getElementById("justin-btn");

button.addEventListener("mouseover", mIn);
button.addEventListener("mouseout", mOut);

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
function mIn() {
  innerBox.innerHTML = "Welcome to My Heart";
  innerBox.style.color = "blue";
  innerBox.style.backgroundColor = "pink";
}

function mOut() {
  innerBox.innerHTML = "Don't Leave Me Please";
  innerBox.style.color = "red";
  innerBox.style.backgroundColor = "black";
}
