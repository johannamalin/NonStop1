function arvo(arvo1,arvo2) {
  var arvo3 = arvo1 + arvo2;
    if (arvo3 < 100) {
      return console.log('Lukujen summa on alle 100.');
    } else {
      return console.log('Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!');
    }
}

//Tulokset tässä
arvo(732,64);
arvo(2,7);
