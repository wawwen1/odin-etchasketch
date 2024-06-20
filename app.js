// 1. Create webpage with a 16x16 grid of square divs
// 2. Hover effect over each div that changes colors
// 3. Add button on top of screen to prompt size of new grid when clicked (max 100)

const container = document.querySelector("#container");

createGrid = (rows, cols) => {
  container.innerHTML = "";

  const cellSize = `${100 / cols}%`;

  for (let i = 0; i < rows * cols; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");

    grid.style.width = cellSize;
    grid.style.height = cellSize;

    grid.addEventListener("mousemove", () => {
      grid.style.backgroundColor = "black";
    });

    container.appendChild(grid);
  }
};

document.querySelector("#gridButton").addEventListener("click", () => {
  const gridSize = prompt("Enter size of grid");
  if (gridSize !== null && gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize, gridSize);
  }
});

createGrid(16, 16);
