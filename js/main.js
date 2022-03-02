const gridContainer = document.querySelector(".grid");

/*for (let i = 1; i <= 100; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}*/

/*for (let i = 1; i <= 46; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}*/

for (let i = 1; i <= 64; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}

// se seleziono bassa compare la griglia 6*6
// se selezion media compare la griglia 8*8
// se seleziono alta compare la griglia 10*10

