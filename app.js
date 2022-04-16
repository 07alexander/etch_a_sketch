const container = document.getElementById("container");
function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i=0;i<(rows*cols);i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

    
makeGrid(16,16);
container.addEventListener("mouseover", function(event){
        //event.target.style.color ="orange";
        event.target.style.backgroundColor = "orange";
    },false);