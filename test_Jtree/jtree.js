
function choix(choixId, choixVal) {
    if(document.getElementById(choixId).checked) {
	var valeur = choixVal ;
	var id = choixId;
	var listeId = 'search_type_'+id ;
	var labId = 'case_'+id ;
	var textBloc = document.getElementById(labId).textContent;

	document.getElementById('search_type_lieu').value = valeur ;
	document.getElementById('case_search_type_lieu').textContent = textBloc ;

	
    } else { 
	return null ;
    }
}



function cookieFormulaireRecherche() {
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
    alert ("ok");
 
    var tab = new Array();
    tab['departSki'] = departSki; 
    tab['dureeSejour'] = dureeSejour; 
    tab['nbPersonne'] = nbPersonne; 
    tab['nbPersonne_as'] = nbPersonne_as; 
    tab['nbPersonne_ans'] = nbPersonne_ans; 
    tab['nbPersonne_es'] = nbPersonne_es; 
    tab['nbPersonne_ens'] = nbPersonne_ens;
    

}

//    document.getElementById(listeId).style.display = 'none';
//    document.getElementById('case_search_type_lieu').setAttribute('for', id);
//    document.getElementById('case_search_type_lieu').id = labId;
	
//    $('#tree1').empty();
//    $('#tree1').append(bloc);


// var  = document.getElementById('').value;
//    alert(document.getElementsByName('search_type[duree_sejour]').value);

