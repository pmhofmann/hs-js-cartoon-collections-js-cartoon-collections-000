function dwarfRollCall(dwarves) {
  var dwarfList = "";
   for (var i = 0; i < dwarves.length; i++) {
    dwarfList += (i+1).toString()+ ". " + dwarves[i] + " ";
   }
   return dwarfList;
}

function summonCaptainPlanet(planeteerCalls){
  var planeteerNamesCalled =[];
  for (var i = 0; i < planeteerCalls.length; i++) {
  planeteerNamesCalled.push(planeteerCalls[i].toUpperCase() + "!");
}
return planeteerNamesCalled;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
    return true;
  }
  else {
    return false;
}
  }
}

function findTheCheese (foods) {
 for (let i = 0; i < foods.length; i++){
  if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert' ){
    return foods[i];
  }
 }
  return 'no cheese!';
}