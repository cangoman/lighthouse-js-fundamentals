function range(start,end,step) {
  const output = [];
  if ( (start === undefined || end === undefined || step === undefined) || start > end || step <= 0 ) 
    return output;
  let i = start;
  while (i <= end) {
    output.push(i);
    i += step;
  }
  return output;
}



console.log(range(0, 8, 2));
//console.log(range(10, 30, 5));
//console.log(range(-5, 2, 3));