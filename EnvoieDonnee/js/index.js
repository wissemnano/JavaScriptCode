function sendTextElement() {
	localStorage.setItem("textTransmis", document.getElementById('send').value);
}

function recieveTextElement() {
//Syntaxe pour LIRE les données de localStorage:
	var textRecue = localStorage.getItem("textTransmis");
	document.getElementById("affichage").innerHTML = textRecue;
}

/* Syntaxe pour SUPPRIMER les données de localStorage:
localStorage.removeItem("key");
Syntaxe
window.localStorage
Syntaxe pour SAUVER des données sur le stockage local:
localStorage.setItem("key", "value");
*/

/*

Syntaxe
window.localStorage
Syntaxe pour SAUVER des données sur le stockage local:

localStorage.setItem("key", "value");
Syntaxe pour LIRE les données de localStorage:

var lastname = localStorage.getItem("key");
Syntaxe pour SUPPRIMER les données de localStorage:

localStorage.removeItem("key");

Exemple
L'exemple suivant compte le nombre de fois qu'un utilisateur a cliqué sur un bouton:

if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "You have clicked the button " +
localStorage.clickcount + " time(s).";
*/