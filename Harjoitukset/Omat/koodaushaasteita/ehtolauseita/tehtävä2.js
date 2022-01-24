/*
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
const num4 = parseFloat(prompt("Enter third number: "));
const num5 = parseFloat(prompt("Enter third number: "));
let largest;


if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);
*/

function etsi()
{
  var l1 = document.getElementById('luku1').value
  var l2 = document.getElementById('luku2').value
  var l3 = document.getElementById('luku3').value
  var l4 = document.getElementById('luku4').value
  var l5 = document.getElementById('luku5').value
  var taulukko = [l1, l2, l3, l4, l5];
  taulukko = taulukko.sort();
  document.getElementById('vastaus2').innerHTML = taulukko[4];

}
