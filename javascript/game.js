var imageNames = ["circulo", "triangulo", "cuadrado"];
var imageSrc = ["./assets/Juego2_CÍRCULO NEGRO.png", "./assets/Juego2_TRIÁNGULO NEGRO.png", "./assets/Juego2_CUADRADO NEGRO.png"];

var imageSelected = "cuadrado";
var points = 0;
var pastSelected = 0;
var seconds = 0;
var win = false;

function checkOption(position) {
    if (win == false) {
        if (position == imageSelected) {
            points += 1;
            document.getElementById("Points").textContent = points;
            randomize();
    
        } else {
            points -= 5;
            document.getElementById("Points").textContent = points;
            randomize();
        }
    
        checkWin();
    } else {
        alert("Ya se terminó, ¿que mas quieres?")
    }
}

function randomize() {
    random = 0;

    do {
        random = Math.floor(Math.random() * 3);
    } while (random == pastSelected);

    imageSelected = imageNames[random];
    document.getElementById("ImageChoose").src = imageSrc[random];
    
    pastSelected = random;
}

function checkWin() {
    if (points == 100 && seconds < 100) {
        alert("Has ganado!");
        win = true;

    } else if (seconds == 100 && points < 100) {
        alert("Has perdido");
        win = true;
    }
}
var downloadTimer = setInterval(function(){
    if(seconds == 100){
      clearInterval(downloadTimer);
    }
    if (win == false) {
        seconds += 0.01;
        seconds = Math.round((seconds + Number.EPSILON) * 100) / 100;
        document.getElementById("Seconds").textContent = seconds;

        checkWin();
    }
  }, 10);
  