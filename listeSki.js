$(document).ready(function() {
    var $pays = $('#search_type_pays_ski');
    var $regions = $('#search_type_region_ski');
    var $departements = $('#search_type_departement_ski');
    var $villes = $('#search_type_ville_ski');
    var val = '';
    // chargement des pays
    if(val == '') {
	$.ajax({
            url: 'php/lieu.php',
            data: 'go', // on envoie $_GET['go']
            dataType: 'json', // on veut un retour JSON
            success: function(json) {
		$.each(json, function(index, value) { // pour chaque noeud JSON
                    // on ajoute l option dans la liste
                    $pays.append('<option value="P'+ index +'">'+ value +'</option>');
		});
            }
	});
    }
    
    // à la sélection d un pays dans la liste
    $pays.on('change', function() {	
	var liste, valeur;
	liste = document.getElementById("search_type_pays_ski");
	valeurText = liste.options[liste.selectedIndex].text;
        val = $(this).val(); // on récupère la valeur du pays
	$( '#pays_ski' ).addClass( "contenu_onglet" );
	$( '#region_ski' ).removeClass( "contenu_onglet" );
	if((val != '') && (val.substring(0, 1) == "P") ) {
	    $('#choix_type_ski').append('<option value="'+ val +'">'+ valeurText +'</option>');
	    var valeur = val.substring(1);
	    $regions.empty(); // on vide la liste des regions
	    $regions.append('<option value="">Regions</option>');

	    $.ajax({
                url: 'php/lieu.php',
                data: 'id_pays='+ valeur, // on envoie $_GET['id_pays']
                dataType: 'json',
                success: function(json) {		   
                    $.each(json, function(index, value) {
			$regions.append('<option value="R'+ index +'">-'+ value +'</option>');
                    });
                }
	    });
	} 
    });
    
    // à la sélection d une région dans la liste
    $regions.on('change', function() {
	var liste, valeur;
	liste = document.getElementById("search_type_region_ski");
	valeurText = liste.options[liste.selectedIndex].text; // on récupère le text de l'option choisie

        val = $(this).val(); // on récupère la valeur de la région
	$( '#region_ski' ).addClass( "contenu_onglet" );
	$( '#departement_ski' ).removeClass( "contenu_onglet" );
        if((val != '') && (val.substring(0, 1) == "R") ) {
	    $('#choix_type_ski').append('<option value="R'+ val +'">'+ valeurText +'</option>');
	    var valeur = val.substring(1);
            $departements.empty(); // on vide la liste des départements
            $departements.append('<option value="">Départements</option>');
            $.ajax({
                url: 'php/lieu.php',
                data: 'id_region='+ valeur, // on envoie $_GET['id_region']
                dataType: 'json',
                success: function(json) {
                    $.each(json, function(index, value) {
                        $departements.append('<option value="D'+ index +'">--'+ value +'</option>');
                    });
                }
            });
        }
    });
    // à la sélection d un département dans la liste
    $departements.on('change', function() {
	var liste, valeur;
	liste = document.getElementById("search_type_departement_ski");
	valeurText = liste.options[liste.selectedIndex].text;
        val = $(this).val(); // on récupère la valeur du departement
	$( '#departement_ski' ).addClass( "contenu_onglet" );
	$( '#ville_ski' ).removeClass( "contenu_onglet" );
        if((val != '') && (val.substring(0, 1) == "D") ) {
	    $('#choix_type_ski').append('<option value="'+ val +'">'+ valeurText +'</option>');
	    ///$('#choix_ski').append('<p id="index_choix_departement" value="'+val+'"> Département : '+ valeurText +'</p>');
	    var valeur = val.substring(1);
            $villes.empty(); // on vide la liste des villes
            $villes.append('<option value="">Villes</option>');
            $.ajax({
                url: 'php/lieu.php',
                data: 'id_departement='+ valeur, // on envoie $_GET['id_departement']
                dataType: 'json',
                success: function(json) {
                    $.each(json, function(index, value) {
                        $villes.append('<option value="'+ index +'">---'+ value +'</option>');
                    });
                }
            });
        }
    });
    

});
