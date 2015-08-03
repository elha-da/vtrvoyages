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
    var choixSki = $('#choix_type_ski');
    var val = '';
    
    function afficher() {
	$('#fil_ariane').append('<a><li id="fil_ariane_pays" value="" >France</li>(modifier)</a>');
    }
    afficher() ;
    
    // à la sélection d un choix dans la liste

    /*
     * gestion du fil d'ariane pour le retour en arrière !
     */
    $('#fil_ariane a li').click(function() {
	
	var val = $(this).attr("value") ;
	alert (val) ;
	var text = $(this).text() ;
	var valeur = '<option id="retour" value="'+ val +'">'+ text +'</option>' ;
	//alert (text) ;
	$('#choix_type_ski').append(valeur);	    
	document.getElementById('retour').selected = "true";
	resultat = true ;
	if (resultat) {
	    $('#choix_type_ski').trigger('change');
	    $('#retour').remove();
	    resultat = false ;
	}
    });

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



