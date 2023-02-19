//INFORMACION DE JUGADORES 

let infoPlayer1 = document.getElementById("player1");
infoPlayer1.innerHTML = sessionStorage.getItem("Nombre player 1");

let infoPlayer2 = document.getElementById("player2");
infoPlayer2.innerHTML = sessionStorage.getItem("Nombre player 2");

// VARIABLES 

let tablero = Array.from(document.getElementsByClassName("box"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["", "", "", "", "", "", "", "", ""];

let combinacionGanadora = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let ganador;





// FUNCION PARA COMPROBAR GANADOR

const comprueboGanador = () => {
  if (miTablero[0] === miTablero[1] && miTablero[1] === miTablero[2] && miTablero[0] != "") {
    
    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
  if (miTablero[3] === miTablero[4] && miTablero[4] === miTablero[5] && miTablero[3] != ""){

    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
  if (miTablero[6] === miTablero[7] && miTablero[7] === miTablero[8] && miTablero[6] != ""){

    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
  if (miTablero[0] === miTablero[3] && miTablero[3] === miTablero[6] && miTablero[0] != ""){

    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
  if (miTablero[1] === miTablero[4] && miTablero[4] === miTablero[7] && miTablero[1] != ""){

    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
  if (miTablero[2] === miTablero[5] && miTablero[5] === miTablero[8] && miTablero[2] != ""){

    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
  if (miTablero[0] === miTablero[4] && miTablero[4] === miTablero[8] && miTablero[0] != ""){

    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
  if (miTablero[2] === miTablero[4] && miTablero[4] === miTablero[6] && miTablero[2] != ""){

    if(turno) {
        ganador = sessionStorage.getItem("Nombre player 1");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"

    } else {
        ganador = sessionStorage.getItem("Nombre player 2");
        sessionStorage.setItem("Ganador", ganador)
        window.location.href = "../pages/congrats.html"
    }
  }
};

// MAPEO DE TABLERO

tablero.map((celda) => {
  celda.addEventListener("click", () => {
    if (celda.innerHTML === "" && (fichaP1 > 0 || fichaP2 > 0)) {
      celda.innerHTML = turno == true ? "X" : "O";

      turno ? fichaP1-- : fichaP2--;

      miTablero[celda.id] = turno ? "X" : "O";

      comprueboGanador();

      turno = !turno;
    }
    
    if(fichaP1 == 0 && fichaP2 == 0){
        alert("Empate")
    }
        
    
  });
});




