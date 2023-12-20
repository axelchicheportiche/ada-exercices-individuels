let tripToParse = "Perdita 8 10 4"

function formatToObj(client, start, duration, price) {
  let formate = {
    'client': client,
    'start': start,
    'duration': duration,
    'price': price
  }

  return formate;
}

function parseTrip(trip) {
  // console.log(trip);
  const res = trip.split(' ');

  const resFinal = formatToObj(res[0],res[1],res[2],res[3]);

  return resFinal;
}

const resFinal = parseTrip(tripToParse)
// console.log(resFinal);

// Etape 3
let tripsToParse = [
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7"
]

function parseTrips(trips) {
  const tabFinal = [];

  // console.log('taille du tableau trips:', trips.length);
  for (let i = 0; i < trips.length; i = i + 1) {
    // console.log(i, '///', trips[i], '///', parseTrip(trips[i]));
    tabFinal.push(parseTrip(trips[i]));
  }
  return tabFinal;
}

const tabFinal = parseTrips(tripsToParse);

function getTripsPrice(voyages) {
  // console.log(voyages);
  let sum = 0;

  for (let i = 0; i < voyages.length; i++) {
    const price = parseInt(voyages[i].price);
    sum = sum + price; // sum += price;
  }

  return sum;
}

console.log(getTripsPrice(tabFinal));
