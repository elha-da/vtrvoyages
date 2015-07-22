$(document).ready(function() {
    var $choixSki = $('#choix_type_ski');
    var val = '';
    
    function afficher() {
	$.get("php/zoneGeo.php", function(data){
	    $choixSki.html(data) ;
        });
	$('#fil_ariane').append('<a><li id="fil_ariane_pays" value="" >France</li></a>');
    }
    afficher() ;

   
    // à la sélection d un choix dans la liste
    $choixSki.on('change', function() {	
	var liste, valeur, valeurText;
	liste = document.getElementById("choix_type_ski"); // on récupère la valeur de l'attribut avec l id choix_type_ski
	valeurText = liste.options[liste.selectedIndex].text; // on récupère le texte de l'attribut
	
        val =  $(this).val();// on récupère la value de l option et stock dans la variable val
	//alert (val);
	valeur = val.substring(1); // on supprime le 1er caractère de value
	$('#choix_type_ski option').remove(); // on supprime les options de la liste 
	
	// si val est vide on affiche tous les pays
	if (val == '' || val == 0 || val == '0' || val == null || val == undefined) {
	    $('#choix_type_ski_recup').empty(); // on vide la div de stockage des sélections
	    $('#fil_ariane').empty(); // on vide la ul du fil d ariane
	    $choixSki.append('<option value="" selected >Pays</option>'); // on ajoute l option dans la liste
	    $.ajax({
		url: 'php/lieu-ski.php', // fichier au quel la demande est envoyée
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
	    $('#zonegeo_choix, #ville_choix').remove(); // on supprime les attributs avec l id
	    $('#fil_ariane_zonegeo, #fil_ariane_pays, #retour').remove();
	    
  	    $('#fil_ariane').append('<a><li id="fil_ariane_pays" value="" >'+ valeurText +'</li></a>');
	    $('#choix_type_ski_recup').append('<option id="pays_choix" class="option_select"  value="" >'+ valeurText+'</option>');
	    $choixSki.append('<option id="pays_choix" class="option_select" class="option_select"  value="" >'+ valeurText+'</option>');	    
	    $choixSki.append('<option value="Z" selected >Zone géographique</option>');

	    $.ajax({
                url: 'php/lieu-ski.php',
                data: 'id_pays='+ valeur, // on envoie $_GET['id_pays']
                dataType: 'json',
                success: function(json) {		   
                    $.each(json, function(index, value) {
			$choixSki.append('<option value="Z'+ index +'">- '+ value +'</option>');
                    });
                }
	    });
	    
	} 
	
	else if (val.substring(0, 1) == "Z") {
	    $('#zonegeo_choix, #ville_choix').remove();
	    $('#fil_ariane_zonegeo, #retour').remove();
	    var les_choix = document.getElementById("choix_type_ski_recup").innerHTML;
	    //alert(pays_choisi);
	    $choixSki.append(les_choix);

	    $('#fil_ariane').append('<a><li id="fil_ariane_zonegeo" value="'+ val +'" >'+ valeurText+'</li></a>');
  	    $('#choix_type_ski_recup').append('<option id="zonegeo_choix" class="option_select" value="'+ val +'" >'+ valeurText+'</option>');
	    $choixSki.append('<option id="zonegeo_choix" class="option_select"  value="'+ val +'" >'+ valeurText+'</option>');

	    $choixSki.append('<option value="V" selected >Ville/Station </option>');
            $.ajax({
		url: 'php/lieu-ski.php',
		data: 'id_zonegeo='+ valeur, // on envoie $_GET['id_zonegeo']
		dataType: 'json',
		success: function(json) {
		    $.each(json, function(index, value) {
			$choixSki.append('<option value="V'+ index +'">-- '+ value +'</option>');
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
     * ajout de 8 jours avant et après la date de départ
     */

/*    
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
*/


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
	var nb = as + ans + es + ens;
	document.getElementById('nbPersonnes_nb').value= nb;
	
    });	

});

