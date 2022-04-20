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
    var gridList = container.querySelectorAll('.grid-item');
    gridList.forEach(function(item){
        item.style.backgroundColor='white';
        console.log(item.style.backgroundColor);
});
    console.log("CLEARED!")
    
}
makeGrid(16,16);






container.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "orange";
        console.log(event);
    },false);

