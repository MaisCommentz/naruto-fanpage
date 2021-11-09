function renderTime() {

  var maDate = new Date();
  var annee = maDate.getFullYear();
  if (annee < 1000) {
    annee += 1900;
  }
  var jour = maDate.getDay();
  var mois = maDate.getMonth();
  var jourMois = maDate.getDate();
  var tabJour = new Array("Dimanche,", "Lundi,", "Mardi,", "Mercredi,", "Jeudi,",
   "Vendredi,", "Samedi,");
  var tabMois = new Array("Janvier", "FÃƒÂ©vrier", "Mars", "Avril", "Mai", "Juin", 
  "Juillet", "AoÃƒÂ»t", "Septembre", "Octobre", "Novembre", "DÃƒÂ©cembre");
  // Date End

  // Temps
  var heureMtn = new Date();
  var h = heureMtn.getHours();
  var m = heureMtn.getMinutes();
  var s = heureMtn.getSeconds();
  if (h == 24) {
    h = 0;
  } else if (h > 12) {
     h = h - 0;
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  var monHorloge = document.getElementById("clockDisplay");
  monHorloge.textContent = "" + tabJour[jour] + " " + jourMois + " " 
  + tabMois[mois] + " " + annee + " | " + h + ":" + m + ":" + s;
  monHorloge.innerText = "" + tabJour[jour] + " " + jourMois + " " 
  + tabMois[mois] + " " + annee + " | " + h + ":" + m + ":" + s;

  setTimeout("renderTime()", 1000);
}