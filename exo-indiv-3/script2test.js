
// phrase to morse
let phrase = "COUCOU";

let inputValue = phrase

let phraseEnMaj = phrase.toLocaleUpperCase();

let phraseLength = phrase.length

let translationFinal = []

// morse to phrase (séparation des caractère morse par espace et mot par /)

let morse = '-- -- - --- -.-'

//IMPUT



// Définissez la fonction inputString
let inputString = () => {
    let inputValue = document.getElementById("monInput").value;
    console.log("La valeur de l'input est : " + inputValue);
    // Mettez la valeur dans l'élément avec l'ID "monInput2"
    document.getElementById("monInput2").value = inputValue;
};

// Sélectionnez l'élément input avec l'ID "monInput"
let inputElement = document.getElementById("monInput");

// Attachez l'événement "input" à l'élément avec l'ID "monInput"
inputElement.addEventListener("input", inputString);


let translateStringToMorse = () => {

        // ETAPE 1 -> transforme phrase en tableau
        const getLatinCharacterList = () => {
            //console.log(phraseEnMaj.split(''))
            return phraseEnMaj.split('')
        }
        const charactersList = getLatinCharacterList();

        // etape 2 = transforme UNE SEULE lettre à la fois en morse
        const translateLatinCharacter = (character) => {

                const latinToMorse = {
                    'A':'.-',
                    'B':'-...',
                    'C':'-.-.',
                    'D':'-..',
                    'E':'.',
                    'F':'..-.',
                    'G':'--.',
                    'H':'....',
                    'I':'..',
                    'J':'.---',
                    'K':'-.-',
                    'L':'.-..',
                    'M':'--',
                    'N':'-.',
                    'O':'---',
                    'P':'.--.',
                    'Q':'--.-',
                    'R':'.-.',
                    'S':'...',
                    'T':'-',
                    'U':'..-',
                    'V':'...-',
                    'W':'.--',
                    'X':'-..-',
                    'Y':'-.--',
                    'Z':'--..'
                };
                return latinToMorse[character];
                }

                //console.log(phraseEnMaj);




        // ETAPE 3= tranforme chaque lettre du tableau en morse
        // boucle qui dit "faire la traduction pour chaque élément du tableau"
        // i = 1, i =< tableau.lenght,



        const encode = () => {

                for (var i = 0; i < phraseLength; i++) {
                    console.log(translateLatinCharacter(charactersList[i]));
                    translationFinal.push(translateLatinCharacter(charactersList[i]));
                    console.log(translationFinal);
                }
        }

        encode()
}






// let translateMorsetoPhrase = () => {

//         // 1 = transofmre morse string en tableau
//         const getMorseCharacterList = () => {
//             //console.log(morse.split(' '))
//             return morse.split(' ')
//         }
//         const morseList = getMorseCharacterList();

//         // 2 transforme un seul carac morse à la fois en lettre
//         const translateMorseCharacter = (morse) => {
//             const morseToLatin = { '-': "T", '--': "M", '---': "O", '--.': "G", '--.-': "Q", '--..': "Z", '-.': "N", '-.-': "K", '-.--': "Y", '-.-.': "C", '-..': "D", '-..-': "X", '-...': "B", '.': "E", '.-': "A", '.--': "W", '.---': "J", '.--.': "P", '.-.': "R", '.-..': "L", '..': "I", '..-': "U", '..-.': "F", '...': "S", '...-': "V", '....': "H" }

//             return morseToLatin[morse];
//             }

//         // 3 tranforme chaque morse en tableau

//         let morsePhraseLength = morseList.length

//         const encode = () => {

//             for (var i = 0; i < morsePhraseLength; i++) {
//                 console.log(translateMorseCharacter(morseList[i]));
//                 translationFinal.push(translateMorseCharacter(morseList[i]));
//                 console.log(translationFinal);
//             }
//     }

//     encode()


// }




//translateMorsetoPhrase()

translateStringToMorse()
