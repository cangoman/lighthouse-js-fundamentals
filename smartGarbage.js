//Using a switch statement
// function smartGarbage(trash, bins) {
//   switch(trash) {
//     case "recycling" :
//       bins.recycling++;
//       break;
//     case "waste":
//       bins.waste++;
//       break;
//     case "compost":
//       bins.waste++;
//   }
//   return bins;
// }


//A more concise way

function smartGarbage(trash, bins) {
  bins[trash]++;
  return bins;
}


console.log( smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }) );