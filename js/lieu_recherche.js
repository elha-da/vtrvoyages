jQuery(document).ready(function($){
    var choixSki = $('#choix_type_ski');
    var val = '';
    
    function afficher() {
	$('#fil_ariane').append('<a><li id="fil_ariane_pays" value="" >France</li> (modifier)</a>');
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

// Fonction pour créer et mettre à jour le cookie

function setCookie = function(sNom,sValeur) {
    
    var sDate = new Date(); // date et heure courante
    var sExpires = sDate.getDate()+90; // expiration du cookie 90 jours
    var sCookie = encodeURIComponent(sNom) + '=' + encodeURIComponent(sValeur) + '§expires=' + sExpires + '§path=/';
    document.cookie= sCookie;
}

// Fonction pour lire le cookie

function getCookie = function(sNom) {
    sNom = sNom.toLowerCase();
    var oCrumbles = document.cookie.split('§');
    for(var i=0; i<oCrumbles.length;i++) {
        var oPair= oCrumbles[i].split('=');
        var sKey = decodeURIComponent(oPair[0].trim().toLowerCase());
        var sValeur = oPair.length>1?oPair[1]:'';
        if(sKey == sNom)
            return decodeURIComponent(sValeur);
    }
    return '';
}
