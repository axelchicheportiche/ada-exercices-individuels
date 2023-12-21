
const affichageBox = document.querySelector('.box')


//ETAPE 1 :
function decoupeChaine(string) {
  let separatedString = string.split("");
  const newArray = [];
  for (let i = 0; i < separatedString.length; i++) {
    if (separatedString[i] !== separatedString[i + 1]) {
      newArray.push(separatedString[i]);
      newArray.push(" ");
    } else {
      newArray.push(separatedString[i]);
    }
  }
  //console.log(newArray.join(''));
  return decritChaine(newArray.join(""));
}
//Etape2 :
function decritChaine(cuttedString) {
  const cuttedSplit = cuttedString.split(" ");
  //console.log(cuttedSplit);

  let array = [];

  for (let i = 0; i < cuttedSplit.length; i++) {
    if (cuttedSplit[i].length > 0) {
      array.push(cuttedSplit[i].length);
      array.push(cuttedSplit[i][0]);
      //array.push(' ')
    }
  }
  //console.log(array.join(''))
  return array.join("");
}

function suiteConway(carac, stage) {
    let finalArray = []
  for (let i = 0; i < stage; i++) {
    carac = decoupeChaine(carac);
    finalArray.push(carac)
    finalArray.push('<br>')

  }
  affichageBox.innerHTML = `${finalArray.join('')}`
}




//ETAPE 4 :
