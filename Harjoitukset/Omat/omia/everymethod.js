/*
// -2 lisätty jälkikäteen, ennen sitä tulos 'true'
const numbers = [-1, 1, 2, 3, 4, 5];

const res = numbers.every(isPositive);

function isPositive(item) {
  return item > 0;
}
*/

//console.log(res);

const persons = [
  {
    name: 'Florin'
  }
  {
    name: 'Ivan'
  }
  {
    name: 'Liam'
  }
  {
    surname: 'Jai'
  }
];

const res = persons.every(person => person.name !== undefined);

console.log(res);
