// se seleziono bassa compare la griglia 6*6
// se selezion media compare la griglia 8*8
// se seleziono alta compare la griglia 10*10
const gridContainer = document.querySelector(".grid");
let inputDifficulty = document.querySelector("#select_difficulty"); 
let userDifficulty = inputDifficulty.value;
let btnPlay = document.querySelector("#play");

for (let i = 1; i <= 100; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}

/*for (let i = 1; i <= 46; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}*/

/*for (let i = 1; i <= 64; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}*/


btnPlay.addEventListener("click", function(){
    if (userDifficulty = "haigh") {
        // const element = document.getElementById("id");	// Get element
        // element.style.visibility = "hidden";			// Hide element
        gridContainer.style.visibility = "visible";			// Show element
        // const visible = element.style.visibility;		// Get visibility
    }
})