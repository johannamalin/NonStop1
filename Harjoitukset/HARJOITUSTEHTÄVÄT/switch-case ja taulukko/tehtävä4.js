function arvo(){
  var deck = [''];
  var pakka = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var tiedot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;

  for(m = 0; m < pakka.length; m++)
  {
    for(n = 0; n < tiedot.length; n++)
    {
      if(m == pakka.length-1 && n == tiedot.length-1)
      {
        deck[laskuri] = deck[m] + tiedot[n];
      }
      else {
        deck[laskuri] = pakka[m]+numerot[n];
        laskuri++;
      }
    }
  }
  var kortti = [];
  for(l = 0; l < 5; l++)
  {
      temp = deck[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('deck').innerHTML = '<p>'+kortti+'</p>';

}
