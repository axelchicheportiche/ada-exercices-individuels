
let allumettes = 50;
let numberFromPlayer = 0;
let allumettesRest = 0;
let player = 1;
let numberOfPlayers = 0;
let players = [];
let playerActuel = players[0];
let x = 0;

function askNumberOfPlayer() {
    numberOfPlayers =  5
        //creation d'un tableau de joueurs
        for (let i = 1; i< numberOfPlayers +1; i++){
            players.push('Joueur '+i)
        }
        console.log(players)
        playerActuel = players[0]
    askPlayer(x)

}


function allumettesDeduction(number) {
    console.log('entrée allummettededuction')
    allumettes = allumettes - number
    x = (x+1) % numberOfPlayers
    if(allumettes > 0 ){
        console.log(x)
        askPlayer(x)
    }

    else {
        victory()
    }
}

function askPlayer(x) {
    console.log("le joueur a l'entrée de askPlayer est " + playerActuel, x)
    //console.log('entrée askPlayer')
    if (players.length > 0) {
        playerActuel = players[x];
    } else {
        console.error("Aucun joueur n'a été ajouté !");
        return;
    }

        numberFromPlayer = 0; // set à zero
            console.log(playerActuel)
        numberFromPlayer = 5

        //boucle condition num
        while (numberFromPlayer > 6 || numberFromPlayer < 1 || isNaN(numberFromPlayer)) {
            numberFromPlayer = 3
        }

        // incrementation x
        console.log('entrée increm')
         x = (x + 1)% numberOfPlayers ;
         playerActuel = players[x];
         console.log(playerActuel, x)

        //appel pou calcul
        allumettesDeduction(numberFromPlayer);
    }

function victory(){

        console.log(`Bravito ${playerActuel} tu as gagné`)

}

askNumberOfPlayer()
