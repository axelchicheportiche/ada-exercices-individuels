
// let numberOfPlayers = 0;

// let players = []





// askNumberOfPlayer()

// let player = [
//     'Joueur 1', 'Joueur 2',
//     'Joueur 3', 'Joueur 4',
//     'Joueur 5', 'Joueur 6',
//     'Joueur 7', 'Joueur 8',
//     'Joueur 9'
//   ];
// let x = 9;

// let playerActuel = player[x];

// if (x === player.length){
//     playerActuel = player[0]
// }
// else {
//     playerActuel = player[x+1]
// }

// console.log(playerActuel)





let allumettes = 50;
let numberFromPlayer = 0;
let allumettesRest = 0;
let player = 1;
let numberOfPlayers = 0;
let players = []
let playerActuel = [players[0]];

function askNumberOfPlayer() {
    numberOfPlayers = 3;
        for (let i = 1; i< numberOfPlayers+1; i++){
            players.push('Joueur '+i)
        }
        console.log(players)
        console.log(numberOfPlayers)
        askPlayer(1)
}


function allumettesDeduction(number) {
    allumettes = allumettes - number
    console.log('alumetteDeduc')
    console.log(allumettes)
    if(allumettes > 0 ){
        askPlayer(0)
    }

    else {
        console.log('victory')
    }
}




function askPlayer(x) {

    if (player === x){
        x = x-1
        console.log('x est egale à' + x)
        console.log('entrée askP')
        numberFromPlayer = 0;
        numberFromPlayer = 5;
            if (playerActuel === players[numberOfPlayers]){
                playerActuel = [player[0]]
                x = 1
                console.log('if askP')
                console.log(playerActuel)
                console.log(x)
            }
            else {
                x = x+1
                console.log('x est egale à' + x)
                playerActuel = players[x]
                console.log('else askP')
                console.log(playerActuel)
                console.log(x)
            }

        while (numberFromPlayer > 6 || numberFromPlayer < 1) {
            numberFromPlayer = 2;
        }
            allumettesDeduction(numberFromPlayer);
    }

}


askNumberOfPlayer()