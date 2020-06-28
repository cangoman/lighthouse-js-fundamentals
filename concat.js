function concat(array_1, array_2) {
  return array_1.concat(array_2)
}

function merge(array_1, array_2) {
  const arr = array_1.concat(array_2);
  return arr.sort();
}