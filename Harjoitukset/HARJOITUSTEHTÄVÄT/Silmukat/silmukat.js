function parillisetNumerot()
{
  var numero = parseInt(document.getElementById('luku').value);
  var jono = "<p>";
  for(var i = 2; i <= numero; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}

function salasanaksi() {
  var sana = document.getElementById('sana').value;
  var salasana = "<p>";
  for(var j = 0; j < sana.length; j++)
  {
    salasana += sana[j] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}

function tarkastus() {
  var sana = document.getElementById('kirjainTarkastus').value;
  var kirjain = 'Ei ole.';
  for(var i = 0; i < sana.length; i++)
  {
    if(sana[i] == 'ö' || sana[i] == 'Ö')
    {
      kirjain = 'Löytyy!';
    }
  }

function laskeKertoma() {
 var luku = document.getElementById('kertoma').value;
 var las = 1;
 for (var y = 1; y <= luku; y++)
} las*=y;
document.getElementById('kertoma').innerHTML = 'Kertoma on ' + luku + las '.';

function klikkaa() {
  var tulostus = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tulostus+='hip heijaa ';
    }
    else if(y%5 == 0)
    {
      tulostus+='heijaa ';
    }
    else if(y%3 == 0)
    {
      tulostus+='hip ';
    }
    else {
      tulostus+=y+' ';
    }
    document.getElementById('tulostaLuvut').innerHTML = tulostus;
  }
}

function kymmenenTulostus() {
  var kym = '<p>';
  for(var e = 1; e <=10; e++)
  {
    kym += e + ' ';
  }
  kym += '</p>';
  document.getElementById('tulostus').innerHTML = kym;
}


//tehtävä 9

function jarjestys() {
  var l1 = document.getElementById('luku1').value
  var l2 = document.getElementById('luku2').value
  var l3 = document.getElementById('luku3').value
  var l4 = document.getElementById('luku4').value
  var l5 = document.getElementById('luku5').value
  var taulukko = [l1, l2, l3, l4, l5];
  var uusiTaulukko = taulukko.sort();
  document.getElementById('vastaus9').innerHTML = uusiTaulukko;
}
