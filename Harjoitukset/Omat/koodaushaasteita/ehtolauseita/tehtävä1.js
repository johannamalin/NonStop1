/*
function sort() {

  var sorting = []

  var x = parseInt(document.getElementById("numero1").value);
  var y = parseInt(document.getElementById("numero2").value);
  var z = parseInt(document.getElementById("numero3").value);

  sorting.push(x, y, z)
  sorting.sort(function(a, b) {
   return a - b;
  });

  console.log(sorting)
}
*/

function jarjesta()
{
  var l1 = document.getElementById('luku1').value
  var l2 = document.getElementById('luku2').value
  var l3 = document.getElementById('luku3').value
  var taulukko = [l1, l2, l3];
  var uusiTaulukko = taulukko.sort();
  document.getElementById('vastaus1').innerHTML = uusiTaulukko;

}
