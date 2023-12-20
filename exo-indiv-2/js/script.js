let foundMe = 0
let givenNumber = 0;
let tentative = 0;

    const numberToGuess = () => {
    foundMe = parseInt(prompt('Joueur 1 : Donnez moi un chiffre entre 0 et 50 a faire deviner à joureur 2'));
    }

let didIWin = () => {

    givenNumber = parseInt(prompt('Joueur 2 : Donnez moi un chiffre', '0 < ? < 50'));
    //let givenNumber = 10;

    if (givenNumber > foundMe ) {
        alert('Plus petit !');
        ++tentative;
        console.log(false)
        return false
    } else if (givenNumber < foundMe) {
        alert('Plus grand !');
        ++tentative;
        console.log(false)
        return false
    } else {
        alert('Bravito, tu as trouvé au bout de ' + tentative + ' tentatives !');
        console.log(true)
        return true
    }
}



const gamePlay = () => {

    numberToGuess()
    while (!didIWin()) {
        }
    }
gamePlay()
