
//Etape 1 =

// const sum1 = [10,20,30,40,50,60,70,80,90];
// let finalSum = 0;

// const calcul = () => {
//     for (let i = 0; i < sum1.length ; i++) {
//         finalSum = finalSum + sum1[i]
//         //valable aussi : finalSum += sum1[i];
//         console.log(finalSum)
//     }
// }
// calcul()


// Etape 2

// let sum2 = [10,20,30,40,50,60,70,80,90];
// let finalSum2 = 0;

// const CalculRecursive = (tableau) => {

//         if (tableau.length == 0) {
//             return 0
//         }
//         else {
//             finalSum2 = finalSum2+  tableau[0]
//             console.log(finalSum2)
//             return tableau[0] + CalculRecursive(tableau.slice(1))
//         }
// }
// CalculRecursive(sum2)


// Etape 3 factorielle
let finalSum3 = 0;

let factorial = (f) => {

    if (f == 1) {
        return 1;
    }
    return (f * factorial(f-1))
}

console.log(factorial(5))
