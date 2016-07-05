/**
 * Created by ClothesForMe on 16/7/4.
 */
function drawRect(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    context.fillStyle = "#00ff00";
    context.strokeStyle = "#ff00ff";
    context.lineWidth = 5;
    context.fillRect(0,0,500,350);
    context.strokeRect(50,50,200,150);
    context.strokeRect(150,100,200,150);
}
function drawCircle(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    context.fillStyle = "#f1f2f3";
    context.fillRect(0,0,400,400);

    for (var i = 1; i < 10; i++) {
        //context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        //context.closePath();
        context.fillStyle = "rgba(255,0,0,0.25)";
        context.fill();
        /*context.strokeStyle = "#ff0000";
        context.stroke();*/
    }
}