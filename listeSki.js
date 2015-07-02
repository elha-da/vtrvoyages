$(document).ready(function() {
    var $choixSki = $('#choix_type_ski');
    var val = '';

    // chargement des pays
    if (val == '') {
	$choixSki.append('<option value="">Pays</option>');
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
	    $choixSki.append('<option value="">Pays</option>');
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
	    var choixPays = '<option value="">Pays</option><option value="'+ val +'"selected="selected" >'+ valeurText +'</option>' ;
  	    $choixSki.append(choixPays);
	    $choixSki.append('<option value="">Regions</option>');

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
	    var choixRegion = '<option value="">Regions</option><option value="'+ val +'"selected="selected" >'+ valeurText +'</option>' ;
	    $choixSki.append(choixPays);
	    $choixSki.html(choixRegion);
	    
            $choixSki.append('<option value="">Départements</option>');
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
	    var choixDepartement = '<option value="">Départements</option><option value="'+ val +'"selected="selected" >'+ valeurText +'</option>' ;
	    $choixSki.html(choixDepartement);
	    
            $choixSki.append('<option value="">Villes</option>');
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
	    var choixVille = '<option value="'+ val +'"selected="selected">'+ valeurText +'</option>' ;
	    $choixSki.append(choixVille);
	}
	
	

    });
});
