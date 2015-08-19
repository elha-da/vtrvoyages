(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    /*
     *    Complex Method
     */
    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        cookies = document.cookie ? document.cookie.split('; ') : [],
        i = 0,
        l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
            name = decode(parts.shift()),
            cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    /* ******************************************************************* */
    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

function change_onglet(name) {
    if (name == 'ski')
	document.getElementById('onglet_'+ancien_onglet).className = 'onglet_0 onglet';
    else 
	document.getElementById('onglet_'+ancien_onglet).className = 'onglet_2 onglet';
    document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
    document.getElementById('contenu_onglet_'+ancien_onglet).style.display = 'none';
    document.getElementById('contenu_onglet_'+name).style.display = 'block';
    ancien_onglet = name;
}

var ancien_onglet = 'ski';
change_onglet(ancien_onglet);

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
/*
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
*/

jQuery(document).ready(function($){

    var cookieRecup = $.cookie('_vtrFormRech'); // récupère le tableau Json du cookie
    //    var cookieFavList = {{"id":"12", "date": "12-12-2015"}, {"id":"25", "date": "25-02-2016"}};//$.cookie('_vtrFavList'); // récupère le tableau Json du cookie

    if (cookieRecup != null) {
	var cookieObjet = JSON.parse(cookieRecup); 
	//    document.write(cookieObjet.departSki + ", nbPersonne :" + cookieObjet.nbPersonne);
	
	document.getElementById('search_type_texte_libre').value = cookieObjet.texteLibre;
	document.getElementById('search_type_date_depart_ski').value = cookieObjet.departSki;

	choix(cookieObjet.lieu_id, cookieObjet.lieu_val);

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
	    var node = document.getElementById('sejour_resultat_'+ident);
	    if(node) {
		node.style.borderColor = "red";
		node.style.borderWidth = "initial";
		node.style.borderStyle = "solid";
		document.getElementById('liste_ajout_fav_'+ident).style.display = "none";
		document.getElementById('liste_supp_fav_'+ident).style.display = "block";
	    }
	}	
    }
    
    compteurFavList();
    
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

// Au clique sur le coeur on charge les séjours de la liste des favoris
$('a.poplight[href^=#]').click(function() {
    
    $('#contenu_favList').load('/app_test.php/recherche-ski?favList=1'); 

    return false;
});



var choix_precedent_id = null;
var choix_id = null;

function choix(choixId, choixVal) {
    if(choixId && document.getElementById('case_'+choixId)) {
	var textBloc = document.getElementById('case_'+choixId).textContent;
	document.getElementById('search_type_lieu').value = choixVal ;
	document.getElementById('search_type_nomLieu').value = textBloc ;
	document.getElementById('search_type_lieu_choisi').value = choixVal ;
	document.getElementById('case_search_type_lieu').textContent = textBloc ;
	document.getElementById('case_search_type_lieu').className = 'simulation-champ-text';
	document.getElementById('case_search_type_lieu').style.backgroundColor = 'rgb(2, 156, 225)';
	document.getElementById('case_search_type_lieu').style.color = '#fff';
	
	if(choix_precedent_id != null) { // On remet les couleurs de base sur l'ancienne sélection
	    document.getElementById(choix_precedent_id).style.backgroundColor = null;
	    document.getElementById(choix_precedent_id).style.color = "#333";
	}
	choix_precedent_id = 'case_' + choixId;
	choix_id = choixId;
	// On cache si c'est une station = choix effectué
	if(choixVal && choixVal.substring(0,2) == 'v=') {
	    document.getElementById('search_type_lieu').checked = false;
	    if (window.matchMedia("(max-width: 767px)").matches) {
		window.scrollTo(0,0); // pour qu'après la selection l'écran remonte en haut pour l'écran mobile
	    }
	    /*
	      else if (window.matchMedia("(min-width: 767px)").matches) {
	      window.scrollTo(400,0); // pour qu'après la selection l'écran remonte en haut pour les autres écrans (400 pour le slider)
	      }
	    */
	}
    }
}

function form_rech_raz() {
    document.getElementById('case_search_type_lieu').textContent = 'Veuillez choisir un lieu' ;
    document.getElementById('case_search_type_lieu').className = 'btn';
    document.getElementById('case_search_type_lieu').style.backgroundColor = '';
    document.getElementById('case_search_type_lieu').style.color = '#333';
    
    document.getElementById('search_type_nomLieu').value = null;

    document.getElementById('search_type_lieu_choisi').value = null;

    document.getElementById('search_type_lieu').value = null;
    choix_id = null;
}

function cookieFormulaireRecherche() {

    var texteLibre = document.getElementById('search_type_texte_libre').value ;

    if (document.getElementById('search_type_nomLieu').value != '')
	var nomLieu = document.getElementById('search_type_nomLieu').value ;
    else var nomLieu = null;

    if (document.getElementById('search_type_lieu_choisi').value != '')
	var lieu_val = document.getElementById('search_type_lieu_choisi').value ;
    else var lieu_val = null;

    if (choix_id != '')
	var lieu_id = choix_id ;
    else var lieu_id = null;
    
    if (document.getElementById('search_type_lieu').value != '')
	var lieu = document.getElementById('search_type_lieu').value ;
    else var lieu = null;
    document.getElementById('search_type_nomLieu').value = document.getElementById('case_search_type_lieu').textContent;

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
	lieu_id : lieu_id,
	lieu_val : lieu_val,
	nomLieu : nomLieu,
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
    var id = id.substring(16);
    var date = document.getElementById('in_fav_liste_'+id).value;
    var nbPersonne = document.getElementById('nbPersonnes_nb').value;
    var nbPersonne_as = document.getElementById('nbPersonnes_as').value;
    var nbPersonne_ans = document.getElementById('nbPersonnes_ans').value;
    var nbPersonne_es = document.getElementById('nbPersonnes_es').value;
    var nbPersonne_ens = document.getElementById('nbPersonnes_ens').value;

    var objTabs = {};
    var cookieFavRecup = $.cookie('_vtrFavList');
    if (cookieFavRecup != null)
	objTabs = JSON.parse(cookieFavRecup); 
    objTabs[id] = {id : id, date: date, nb: nbPersonne, as: nbPersonne_as, ans: nbPersonne_ans, es: nbPersonne_es, ens: nbPersonne_ens};

    $.cookie.raw = true;
    $.cookie.json = true; 
    $.cookie('_vtrFavList', objTabs, {expires: 90});

    var node = document.getElementById('sejour_resultat_'+id);	
    node.style.borderColor = "red";
    node.style.borderWidth = "initial";
    node.style.borderStyle = "solid";
    document.getElementById('liste_ajout_fav_'+id).style.display = "none";
    document.getElementById('liste_supp_fav_'+id).style.display = "block";

    compteurFavList();
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

    var node = document.getElementById('sejour_resultat_'+id);	
    node.style.borderColor = "";
    node.style.borderWidth = "";
    node.style.borderStyle = "";
    document.getElementById('liste_ajout_fav_'+id).style.display = "block";
    document.getElementById('liste_supp_fav_'+id).style.display = "none";

    compteurFavList();
}

function compteurFavList() {
    var a = 0;
    var b = $.cookie("_vtrFavList");
    if ((b != null) || (b != {})) {
        objTabs = JSON.parse(b);
        for (var c in objTabs) {
            a++;
        }
    }
    if(document.getElementById("circle"))
	document.getElementById("circle").textContent = a;
    if(document.getElementById("coups_coeur")) {
	if (a != 0) {
	    document.getElementById("coups_coeur").style.display = "block";
	}
	else {
	    document.getElementById("coups_coeur").style.display = "none";
	}
    }
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
	document.getElementById(this.id).style.backgroundColor = "#029ce1";
	document.getElementById(this.id).style.color = "#fff";
    })
    .mouseout(function() {
	if(choix_precedent_id != this.id) {
	    //alert(choix_precedent_id + ' - ' + this.id);
	    document.getElementById(this.id).style.backgroundColor = null;
	    document.getElementById(this.id).style.color = "#333";
	}
    });


$('#popup_favList').load('http://www.vtr-voyages.fr:8080/app_test.php/recherche-ski?favList=1');

