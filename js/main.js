// se seleziono bassa compare la griglia 6*6
// se selezion media compare la griglia 8*8
// se seleziono alta compare la griglia 10*10
const gridContainer = document.querySelector(".grid");
let inputDifficulty = document.querySelector("#select_difficulty"); 
let btnPlay = document.querySelector("#play");

/*for (let i = 1; i <= 100; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}

for (let i = 1; i <= 46; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}

for (let i = 1; i <= 64; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    gridContainer.append(square);
}*/


btnPlay.addEventListener("click", function(){

    let userDifficulty = inputDifficulty.value;

    if (userDifficulty = "haigh") {

        gridContainer.classList.add("haigh")
        gridContainer.style.visibility = "visible";

        for (let i = 1; i <= 100; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }
      
    } else if (userDifficulty = "midium"){
        
        for (let i = 1; i <= 64; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }
        
        gridContainer.classList.add("midium")
        gridContainer.style.visibility = "visible";


    } else if (userDifficulty = "low"){

        gridContainer.classList.add("low")
        gridContainer.style.visibility = "visible";

        for (let i = 1; i <= 46; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }

    }
})