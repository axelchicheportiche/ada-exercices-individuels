
let allumettes = 50;
let numberFromPlayer = 0;
let allumettesRest = 0;
let player = 1;
let numberOfPlayers = 0;
let players = [];
let playerActuel = players[0];
let x = 0;

function askNumberOfPlayer() {


    //const numberOfPlayers = parseInt(document.getElementById('monInput').value);
    //var numberOfPlayers = parseInt(input.value);
    numberOfPlayers =  parseInt(prompt(`Bonjour, combien y a t'il de joueurs ?`))
        //creation d'un tableau de joueurs
        console.log(numberOfPlayers)
        for (let i = 1; i< numberOfPlayers +1; i++){
            players.push('Joueur '+i)
        }
        console.log(players)
    askPlayer(x)
}


function allumettesDeduction(number) {
    allumettes = allumettes - number

    if(allumettes > 0 ){
        x = (x+1) % numberOfPlayers
        console.log(x)
        askPlayer(x)
    }

    else {
        x = x - 1
        victory(x)
    }
}

function askPlayer(x) {

    if (players.length > 0) {
        playerActuel = players[x % numberOfPlayers];
    } else {
        console.error("Aucun joueur n'a été ajouté !");
        return;
    }

        numberFromPlayer = 0; // set à zero
        numberFromPlayer = parseInt(prompt(`${playerActuel} : donnez moi un numéro entre 1 et 6`,`il reste ${allumettes}`)); //ask num

        //boucle condition num
        while (numberFromPlayer > 6 || numberFromPlayer < 1 || isNaN(numberFromPlayer)) {
            numberFromPlayer = parseInt(prompt(`ENTRE 1 et 6 STP FRERO`,`il reste ${allumettes}`));
        }

        // incrementation x
         x = (x + 1) % numberOfPlayers;
         playerActuel = players[x];

        //appel pou calcul
        allumettesDeduction(numberFromPlayer);
    }

function victory(x){
        x = x+1
        alert(`Bravito ${players[x]} tu as gagné`)

}
