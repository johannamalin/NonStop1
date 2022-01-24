var hahmo =
document.getElementById("hahmo");
var palikka = document.getElementById("palikka");
function hyppy(){
  if(hahmo.classList !="animate"){
      hahmo.classList.add("animate");
      }
  setTimeout(function(){
      hahmo.classList.remove("animate");
  },500);
}

var checkLose = setInterval(function(){
    var hahmoTop =
    parseInt(window.getComputedStyle(hahmo).getPropertyValue("top"));
    var palikkaLeft =
    parseInt(window.getComputedStyle(palikka).getPropertyValue("left"));
    if(palikkaLeft<20 && palikkaLeft>0 && hahmoTop>=130){
      block.style.animation = "none";
      block.style.animation = "none";
      alert("Hävisit!");
    }
},10);
