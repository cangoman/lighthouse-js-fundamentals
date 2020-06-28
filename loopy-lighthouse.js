// let outputString;
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0 || i % 4 === 0) {
//     outputString = "";
//     if (i % 3 === 0) {
//       outputString += "Loopy";
//     }
//     if (i % 4 === 0) {
//       outputString += "Lighthouse";
//     }
//     console.log(outputString);
//   } else {
//     console.log(i);
//   }
// }

function loopyLighthouse( range, multiples, words) {
  let outputString;
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 || i % multiples[1] === 0) {
      outputString = "";
      if (i % multiples[0] === 0) {
        outputString += words[0];
      }
      if (i % multiples[1] === 0) {
        outputString += words[1];
      }
      console.log(outputString);
    } else {
      console.log(i);
    }
  }
}


loopyLighthouse( [15,90], [2,5], ["Batty", "Beacon"]);
