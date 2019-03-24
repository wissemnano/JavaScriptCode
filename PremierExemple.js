// Récupere les donnes de visiteurs
// Capturer les entres des visiteurs

//var nomVisiteur = prompt("Tapez votre nom SVP");
//alert("Bonjour "+nomVisiteur);

// Convertir Chaine en majuscule
var maChaine = "ceci est Un test des chaine !";
var majusclke= maChaine.toUpperCase();
console.log(majusclke);

// Convertir en Minuscule
var minuscule = maChaine.toLocaleLowerCase();
console.log(minuscule);

//tester les boolean
var boolean1 = 13;
var boolean2 = 15;
console.log(boolean1 == boolean2); // Retourner false non 0
console.log(boolean1 != boolean2); // Retourner true non 1

// tester les conditions
var score = 10;

if(score > 10)
{
	console.log("Condition vrai");
}
else if(score==10)
{
	console.log("Deuxieme condition");
}
else
{
	console.log("Condition Faux");
}

// Condition Switch()
  /*var varSwitch = prompt("Tapez nombre");
console.log(varSwitch);
varSwitch= parseInt(varSwitch);
console.log(varSwitch);
*/
var varSwitch=14;
switch(varSwitch)
{
	case 0 : console.log("First switch"); break;
	case 2: console.log("Second switch"); break;
	case 5: console.log("Third switch"); break;
	case 10: console.log("Fourd switch"); break;
	case 14: console.log("Fifth switch"); break;
	default : alert("Default");
}

// Les tableaux
var jourSemaine = ['lundi', 'mardi', 'mercredi'];
console.log(jourSemaine[1]);
console.log(jourSemaine);
console.log(jourSemaine.length);