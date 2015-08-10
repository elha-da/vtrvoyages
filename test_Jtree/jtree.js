
function choix(choixId, choixVal) {

	var valeur = choixVal ;
	var id = choixId;
	var listeId = 'search_type_'+id ;
	var labId = 'case_'+id ;
	var textBloc = document.getElementById(labId).textContent;

	document.getElementById('search_type_lieu').value = valeur ;
	document.getElementById('case_search_type_lieu').textContent = textBloc ;
	document.getElementById('case_search_type_lieu').className = 'simulation-champ-text';

}



function cookieFormulaireRecherche() {
    var cookieRecup = $.cookie('_vtrFormRech'); // récupère le tableau Json du cookie
    alert(cookieRecup);


    var departSki = document.getElementById('search_type_date_depart_ski').value;
    if(document.getElementById('weekEnd').checked) {
	var dureeSejour = document.getElementById('weekEnd').value;
    } else { 
	var dureeSejour = document.getElementById('semaine').value;
    }
    var nbPersonne = document.getElementById('nbPersonnes_nb').value;
    var nbPersonne_as = document.getElementById('nbPersonnes_as').value;
    var nbPersonne_ans = document.getElementById('nbPersonnes_ans').value;
    var nbPersonne_es = document.getElementById('nbPersonnes_es').value;
    var nbPersonne_ens = document.getElementById('nbPersonnes_ens').value;
    if(document.getElementById('search_type_rem_meca').checked) {
	var forfait = document.getElementById('search_type_rem_meca').value;
    } else { 
	var forfait = null ;
    }
    if(document.getElementById('search_type_materiel').checked) {
	var materiel = document.getElementById('search_type_materiel').value;
    } else { 
	var materiel = null ;
    }   
 
    var jsonTab = {
	departSki : departSki, 
	dureeSejour : dureeSejour, 
	nbPersonne : nbPersonne, 
	nbPersonne_as : nbPersonne_as, 
	nbPersonne_ans : nbPersonne_ans, 
	nbPersonne_es : nbPersonne_es, 
	nbPersonne_ens : nbPersonne_ens };

    $.cookie.raw = true;
    $.cookie.json = true;  
    
    $.cookie('_vtrFormRech', jsonTab, {expires: 90}); // stocker Json : jsonTab  expire dans 90jours

//    alert ("construction tab");
}

//    document.getElementById(listeId).style.display = 'none';
//    document.getElementById('case_search_type_lieu').setAttribute('for', id);
//    document.getElementById('case_search_type_lieu').id = labId;
	
//    $('#tree1').empty();
//    $('#tree1').append(bloc);


// var  = document.getElementById('').value;
//    alert(document.getElementsByName('search_type[duree_sejour]').value);

