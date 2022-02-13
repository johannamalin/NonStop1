function pisteenLaskenta() {

let word = prompt("Enter a word please");

const scrabble = {
  a: 1, b: 8, c:10, d: 7, e: 1, f: 8, g: 8, h: 4, i: 1, j: 4,
  k: 2, l: 2, m: 3, n: 1, o: 2, p: 4, q: 12, r: 4, s: 1, t: 1,
  u: 3, v: 4, w: 12, x: 12, y: 12, z: 12, ä: 2, ö: 7, å: 12
};

const sum = [...word].reduce((accu, letter) => { return accu + scrabble[letter.toLowerCase()]; }, 0);

alert(sum);
}
