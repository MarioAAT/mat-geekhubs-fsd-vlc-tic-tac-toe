
const savePlayers = () => {

    let playerNom1 = document.getElementById("player1");
    let nomPlayer1 = playerNom1.value;
    sessionStorage.setItem("Nombre player 1", nomPlayer1);

    let playerNom2 = document.getElementById("player2");
    let nomPlayer2 = playerNom2.value;
    sessionStorage.setItem("Nombre player 2", nomPlayer2);

    if(nomPlayer1 == "" || nomPlayer2 == "") {
        
    alert("No olvides poner tu nombre");

    } else {
        
        window.location.href = "../pages/tictactoe.html"
    }
}
    


    

