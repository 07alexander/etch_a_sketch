const container = document.getElementById("container");


function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i=0;i<(rows*cols);i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};
function clearGrid(){
    var board = container.querySelectorAll("grid-item");
    for(let i=0;i<board.length; ++i){
        board[i].style.backgroundColor ="";
        console.log(board[i]);
        console.log("hi");
    }
}

    
makeGrid(16,16);


container.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "orange";
        console.log(event);
    },false);

