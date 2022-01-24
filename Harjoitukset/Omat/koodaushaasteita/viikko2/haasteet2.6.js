function arvosanat(op, pisteet) {
  if (pisteet < 50) {
    return op + ' Hylätty';
  } else if (pisteet < 60) {
    return op + ' T1';
  } else if (pisteet < 70) {
    return op + ' T2';
  } else if (pisteet < 80) {
    return op + ' H3';
  } else if (pisteet < 90) {
    return op + ' H4';
  } else if (pisteet < 100) {
    return op + ' K5';
  }
}

console.log(arvosanat('Daniel',80));
console.log(arvosanat('Viivi',77));
console.log(arvosanat('Tiina',88));
console.log(arvosanat('Ismael',95));
console.log(arvosanat('Tuomas',68));
