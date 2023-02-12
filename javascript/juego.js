

let infoPlayer1 = document.getElementById("player1");
infoPlayer1.innerHTML = sessionStorage.getItem("Name player 1");

let infoPlayer2 = document.getElementById("player2");
infoPlayer2.innerHTML = sessionStorage.getItem("Name player 2");




let tablero = Array.from(document.getElementsByClassName("box"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["","","","","","","","",""];

// let combinacionGanadora = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

let combinacionesGanadoras = {
    cg1 : [0, 1, 2],
    cg2 : [3, 4, 5],
    cg3 : [6, 7, 8],
    cg4 : [0, 3, 6],
    cg5 : [1, 4, 7],
    cg6 : [2, 5, 8],
    cg7 : [0, 1, 2],
    cg8 : [0, 4, 8],
    cg9 : [2, 4, 6]
};

const comprueboGanador = (numero) => {
    // let ganador = "winner" + numero;

    // let arrayJugadores = ["winner1", "winner2"];

    // arrayJugadores = arrayJugadores.filter(valor => !ganador.includes(valor));

    // let tableroGanador = miTablero.find([combinacionGanadora[0]]);

    // console.log(tableroGanador);

    let ganador = "";

    let posicionFichaP1 = document.getElementsByClassName(combinacionesGanadoras.cg1);

    console.log(posicionFichaP1);

    if(fichaP1 == 0 && posicionFichaP1 == "X") {
        console.log("ha ganado X");
    }
};

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {

            //Ejemplo de como añadir una clase a un elemento seleccionado
            // celda.classList.add('cellDesign2');

            //Ejemplo de inyección de HTML desde JavaScript
            // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

            //Compruebo que SI puedo pintar la X o la O.
            if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){

                //Aqui PINTO el simbolo, dependiendo del turno
                celda.innerHTML = (turno) ? "X" : "O";

                //Después, dependiendo tambien de quien fuese el turno, le quito una ficha
                //de las que puede poner
                (turno) ? fichaP1-- : fichaP2--;


                //Finalmente, además de que en pantalla quede marcada, guardo la posición 
                //que ocupa en mi tablero lógico
                miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();

                //Cambiamos de turno
                turno = !turno;

            }
        })
    }
)

