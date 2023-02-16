
const savePlayers = () => {

    let playerNom1 = document.getElementById("player1");
    playerNom1.addEventListener('playerNom1',function(){
        if (this.value.length > 12) 
        this.value = this.value.slice(0,12); 
    })
    let nomPlayer1 = playerNom1.value;
    sessionStorage.setItem("Nombre player 1", nomPlayer1);

    let playerNom2 = document.getElementById("player2");
    let nomPlayer2 = playerNom2.value;
    sessionStorage.setItem("Nombre player 2", nomPlayer2);

    const displace = () => {
        this.style.marginleft == "40px" ? this.style.marginleft == "0px" : this.style.marginright == "40px"; 
        }
        document.getElementById("play").addEventListener("mouseover", displace);

    if(nomPlayer1 == "" || nomPlayer2 == "") {

        displace ()
        /*const displace = () => {
            this.style.marginleft == "40px" ? this.style.marginleft == "0px" : this.style.marginright == "40px"; 
            }
            document.getElementById("play").addEventListener("mouseover", displace);*/
    // alert("No olvides poner tu nombre");

    } else {
        
        window.location.href = "../pages/tictactoe.html"
        
        // document.getElementById("play").href="../pages/tictactoe.html";
    }
}
    


    

