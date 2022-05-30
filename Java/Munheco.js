let pizarra = document.getElementById("pizarra");
var pincel = pizarra.getContext("2d");

//fondo del canvas 
pincel.fillStyle = ("rgb(0,0,0)");
pincel.fillRect(0, 0, 600, 500);

function pintarMunheco(numero) {
    switch (numero) {
        case 1:
            // Horca
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.fillRect(10, 30, 30, 450);
            pincel.fillRect(40, 30, 260, 30);
            pincel.fillRect(297, 30, 5, 110);
            break

        case 2:
            // Cabeza del munheco
            pincel.fillStyle = ("rgb(255,255,255)");
            pincel.beginPath();
            pincel.arc(300, 170, 30, 0, 2 * Math.PI);
            pincel.fill();
            break

        case 3:
            // Tronco del munheco
            pincel.fillStyle = ("rgb(255,255,255)");
            pincel.fillRect(294, 200, 12, 120);
            break

        case 4:
            // Pierna izquierda del munheco
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.beginPath();
            pincel.moveTo(305, 320);
            pincel.lineTo(347, 375);
            pincel.lineTo(337, 380);
            pincel.lineTo(295, 325);
            pincel.fill();
            break

        case 5:
            // Pierna derecha del munheco
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.beginPath();
            pincel.moveTo(293, 320);
            pincel.lineTo(255, 375);
            pincel.lineTo(265, 380);
            pincel.lineTo(303, 325);
            pincel.fill();
            break

        case 6:
            // Brazo izquierdo del munheco
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.fillRect(306, 220, 40, 10);           
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.beginPath();
            pincel.moveTo(346, 220);
            pincel.lineTo(386, 200);
            pincel.lineTo(391, 208);
            pincel.lineTo(346, 230);
            pincel.fill();
            break

        case 7:
            // Brazo derecho del munheco
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.fillRect(294, 220, -40, 10);            
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.beginPath();
            pincel.moveTo(254, 220);
            pincel.lineTo(214, 200);
            pincel.lineTo(210, 208);
            pincel.lineTo(254, 230);
            pincel.fill();
            break

        case 8:
            // Muerte del munheco
            pincel.fillStyle = ("rgb(255,0,0)");
            pincel.moveTo(280, 160);
            pincel.lineTo(295, 170);
            pincel.lineTo(292, 175);
            pincel.lineTo(277, 165);
            pincel.moveTo(294, 160);
            pincel.lineTo(278, 173);
            pincel.lineTo(282, 176);
            pincel.lineTo(296, 165);
            pincel.fill();
            break

        default:
            pincel.font = "25pt Verdana";
            pincel.fillStyle = "red";
            pincel.textAlign = "center";
            pincel.fillText("FIN DEL JUEGO", 450, 280);
            
    }
}
















