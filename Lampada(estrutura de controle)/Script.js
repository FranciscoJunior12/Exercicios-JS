

function on() {

    document.getElementById("lampada").src = "img/on.jpg";

}

function off() {

    document.getElementById("lampada").src = "img/off.jpg";

}
/**
 * Eventos de sincronização permitem executar instruções em intervalos de tempo.
 * 
 * setTimeout = executa uma funcao apos um determindado tempo.
 * 
 */
function blink() {

    var intervalo = 0;
    var contador = 0;

    while (contador < 10) {
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='img/on.jpg';", intervalo);

        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='img/off.jpg';", intervalo);

        contador++;

    }

}
