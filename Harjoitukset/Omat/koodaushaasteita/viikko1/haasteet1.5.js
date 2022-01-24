function sekuntti(se1,se2,se3) {
  se1 = se1 * 3600;
  se2 = se2 * 60;
  let se4 = se1 + se2 + se3;
  return console.log(se4);
}

//Tarkista
sekuntti(10,10,10);
