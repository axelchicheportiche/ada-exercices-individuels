//imposer la combinaison à deviner composée de 2 pions de couleurs différentes.

//12 essais pour trouver la bonne combinaison

//4 choix de couleurs possibles

//variable generale =

const combinationToGuess = ["red", "blue"];

const authorizedColor = ["red", "blue", "green", "orange"];

let flag = false;

//const combinationProposal = ["red", "blue"];
//Fonction qui valide la combinaison

function validProposal(authorized, proposal) {
  return proposal.every((color) => authorized.includes(color));
}

//fonction qui vérifie si c'est la bonne combinaison : retourne true or false

function isItTheRightCombination(proposal, combination) {
  if (validProposal(authorizedColor, proposal) === false) {
    alert(
      "ta proposition est invalide, essaie avec ces couleurs là en mettant un espace entre chaque couleur: red, blue, green, orange"
    );
    //flag = flase
  }

  if (validProposal(authorizedColor, proposal) === true) {
    for (let i = 0; i < combination.length; i++) {
      if (proposal[i] !== combination[i]) {
        console.log(proposal[i], combination[i]);
        console.log("perdu");
        didIWin(false);
      }
    }
    console.log(proposal, combination);
    console.log("gagné");
    flag = true;
  }
  didIWin(flag);
}

function didIWin(flag) {
  let combinationProposal = [];
  console.log("didIWin enter");

  if (flag === false) {
    //demander une combinaison au joueur :
    function playerProposal() {
      let pProposal = prompt(
        "Donne nous deux couleurs entre celle-ci : red, blue, green, orange"
      );
      console.log(pProposal);
      combinationProposal = pProposal.split(" ");
      console.log(combinationProposal);
      return combinationProposal;
    }
    //vérifier si la combinaison est valide :
    isItTheRightCombination(playerProposal(), combinationToGuess);
  }
  if (flag === true) {
    alert("bravo tu as gagné");
  }
}

didIWin(flag);

//console.log(isItTheRightCombination(combinationProposal, combinationToGuess));

//fonction qui gère la partie (continuer tant que/fin si gagné)
