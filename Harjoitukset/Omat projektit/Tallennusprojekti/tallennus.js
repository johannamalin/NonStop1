


const signUp = e => {
  let formData = {
    etunimi: document.getElementById('etunimi').value,
    sukunimi: document.getElementById('sukunimi').value,
    osoite: document.getElementById('osoite').value,
    posti: document.getElementById('posti').value,
    toimipaikka: document.getElementById('toimipaikka').value,
    numero: document.getElementById('numero').value,
    email: document.getElementById('email').value
  }
  localStorage.setItem('formData',JSON.stringify(formData));
  //console.log(localStorage.getItem('formData'));
  dispData();
  e.preventDefault();
}

function dispData(){
  //console.log(JSON.parse(localStorage.getItem('formData')));
  let { etunimi, sukunimi, osoite, posti, toimipaikka, numero, email } = JSON.parse(localStorage.getItem('formData'));
  var varasto = document.getElementById('varasto');
  varasto.innerHTML = `
  <table>
   <tbody>
    <tr>
     <td>Etunimi:</td>
     <td>${etunimi}</td>
    </tr>
    <tr>
     <td>Sukunimi:</td>
     <td>${sukunimi}</td>
    </tr>
    <tr>
     <td>Lähiosoite:</td>
     <td>${osoite}</td>
    </tr>
    <tr>
     <td>Postinumero:</td>
     <td>${posti}</td>
    </tr>
    <tr>
     <td>Postitoimipaikka:</td>
     <td>${toimipaikka}</td>
    </tr>
    <tr>
     <td>Puhelinnumero:</td>
     <td>${numero}</td>
    </tr>
    <tr>
     <td>Sähköpostiosoite:</td>
     <td>${email}</td>
    </tr>
   </tbody>
 </table>
  `
}

//data näkyviin heti
//dispData();

/*
const tiedotForm = document.getElementById("tiedot-form");
const tiedotInput = document.getElementById("tiedot-input");
const tiedotNappi = document.getElementById("tiedot-nappi")
const tiedot = document.getElementById("tiedot");

let tiedotStorage = localStorage.getItem("tiedot")
? JSON.parse(localStorage.getItem("tiedot"))
: [];

tiedotForm.addEventListener("button", (e) => {
  e.preventDefault();
  tiedotStorage.push(tiedotInput.value);
  localStorage.setItem("tiedot", JSON.stringify(tiedotStorage));
  listBuilder(tiedotInput.value);
  tiedotInput.value = "";
});

const listBuilder = (text) => {
  const tieto = document.createElement("li");
  tieto.innerHTML = text + ' <button onclick="poistaTieto(this)">x</button>';
  tiedot.appendChild(tieto);
};

const haeTiedot = JSON.parse(localStorage.getItem("tiedot"));
haeTiedot.forEach((tieto) => {
  listBuilder(note);
});

const poistaTieto = (btn) => {
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indefOf(el);
  tiedotStorage.splice(index, 1);
  localStorage.setItem("tiedot", JSON.stringify(tiedotStorage));
  el.remove();
};
*/

//localStorage.setItem("Nimi", "Johanna");
//console.log(localStorage)
