/*var y = Math.floor(Math.random() * 10 + 1);
var arvaa = 1;
document.getElementById('arvoi').onclick = function(){
  var x = document.getElementById('arvo').value;
  if(x == y)
  {
    alert("Hyvä! Sait tämän numeron: " + arvaa + " oikein! ");
  }
  else if(x > y)
  {
    arvaa++;
    alert("Kokeile pienempää numeroa!");
  }
  else{
    arvaa++;
    alert("Kokeile isompaa numeroa!")
  }
}
*/

function arvaaNumero() {
  var randomNumero = Math.floor(Math.random() * 11);

  console.log(randomNumero)

  var arvaus;
  arvaus = prompt("Anna numero 1-10.");
  //console.log("Sinun arvaus on: " + arvaus);
  if (arvaus < randomNumero) {
    window.alert("Arvauksesi oli liian pieni!")
  } else if (arvaus > randomNumero) {
    window.alert("Arvauksesi oli liian suuri!")
  } else if (arvaus == randomNumero) {
    window.alert("Voitit! Arvauksesi oli oikein!");
  } else {
    window.alert("Error!")
  }
}
