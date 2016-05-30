function play(x,y,bombs){
    document.getElementById("bombs").innerHTML = bombs;
    gameB = [];
    borard = document.getElementById("gameboard");
    borard.innerHTML = "";
    for(i = 0 ; i < x; i++){
        var row = document.createElement("tr");
        gameB.push([]);
        for(j = 0 ; j < y; j++){
            var el = document.createElement("td");
            el.addEventListener("mousedown",function(e){
                console.log(i,j);
            },true);
//            setAttribute("onmousedown","show(" + i + "," + j + ")");
            el.addEventListener("contextmenu",function(){
                
            },true);
//                = function (e) {
//                e.preventDefault();
//                (function(i,j){mark(this.i,this.j);})(i ,j);
//            };
//            el.setAttribute("oncontextmenu","show(" + i + "," + j + ")");
            row.appendChild(el);
            gameB[i].push({target:el , role : null});
        }    
        borard.appendChild(row);
    }
    placeBombs(x,y,bombs);
}
var gameRunning = false;
var time = 0;
