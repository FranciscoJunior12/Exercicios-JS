/**
 * Aula 6 :jogo de dado
 * @author francisco manuel Domingos nunior
 */



function lancarDado() {
    var sorteio = Math.floor(Math.random() * 6 + 1);

    switch (sorteio) {

        case 1:
            document.getElementById("face").src = "img/face1.png";
            break;

        case 2:
            document.getElementById("face").src = "img/face2.png";
            break;

        case 3:
            document.getElementById("face").src = "img/face3.png";
            break;

        case 4:
            document.getElementById("face").src = "img/face4.png";
            break;

        case 5:
            document.getElementById("face").src = "img/face5.png";
            break;

        case 6:
            document.getElementById("face").src = "img/face6.png";
            break;
        default:
            break;

    }
}