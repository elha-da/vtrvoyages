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



/*    var pays = <?php echo json_encode($pays);?>;
    var zonegeo = new Array("<?php json_encode($zonegeo);?>") ;
    var ville = <?php echo json_encode($ville);?>;
*/
    var pays =  ["France", "Suisse"];
    var zonegeo = [] ;
    zonegeo["France"] = ["Alpes du Nord", "Alpes du sud"];
    zonegeo["Suisse"] = ["Ski à l'étranger"];
     var ville = [];
    ville["Alpes du Nord"] = ["Annecy", "Courchevel", "Chambéry"];
    ville["Alpes du sud"] = ["Briançon", "Sisteron", "Castellane"];
    
    function Choix(form) { 
	var val = $(this).attr("value"); 
	if ((val == '') || (val == null)) { 
	    return false; 
	} 
	switch (val) { 
	case 1 : var tab = zonegeo["France"]; 
	    break; 
	case 2 : var tab = zonegeo["Suisse"]; 
	    break;  
	}  
	for (var i=0; i<tab.lenght; i++) {  
	    $(this).options[i+1].value=value[i];
	    $(this).options[i+1].text=txt[i];
	} 
	val = null;
    } 
    



})
