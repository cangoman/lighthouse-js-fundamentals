const judgeVegetable = function(veggies, metric) {
  let currentMax = 0;
  let currentWinner;
  for (let veggie of veggies) {
    if (veggie[metric] > currentMax) {
      currentMax = veggie[metric];
      currentWinner = veggie.submitter;
    }
  }
  return currentWinner;
}




const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
console.log( judgeVegetable(vegetables, metric));