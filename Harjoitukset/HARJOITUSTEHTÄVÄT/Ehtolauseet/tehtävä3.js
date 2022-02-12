function tarkasta()
{
  luku = document.getElementById('luku').value;
  if(luku%2 == 0)
{
  document.getElementById('v3').innerHTML = "Lukusi on parilline";
  }
  else {
    document.getElementById('v3').innerHTML = "Lukusi on pariton";
  }
}
