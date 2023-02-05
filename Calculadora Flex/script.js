
/**
 * Aula5
 */

var etanol, gasolina;


function calcular() {

    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));

    resultado = 0.7 * gasolina;

    if (etanol <= resultado) {
        document.getElementById("status").src = "img/etanol.png";

    } else {

        document.getElementById("status").src = "img/gasolina.png";
    }

}

function resetar() {

    document.getElementById("status").src = "img/neutro.png";

}