function dibujarcanvas() {
    var canvas = document.getElementById('logo');
    var contexto = canvas.getContext('2d');

    contexto.font = "bold 85px Whisper";
    contexto.fillStyle = '#006CCC';
    contexto.fillText("Munay",30,280);
    contexto.lineWidth = 2;
    contexto.beginPath();
}