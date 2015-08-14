function change_onglet(name) {
    if (name == 'ski')
	document.getElementById('onglet_'+ancien_onglet).className = 'onglet_0 onglet';
    else 
	document.getElementById('onglet_'+ancien_onglet).className = 'onglet_2 onglet';
    document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
    document.getElementById('contenu_onglet_'+ancien_onglet).style.display = 'none';
    document.getElementById('contenu_onglet_'+name).style.display = 'block';
    ancien_onglet = name;
}

var ancien_onglet = 'ski';
change_onglet(ancien_onglet);

function afficher_cacher(id) {
    if(document.getElementById(id).style.display=='none'){
	document.getElementById(id).style.display='block';
    }
    else if(document.getElementById(id).style.display=='block'){
	document.getElementById(id).style.display='none';
    }
    else {
	document.getElementById(id).style.display='block';
    }
    return true;
}

function cocherDecocherFormule(source) {
    var valFormule = source;

    if (valFormule == 0) {
	for(i=1; i < 6; i++) {                    		 
	    $('input[value='+i+']').removeAttr('checked');
	}
    }
    else {
	$('input[value=1]').prop('checked', 'checked');
	if ((valFormule == 1) || (valFormule == 2) || (valFormule == 3) || (valFormule == 4)) {
	    if ($('input[value=2]').attr('checked')) {
		return false;
	    }
	    else {
		for(i = 1; i < 6; i++) { 
		    $('input[value='+i+']').removeAttr('checked');
		}
		$('input[value='+valFormule+']').prop('checked', 'checked');
		$('input[value=1]').prop('checked', 'checked');
	    } 
	}
	if (valFormule == 5) {
	    if ($('input[value=2]').attr('checked')) {
		return false;
	    }
	    else {
		for(i = 1; i < 6; i++) { 
		    $('input[value='+i+']').removeAttr('checked');
		}
		$('input[value='+valFormule+']').prop('checked', 'checked');
		$('input[value=1]').prop('checked', 'checked');
		$('input[value=2]').prop('checked', 'checked');
	    } 
	}
    }
    $('input[value=0]').prop('checked', 'checked');
}

jQuery(document).ready(function($){

    /*
     * infos bulle au survol de la souris
     */
    // on sélection tous les liens ayant l'attribut rel= tooltip
    $('input[rel=tooltip]').mouseover(function(position_mouse) {
	
        // on récupère la valeur de l'attribut title et l'assigner à la variable tip
        var tip = $(this).attr('title');   
	
        // on insére l infobulle avec son texte dans la page
        $(this).append('<div id="tooltip">' + tip + '</div>');    
	
        // Ajuster les coordonnées de l'infobulle
        $('#tooltip').css('top', position_mouse.pageY + 10 );
        $('#tooltip').css('left', position_mouse.pageX + 20 );

	
    });
    
    $('#nbPersonnes_nb').on('change', function(){
	document.getElementById('nbPersonnes_details').style.display='block';
	var nbPersonnes = document.getElementById('nbPersonnes_nb').value ;
	if ((nbPersonnes <= 2) || (nbPersonnes > 6)) {
	    document.getElementById('nbPersonnes_as').value= nbPersonnes;
	    document.getElementById('nbPersonnes_ans').value= 0;
	    document.getElementById('nbPersonnes_es').value= 0;
	    document.getElementById('nbPersonnes_ens').value= 0;
	}
	else if (nbPersonnes == 3) {
	    document.getElementById('nbPersonnes_as').value= 2;
	    document.getElementById('nbPersonnes_ans').value= 0;
	    document.getElementById('nbPersonnes_es').value= 0;
	    document.getElementById('nbPersonnes_ens').value= 1;
	    
	}
	else if (nbPersonnes == 4) {
	    document.getElementById('nbPersonnes_as').value= 2;
	    document.getElementById('nbPersonnes_ans').value= 0;
	    document.getElementById('nbPersonnes_es').value= 1;
	    document.getElementById('nbPersonnes_ens').value= 1;
	}
	else if (nbPersonnes == 5) {
	    document.getElementById('nbPersonnes_as').value= 2;
	    document.getElementById('nbPersonnes_ans').value= 0;
	    document.getElementById('nbPersonnes_es').value= 2;
	    document.getElementById('nbPersonnes_ens').value= 1;
	}
	else if (nbPersonnes == 6) {
	    document.getElementById('nbPersonnes_as').value= 3;
	    document.getElementById('nbPersonnes_ans').value= 1;
	    document.getElementById('nbPersonnes_es').value= 1;
	    document.getElementById('nbPersonnes_ens').value= 1;
	}
    });
    
    $('#nbPersonnes_as').on('change', function(){
	var as = document.getElementById('nbPersonnes_as').value;
	var ans= document.getElementById('nbPersonnes_ans').value;
	var es = document.getElementById('nbPersonnes_es').value;
	var ens= document.getElementById('nbPersonnes_ens').value;
	var nb = Number(as) + Number(ans) + Number(es) + Number(ens);
	document.getElementById('nbPersonnes_nb').value= nb;
    });
    $('#nbPersonnes_ans').on('change', function(){
	var as = document.getElementById('nbPersonnes_as').value;
	var ans= document.getElementById('nbPersonnes_ans').value;
	var es = document.getElementById('nbPersonnes_es').value;
	var ens= document.getElementById('nbPersonnes_ens').value;
	var nb = Number(as) + Number(ans) + Number(es) + Number(ens);
	document.getElementById('nbPersonnes_nb').value= nb;
    });
    $('#nbPersonnes_es').on('change', function(){
	var as = document.getElementById('nbPersonnes_as').value;
	var ans= document.getElementById('nbPersonnes_ans').value;
	var es = document.getElementById('nbPersonnes_es').value;
	var ens= document.getElementById('nbPersonnes_ens').value;
	var nb = Number(as) + Number(ans) + Number(es) + Number(ens);
	document.getElementById('nbPersonnes_nb').value= nb;
    });
    $('#nbPersonnes_ens').on('change', function(){
	var as = document.getElementById('nbPersonnes_as').value;
	var ans= document.getElementById('nbPersonnes_ans').value;
	var es = document.getElementById('nbPersonnes_es').value;
	var ens= document.getElementById('nbPersonnes_ens').value;
	var nb = Number(as) + Number(ans) + Number(es) + Number(ens);
	document.getElementById('nbPersonnes_nb').value= nb;
    });
});



/*
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
    var texteLibre = document.getElementById('search_type_texte_libre').value ;
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
	texteLibre : texteLibre,
	departSki : departSki, 
	dureeSejour : dureeSejour, 
	nbPersonne : nbPersonne, 
	nbPersonne_as : nbPersonne_as, 
	nbPersonne_ans : nbPersonne_ans, 
	nbPersonne_es : nbPersonne_es, 
	nbPersonne_ens : nbPersonne_ens };
//    alert(jsonTab.departSki);
    $.cookie.raw = true;
    $.cookie.json = true;  
    
    $.cookie('_vtrFormRech', jsonTab, {expires: 90}); // stocker Json : jsonTab  expire dans 90jours

}

//    document.getElementById(listeId).style.display = 'none';
//    document.getElementById('case_search_type_lieu').setAttribute('for', id);
//    document.getElementById('case_search_type_lieu').id = labId;
	
//    $('#tree1').empty();
//    $('#tree1').append(bloc);


// var  = document.getElementById('').value;
//    alert(document.getElementsByName('search_type[duree_sejour]').value);

*/
