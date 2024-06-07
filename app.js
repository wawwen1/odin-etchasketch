// 1. Create webpage with a 16x16 grid of square divs
// 2. Hover effect over each div that changes colors
// 3. Add button on top of screen to prompt size of new grid when clicked (max 100)

const container = document.querySelector("#container");

createGrid = (rows, cols) => {
  
  for (let i = 0; i < rows * cols; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");
    grid.textContent = "test";
    container.appendChild(grid);

  }
};

createGrid(16,16);