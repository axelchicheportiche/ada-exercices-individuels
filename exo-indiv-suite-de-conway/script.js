

//ETAPE 1 :
function decoupeChaine(string) {
    let SeparatedString = string
    .split('')
    const newArray = [];
    for (let i = 0; i<SeparatedString.length; i++){

        if(SeparatedString[i]!==SeparatedString[i+1]){
            newArray.push(SeparatedString[i]);
            newArray.push(' ');
        }
        else {
            newArray.push(SeparatedString[i]);
        }
    }
    //console.log(newArray.join(''));
    return decritChaine(newArray.join(''));
}
//Etape2 :
function decritChaine(cuttedString){
    const cuttedSplit = cuttedString.split(' ');
    //console.log(cuttedSplit);

    let array = [];

    for (let i = 0; i < cuttedSplit.length; i++) {
        if(cuttedSplit[i].length>0){
        array.push(cuttedSplit[i].length)
        array.push(cuttedSplit[i][0])
        //array.push(' ')
    }
    }
    //console.log(array.join(''))
    return array.join('')
}


function suiteConway(carac, stage){
for (let i =0; i<stage; i++){
    carac = decoupeChaine(carac)
    console.log(carac)
   }
}

suiteConway('x',10)