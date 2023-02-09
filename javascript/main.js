const savePlayers = () => {

    let playerNom1 = document.getElementById("player1");
    let nomPlayer1 = playerNom1.value;
    console.log(nomPlayer1);
    sessionStorage.setItem("Name player 1", nomPlayer1);

    let playerNom2 = document.getElementById("player2");
    let nomPlayer2 = playerNom2.value;
    console.log(nomPlayer2);
    sessionStorage.setItem("Name player 2", nomPlayer2);

    if(nomPlayer1 == "" || nomPlayer2 == "") {
        alert("You must complete both names");
    } else {
        document.getElementById("play").href="../pages/tictactoe.html";
    };
}



