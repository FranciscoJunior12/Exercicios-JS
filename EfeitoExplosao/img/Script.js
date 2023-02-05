


/*efeito de beep*/
function beep() {

    var beep = new Audio();
    beep.src = "Beep_Short.mp3";
    beep.play();

}
/*efeito de explosao*/
function explosao() {

    var explosao = new Audio();
    explosao.src = "Thunder_Crack.mp3";
    explosao.play();

}
var click = false;

function fim() {

    document.getElementById("fire").src = "clean.png";
}

/* xequemate*/
var contador = 10;
function xequemate() {

    if (click == false) {

        var timer1 = setInterval(function () { start() }, 1000);

        var timer2 = setTimeout("fim();", 13200);

        function start() {

            beep();
            document.getElementById("time").innerHTML = contador;
            if (contador == 0) {
                clearInterval(timer1);
                explosao();
                document.getElementById("time").innerHTML = "GAME OVER";
                document.getElementById("fire").src = "explosion.gif";
            }
            contador--;
            click = true;
        }




    }


}