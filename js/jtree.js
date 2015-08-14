window.onload = function() { 
    var cookieRecup = $.cookie('_vtrFormRech'); // récupère le tableau Json du cookie
//    var cookieFavList = {{"id":"12", "date": "12-12-2015"}, {"id":"25", "date": "25-02-2016"}};//$.cookie('_vtrFavList'); // récupère le tableau Json du cookie

//    alert(cookieRecup);
    if (cookieRecup != null) {
	var cookieObjet = JSON.parse(cookieRecup); 
	//    document.write(cookieObjet.departSki + ", nbPersonne :" + cookieObjet.nbPersonne);
	
	document.getElementById('search_type_texte_libre').value = cookieObjet.texteLibre;
/*
	if (cookieObjet.lieu != null){
	    document.getElementById('case_search_type_lieu').textContent = cookieObjet.lieu;
	    document.getElementById('case_search_type_lieu').className = 'simulation-champ-text';
	} else
	    document.getElementById('case_search_type_lieu').textContent = "Veuillez choisir un lieu";
*/
	document.getElementById('search_type_date_depart_ski').value = cookieObjet.departSki;
	document.getElementById('nbPersonnes_nb').value = cookieObjet.nbPersonne;
	document.getElementById('nbPersonnes_as').value = cookieObjet.nbPersonne_as;
	document.getElementById('nbPersonnes_ans').value = cookieObjet.nbPersonne_ans;
	document.getElementById('nbPersonnes_es').value = cookieObjet.nbPersonne_es;
	document.getElementById('nbPersonnes_ens').value = cookieObjet.nbPersonne_ens;
	
	if (cookieObjet.dateFlexible != null) {
	    document.getElementById('search_type_date_flexible_ski').checked = true;
	} else {
	    document.getElementById('search_type_date_flexible_ski').checked = false;
	}

	if (cookieObjet.dureeSejour == 7) 
	    document.getElementById('semaine').checked = true;
	else 
	    document.getElementById('weekEnd').checked = true;
	if (cookieObjet.forfait != null) {
	    document.getElementById('search_type_rem_meca').checked = true;
	} 

	if (cookieObjet.materiel != null) {
	    document.getElementById('search_type_materiel').checked = true;
	} 
   
	if (cookieObjet.foodpack != null) {
	    document.getElementById('search_type_foodpack').checked = true;
	}

	if (cookieObjet.courSki != null) {
	    document.getElementById('search_type_cours_ski').checked = true;
	} 

    }

    var cookieFavRecup = $.cookie('_vtrFavList');
    if (cookieFavRecup != null) {
	objTabs = JSON.parse(cookieFavRecup);
	for (var tab in objTabs) { 
	    var ident = objTabs[tab]["id"];

	    document.getElementById('liste_ajout_fav_'+ident).style.display = "none";
	    document.getElementById('liste_supp_fav_'+ident).style.display = "block";
	}	
    }
    

};


function choix(choixId, choixVal) {

    var valeur = choixVal ;
    var id = choixId;
    var listeId = 'search_type_'+id ;
    var labId = 'case_'+id ;
    var textBloc = document.getElementById(labId).textContent;
    
    document.getElementById('search_type_lieu').value = valeur ;
    document.getElementById('search_type_lieu_choisi').value = valeur ;
    document.getElementById('case_search_type_lieu').textContent = textBloc ;
    document.getElementById('case_search_type_lieu').className = 'simulation-champ-text';

}



function cookieFormulaireRecherche() {

    var texteLibre = document.getElementById('search_type_texte_libre').value ;

    if (document.getElementById('search_type_lieu').value != '')
	var lieu = document.getElementById('case_search_type_lieu').textContent ;
    else lieu = null;

    var departSki = document.getElementById('search_type_date_depart_ski').value;
    if (document.getElementById('search_type_date_flexible_ski').checked) {
	var dateFlexible = document.getElementById('search_type_date_flexible_ski').value;
    } else { 
	var dateFlexible = null ;
    }

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
    if(document.getElementById('search_type_foodpack').checked) {
	var foodpack = document.getElementById('search_type_foodpack').value;
    } else { 
	var foodpack = null ;
    } 
    if(document.getElementById('search_type_cours_ski').checked) {
	var courSki = document.getElementById('search_type_cours_ski').value;
    } else { 
	var courSki = null ;
    }

 
    var jsonTab = {
	texteLibre : texteLibre,
	lieu : lieu,
	departSki : departSki,
	dateFlexible : dateFlexible,
	dureeSejour : dureeSejour, 
	nbPersonne : nbPersonne, 
	nbPersonne_as : nbPersonne_as, 
	nbPersonne_ans : nbPersonne_ans, 
	nbPersonne_es : nbPersonne_es, 
	nbPersonne_ens : nbPersonne_ens,
	forfait : forfait,
	materiel : materiel,
	foodpack : foodpack,
	courSki : courSki };

    $.cookie.raw = true;
    $.cookie.json = true;  
    
    $.cookie('_vtrFormRech', jsonTab, {expires: 90}); // stocker Json : jsonTab  expire dans 90jours

}

function ajoutCookieFavList(id) {
    id = id.substring(16);
    var date = document.getElementById('in_fav_liste_'+id).value;

    var objTabs = {};
    var cookieFavRecup = $.cookie('_vtrFavList');
    if (cookieFavRecup != null)
	objTabs = JSON.parse(cookieFavRecup); 
    objTabs[id] = {id : id, date: date};

    $.cookie.raw = true;
    $.cookie.json = true; 
    $.cookie('_vtrFavList', objTabs, {expires: 90});

    document.getElementById('liste_ajout_fav_'+id).style.display = "none";
    document.getElementById('liste_supp_fav_'+id).style.display = "block";
}

function suppCookieFavList(id) {
    id = id.substring(15);

    var cookieFavRecup = $.cookie('_vtrFavList');
    if (cookieFavRecup != null)
	objTabs = JSON.parse(cookieFavRecup); 

    delete objTabs[id];
    
    $.cookie.raw = true;
    $.cookie.json = true; 
    $.cookie('_vtrFavList', objTabs, {expires: 90});

    document.getElementById('liste_ajout_fav_'+id).style.display = "block";
    document.getElementById('liste_supp_fav_'+id).style.display = "none";
}

/* la liste des lieux cachée au mouse out   */
$('#search_type_liste')
    .mouseover(function() {
	document.getElementById('search_type_lieu').checked = true;
    })
    .mouseout(function() {
	document.getElementById('search_type_lieu').checked = false;
    });

/* l'effet au survole d'un élément de la liste des lieux */
$('#search_type_liste label')
    .mouseover(function() {
	document.getElementById(this.id).style.backgroundColor = "#93be1c";
	document.getElementById(this.id).style.color = "#fff";
    })
    .mouseout(function() {
		if(choix_precedent_id != this.id) {
			//alert(choix_precedent_id + ' - ' + this.id);
			document.getElementById(this.id).style.backgroundColor = null;
			document.getElementById(this.id).style.color = "#333";
		}
   });
