let allumettes = 50;
let nbJoueurs = 2;
let tour = 0
let flag = 0

function decrementAllumettes (nbDecrementAllumettes) {
    allumettes -= nbDecrementAllumettes;
}

function activePrompt (activePlayer) {
    do {
        if (allumettes>0) {
            let nb = parseInt (prompt(`Joueur ${activePlayer} : Combien d'allumette(s) souhaites tu retirer?`))
        }
    } while (nb > allumettes || nb < 1 || nb > 6)
    return nb
}

function victory () {
    if (allumettes < 1) {
        alert("You are the winner!")
        allumettes = 50
        activePlayer = 1
    }
}

function game() {
    let activePlayer = 1

    nbJoueurs = parseInt(display("Indiquez le nombre de joueurs ?"))

    while (allumettes>0){
        decrementAllumettes(activePrompt(activePlayer))
        victory()
        if(activePlayer +1 > nbJoueurs) {
            activePlayer = 1
        }
        else {activePlayer ++}
    }
}


function display(text){

    document.getElementById('message').innerHTML = text
    while (flag === 0) {

    }
    flag = 0
    return document.getElementById('champs').value



}

//activePlayer = (activePlayer+1)%nbJoueurs
