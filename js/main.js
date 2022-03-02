const gridContainer = document.querySelector(".grid");

for (let i = 1; i <= 100; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.append(square);
}