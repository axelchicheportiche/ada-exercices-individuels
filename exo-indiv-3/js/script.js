
const latinTextElement = document.getElementById("latin-text");

const morseTextElement = document.getElementById("morse-text");



latinTextElement.addEventListener("input", (evt) => {
    //ajouter fonction pour interdire les caractères qui ne sont pas des lettres
    morseTextElement.value = translateStringToMorse(latinTextElement.value)
});





const translateStringToMorse = (latinText) => {

        // ETAPE 1 -> transforme phrase en tableau

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
            return (character in latinToMorse) ? latinToMorse[character] : "";
        }
        // ETAPE 1 -> transforme phrase en tableau

        if (!latinText) return "";

        const charactersList = latinText.toLocaleUpperCase().split('');

        const morseCode = []
        charactersList.forEach(element => {

            morseCode.push(translateLatinCharacter(element))

        });

        return morseCode.join(' ')

}


// renvoyer la valeur de console.log(translationFinal.join()); dans la page HTML :






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
//					console.log(translationFinal.join());
//     }

//     encode()


// }




//translateMorsetoPhrase()

translateStringToMorse()
