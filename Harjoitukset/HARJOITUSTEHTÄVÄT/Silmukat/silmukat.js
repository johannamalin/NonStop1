// joku meni rikki tässä koko tiedostossa, yritän vielä korjata

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
 las*=y;
document.getElementById('kertoma').innerHTML = '<p>Tämän ' + luku ' laskettu kertoma on '+ las '.</p>';

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

function laskeNumerot(){
  yhteensa = 0;
  for(var y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById('ärsyttää').innerHTML = '<p>'+ vastaus: + '</p>';
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

function salisKaks() {
  var word = document.getElementById('word').value;
  var kirjaimet = = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var saliss = "<p>";
  var randomKirjaimet = kirjaimet[Math.floor(Math.random() * kirjaimet.length)]

  for(var s = 0; s < sana.length; j++)
  {
    saliss += word[s] + randomKirjaimet;
  }
  saliss += "</p>";
  document.getElementById('salala').innerHTML = saliss;
}

function parillisettomat(){
  var nro1, nro2, pali, ralku, p_summa=0, r_summa=0, p_luvut='', r_luvut='';
  nro1 = parseInt(document.getElementById('pikku').value);
  nro2 = document.getElementById('iso').value;
  if(nro1%2 == 0)
  {
    pali = nro1;
  }
  else {
    pali = nro1+1;
  }
  for(var b = pali; b<=nro2; b+=2)
  {
    p_luvut += b + ' ';
    p_summa += b;
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    r_luvut += r + ' ';
    r_summa += r;
  }
  document.getElementById('parillisettomat').innerHTML = '<p>Parilliset numerot: ' + p_luvut +' ja niiden summa: '
   + p_summa + '</p><p>Parittomat luvut: ' + r_luvut + ' ja niiden summa: '+ r_summa + '</p>';
