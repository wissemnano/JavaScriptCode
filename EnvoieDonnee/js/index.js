function sendTextElement() {
	localStorage.setItem("textTransmis", document.getElementById('send').value);
}

function recieveTextElement() {
//Syntaxe pour LIRE les données de localStorage:
	var lastname = localStorage.getItem("key");

}

/* Syntaxe pour SUPPRIMER les données de localStorage:
localStorage.removeItem("key");
Syntaxe
window.localStorage
Syntaxe pour SAUVER des données sur le stockage local:
localStorage.setItem("key", "value");
*/
