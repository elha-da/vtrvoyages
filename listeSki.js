$(document).ready(function() {
    var $choixSki = $('#choix_type_ski');
    var val = '';

    // chargement des pays
    if (val == '') {
	$choixSki.append('<option value="P">Pays</option>');
	$.ajax({
            url: 'php/lieu.php',
            data: 'go', // on envoie $_GET['go']
            dataType: 'json', // on veut un retour JSON
            success: function(json) {
		$.each(json, function(index, value) { // pour chaque noeud JSON
                    // on ajoute l option dans la liste
                    $choixSki.append('<option value="P'+ index +'">'+ value +'</option>');
		});
            }
	});
    }
    
    // à la sélection d un choix dans la liste
    $choixSki.on('change', function() {	
	var liste, valeur, valeurText;
	liste = document.getElementById("choix_type_ski"); // on récupère la valeur de l'attribut avec l id choix_type_ski
	valeurText = liste.options[liste.selectedIndex].text; // on récupère le texte de l'attribut
        val =  $(this).val();// on récupère la value de l option et stock dans la variable val
	valeur = val.substring(1); // on supprime le 1er caractère de value
	$('#choix_type_ski option').remove(); // on supprime les options de la liste 
	
	// si val est vide on affiche tous les pays
	if (val == '') {
	    $('#choix_type_ski_recup').empty(); // on vide la div de stockage des sélections
	    $choixSki.append('<option value="P" selected >Pays</option>'); // on ajoute l option dans la liste
	    $.ajax({
		url: 'php/lieu.php', // fichier au quel la demande est envoyée
		data: 'go', // on envoie $_GET['go']
		dataType: 'json', // on veut un retour JSON
		success: function(json) {
		    $.each(json, function(index, value) { // pour chaque noeud JSON
			// on ajoute l option dans la liste
			$choixSki.append('<option value="P'+ index +'">'+ value +'</option>');
		    });
		}
	    });
	}
	
	// sinon si val n est pas vide et que le 1er caractère de val égal à P 
	// on affiche la liste des régions du pays sélectionné
	else if ((val != '' ) && (val.substring(0, 1) == "P")) {
	    $('#region_choix, #departement_choix, #ville_choix').remove(); // on supprime les attributs avec l id
	    var choixPays = '<option id="pays_choix" value="" class="option_select">'+ valeurText +'</option>' ;
  	    $('#choix_type_ski_recup').append(choixPays);
	    $choixSki.append(choixPays);
	    $choixSki.append('<option value="R" selected >Régions</option>');

	    $.ajax({
                url: 'php/lieu.php',
                data: 'id_pays='+ valeur, // on envoie $_GET['id_pays']
                dataType: 'json',
                success: function(json) {		   
                    $.each(json, function(index, value) {
			$choixSki.append('<option value="R'+ index +'">- '+ value +'</option>');
                    });
                }
	    });
	    
	} 
	
	else if (val.substring(0, 1) == "R") {
	    $('#region_choix, #departement_choix, #ville_choix').remove();
	    var les_choix = document.getElementById("choix_type_ski_recup").innerHTML;
	    //alert(pays_choisi);
	    $choixSki.append(les_choix);

	    var choixRegion = '<option id="region_choix" value="'+ val +'" class="option_select">'+ valeurText +'</option>' ;
  	    $('#choix_type_ski_recup').append(choixRegion);
	    $choixSki.append(choixRegion);

	    $choixSki.append('<option value="D" selected >-- Départements </option>');
            $.ajax({
		url: 'php/lieu.php',
		data: 'id_region='+ valeur, // on envoie $_GET['id_region']
		dataType: 'json',
		success: function(json) {
		    $.each(json, function(index, value) {
			$choixSki.append('<option value="D'+ index +'">-- '+ value +'</option>');
		    });
		}
            });
	    
        }

	else if (val.substring(0, 1) == "D") {
	    $('#departement_choix, #ville_choix').remove();
	    var les_choix = document.getElementById("choix_type_ski_recup").innerHTML;
	    $choixSki.append(les_choix);

	    var choixDepartement = '<option id="departement_choix" value="'+ val +'" class="option_select">'+ valeurText +'</option>' ;
	    $('#choix_type_ski_recup').append(choixDepartement);
	    $choixSki.append(choixDepartement);
	    
            $choixSki.append('<option value="V" selected >--- Villes</option>');
            $.ajax({
		url: 'php/lieu.php',
		data: 'id_departement='+ valeur, // on envoie $_GET['id_departement']
		dataType: 'json',
		success: function(json) {
		    $.each(json, function(index, value) {
			$choixSki.append('<option value="V'+ index +'">--- '+ value +'</option>');
		    });
		}
            });
	    
        }

	else if (val.substring(0, 1) == "V") {
	    $('#ville_choix').remove();
	    var les_choix = document.getElementById("choix_type_ski_recup").innerHTML;
	    $choixSki.append(les_choix);
	    
	    var choixVille = '<option id="ville_choix" value="'+ val +'" selected>'+ valeurText +'</option>' ;
	    $('#choix_type_ski_recup').append(choixVille);
	    $choixSki.append(choixVille);
	}
	
	

    });

    /*
     * ajout de 8 jours avant et après la date de départ
     */
    
    $('input[title="Date flexible"]').click(function(){
	var date_select = document.getElementById('search_type_date_depart_ski').value ;
	
        if($(this).prop("checked") == true){
	    var tabDate = date_select.split('/');
	    var dateMax = new Date(tabDate[2], tabDate[1]-1, +tabDate[0]+8);
	    var dateMin = new Date(tabDate[2], tabDate[1]-1, +tabDate[0]-8);
	    function pad(n) {
		return n < 10 ? "0"+n : n;
	    }
	    alert (pad(dateMax.getDate())+"/"+pad(dateMax.getMonth()+1)+"/"+dateMax.getFullYear());
	    alert (pad(dateMin.getDate())+"/"+pad(dateMin.getMonth()+1)+"/"+dateMin.getFullYear());
	    
        }
        else if($(this).prop("checked") == false){
	    alert(date_select);
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
});
