// find container in html
const container = document.querySelector(".container");

// create grid function
function createGrid(size) {
  // check if size is out of bound
  if (size > 100) {
    size = 100;
  } else if (size < 1) {
    size = 1;
  }
  // remove previous Squares if applicable
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // create squares / grid
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.border = "1px solid grey";
    square.style.display = "flex";
    square.style.width = `calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;
    square.style.boxSizing = "border-box";
    container.appendChild(square);
  }

  // make squares responsive
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    });
  });
}

// Change Grid Size Button
// Reset Button

let promptButton = document.querySelector("#promptButton"); // Change Grid
let resetButton = document.querySelector("#resetButton"); // Reset

promptButton.addEventListener("click", () => {
  let newSize = prompt(
    "Enter a number between 1 and 100 to change the grid size"
  );
  createGrid(newSize);
});

resetButton.addEventListener("click", () => {
  createGrid(16);
});

//initial grid creation
createGrid(16);
