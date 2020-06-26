let outputString;
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 || i % 4 === 0) {
    outputString = "";
    if (i % 3 === 0) {
      outputString += "Loopy";
    }
    if (i % 4 === 0) {
      outputString += "Lighthouse";
    }
    console.log(outputString);
  } else {
    console.log(i);
  }
}
