// let tripTab = [];

// let pricesTab = [];

// let totalPrice = 0;

// function parseTrip(trip) {
//     tripTab.push(trip.split (" "));
//     console.log(
//         'client name : ' + tripTab[0] + ', '+
//         'depart time : ' + parseInt(tripTab[1])+', ' +
//         'duration : ' + parseInt(tripTab[2])+', '+
//         'price : ' + parseInt(tripTab[3])
//     )
//     console.log(tripTab)


// }


const tableau = ["Roger 0 5 10"]

function parseTrip(trip) {

let res = trip[0].split(" ");


let obj = {

'client' : res[0],
'start' : res[1],
'duration' : res[2],
'price' : res[3]

}
console.log(obj)
return obj
}

parseTrip(tableau)
