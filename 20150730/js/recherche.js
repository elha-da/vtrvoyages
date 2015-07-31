
function change_onglet_bleu(name) {
	document.getElementById('onglet_'+ancien_onglet).className = 'onglet_0 onglet';
	document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
	document.getElementById('contenu_onglet_'+ancien_onglet).style.display = 'none';
	document.getElementById('contenu_onglet_'+name).style.display = 'block';
	ancien_onglet = name;
}

var ancien_onglet = 'ski';
change_onglet_bleu(ancien_onglet);

function change_onglet_vert(name) {
	document.getElementById('onglet_'+ancien_onglet).className = 'onglet_2 onglet';
	document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
	document.getElementById('contenu_onglet_'+ancien_onglet).style.display = 'none';
	document.getElementById('contenu_onglet_'+name).style.display = 'block';
	ancien_onglet = name;
}




