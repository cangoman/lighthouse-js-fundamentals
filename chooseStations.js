const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations( stations ) {
  let possibleStations = [];

  for (const station of stations) {
    if ( (station[1] >= 20) && (station[2] === "school" || station[2] === "community centre") ) {
      possibleStations.push(station[0]);
    }
  }
  return possibleStations;
} 

console.log (chooseStations(stations));