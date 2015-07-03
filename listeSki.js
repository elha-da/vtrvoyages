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
	//$choixSki.append('</optgroup>');
    }
    
    // à la sélection d un pays dans la liste
    $choixSki.on('change', function() {	
	var liste, valeur, valeurText;
	liste = document.getElementById("choix_type_ski");
	valeurText = liste.options[liste.selectedIndex].text;
        val =  $(this).val();// on récupère la valeur du pays
	valeur = val.substring(1);
	//$choixSki.empty(); // on vide la liste
	$('#choix_type_ski option').remove();
	var choixPays = choixPays ;

	if (val == '') {
	    $('#choix_type_ski_recup').empty();
	    $choixSki.append('<option value="P" selected >Pays</option>');
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
	
	else if ((val != '' ) && (val.substring(0, 1) == "P")) {
	    $('#region_choix, #departement_choix, #ville_choix').remove();
	    var choixPays = '<option id="pays_choix" value="" class="option_select">'+ valeurText +'</option>' ;
  	    $('#choix_type_ski_recup').append(choixPays);
	    $choixSki.append(choixPays);
	    $choixSki.append('<option value="R" selected >Regions</option>');

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
	    
	    var choixVille = '<option id="ville_choix" value="'+ val +'">'+ valeurText +'</option>' ;
	    $('#choix_type_ski_recup').append(choixVille);
	    $choixSki.append(choixVille);
	}
	
	

    });
});
