$(document).ready(function() {
    var $pays = $('#search_type_pays');
    var $regions = $('#search_type_region');
    var $departements = $('#search_type_departement');
    var $villes = $('#search_type_ville');
    
    // chargement des régions
    $.ajax({
        url: 'php/lieu.php',
        data: 'go', // on envoie $_GET['go']
        dataType: 'json', // on veut un retour JSON
        success: function(json) {
            $.each(json, function(index, value) { // pour chaque noeud JSON
                // on ajoute l option dans la liste
                $pays.append('<option value="'+ index +'">'+ value +'</option>');
            });
        }
    });

    // à la sélection d un pays dans la liste
    $pays.on('change', function() {
        var val = $(this).val(); // on récupère la valeur du pays
	$( '#pays' ).addClass( "contenu_onglet" ); // on cache la div pays
	$( '#region' ).removeClass( "contenu_onglet"); // on affiche la div region
        if(val != '') {
            $regions.empty(); // on vide la liste des regions
            $regions.append('<option value="">Regions</option>');
            $.ajax({
                url: 'php/lieu.php',
                data: 'id_pays='+ val, // on envoie $_GET['id_pays']
                dataType: 'json',
                success: function(json) {
                    $.each(json, function(index, value) {
                        $regions.append('<option value="'+ index +'">'+ value +'</option>');
                    });
                }
            });
        }
    });
    
    // à la sélection d une région dans la liste
    $regions.on('change', function() {
        var val = $(this).val(); // on récupère la valeur de la région
	$( '#region' ).addClass( "contenu_onglet" ); // on cache la div region
	$( '#departement' ).removeClass( "contenu_onglet"); // on affiche la div departement
        if(val != '') {
            $departements.empty(); // on vide la liste des départements
            $departements.append('<option value="">Villes</option>');
            $.ajax({
                url: 'php/lieu.php',
                data: 'id_region='+ val, // on envoie $_GET['id_region']
                dataType: 'json',
                success: function(json) {
                    $.each(json, function(index, value) {
                        $departements.append('<option value="'+ index +'">'+ value +'</option>');
                    });
                }
            });
        }
    });
    // à la sélection d un département dans la liste
    $departements.on('change', function() {
        var val = $(this).val(); // on récupère la valeur du departement
	$( '#departement' ).addClass( "contenu_onglet" ); // on cache la div departement
	$( '#ville' ).removeClass("contenu_onglet"); // on affiche la div ville
        if(val != '') {
            $villes.empty(); // on vide la liste des villes
            $villes.append('<option value="">Villes</option>');
            $.ajax({
                url: 'php/lieu.php',
                data: 'id_departement='+ val, // on envoie $_GET['id_departement']
                dataType: 'json',
                success: function(json) {
                    $.each(json, function(index, value) {
                        $villes.append('<option value="'+ index +'">'+ value +'</option>');
                    });
                }
            });
        }
    });
    

});


    
