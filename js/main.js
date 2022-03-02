// se seleziono bassa compare la griglia 6*6
// se selezion media compare la griglia 8*8
// se seleziono alta compare la griglia 10*10
const gridContainer = document.querySelector(".grid");
let inputDifficulty = document.querySelector("#select_difficulty"); 
let btnPlay = document.querySelector("#play");





btnPlay.addEventListener("click", function(){

    gridContainer.innerHTML = "";

    let userDifficulty = inputDifficulty.value;

    if (userDifficulty == "low") {

        gridContainer.classList.add("low")
        gridContainer.style.visibility = "visible";

        for (let i = 1; i <= 36; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }

    } else if (userDifficulty == "midium"){
        
        gridContainer.classList.add("midium")
        gridContainer.style.visibility = "visible";
        
        for (let i = 1; i <= 64; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }
        
    } else if (userDifficulty == "high"){

        gridContainer.classList.add("high")
        gridContainer.style.visibility = "visible";

        for (let i = 1; i <= 100; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }

    } 
})