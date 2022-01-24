function Tiedot(etunimi, sukunimi, osoite, postinumero, postitoimipaikka, puhelin, sähköposti)
{
  this.etuNimi = etunimi;
  this.sukuNimi = sukunimi;
  this.osoite = osoite;
  this.postinumero = postinumero;
  this.postitoimipaikka = postitoimipaikka;
  this.puhelin = puhelin;
  this.sähköposti = sähköposti;
}

const tiedot = new Tiedot("Matti", "Mattinen", "Tie 1", "00000", "Mattikylä", "9375840285", "matti@mattinen.fi")
const tokatTiedot = new Tiedot("Johanna", "Malin", "Ylänkötie 48", "04430", "Järvenpää", "0505671407", "johannamalin@outlook.com")
const vikatTiedot = new Tiedot("Jorma", "Jormanen", "Tie 2", "11111", "Jormakylä", "0495839583", "jorma@jormanen.fi")

console.log(tiedot);
