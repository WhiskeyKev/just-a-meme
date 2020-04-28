window.addEventListener('DOMContentLoaded', initMeme, false);

const lstCouleurDeGraine = ['#4ddbff', '#ffff00', '#ff0066', '#00ff00', '#9966ff', '#ff0000', '#ff5500'];
const lstGrosMessage = [
	'👽',
	'My name is Jeff.',
	'Oh hi mark.',
	'Why did i make this bad website.',
	'No homo.',
	'Sample Text.',
	'1v1 me on Rust.'
];

let indiceBG = 0;
let indiceFont = 0;
let cptDeTemps = 0;
let monInterFromage;

function initMeme() {
	document.getElementById('grosMessage').textContent = lstGrosMessage[Math.floor(Math.random() * lstGrosMessage.length)];
	window.setInterval(colorGangbang, 20);
	monInterFromage = window.setInterval(perdeDeTemps, 1000);
}

function colorGangbang() {
	indiceBG = (indiceBG + 1) % lstCouleurDeGraine.length;
	indiceFont = (indiceFont + 2) % lstCouleurDeGraine.length;
	document.getElementsByTagName('body')[0].style.backgroundColor = lstCouleurDeGraine[indiceBG];
	document.getElementById('grosMessage').style.color = lstCouleurDeGraine[indiceFont];
	document.getElementById('cptDeBs').style.color = lstCouleurDeGraine[indiceFont];
}

function perdeDeTemps() {
	cptDeTemps++;

	if (cptDeTemps == 604800) {
		//Yes, there is a end to this mess hahaha
		document.getElementById('cptDeBs').textContent = 'I wasted waaay to much time from u. U gotta stop dude :|';
		window.clearInterval(monInterFromage);
	}
	else if (cptDeTemps >= 86400) {
		document.getElementById('cptDeBs').textContent = 'I wasted '+ (Math.floor(cptDeTemps / 86400))
			+' day(s), '+ (Math.floor(cptDeTemps / 3600) % 24)
			+' hour(s), '+ (Math.floor(cptDeTemps / 60) % 60) 
			+' minute(s) & '+ (cptDeTemps % 60) +' second(s) from u.';
	}
	else if (cptDeTemps >= 3600) {
		document.getElementById('cptDeBs').textContent = 'I wasted '+ (Math.floor(cptDeTemps / 3600)) 
			+' hour(s), '+ (Math.floor(cptDeTemps / 60) % 60) 
			+' minute(s) & '+ (cptDeTemps % 60) +' second(s) from u.';
	}
	else if (cptDeTemps >= 60) {
		document.getElementById('cptDeBs').textContent = 'I wasted '+ (Math.floor(cptDeTemps / 60))
			+' minute(s) & '+ (cptDeTemps % 60) +' second(s) from u.';
	}
	else {
		document.getElementById('cptDeBs').textContent = 'I wasted '+ cptDeTemps +' second(s) from u.';
	}
		
}