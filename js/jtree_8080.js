window.onload = function() {

    var e = $.cookie("_vtrFormRech");
    if (e != null) {
        var a = JSON.parse(e);
        document.getElementById("search_type_texte_libre").value = a.texteLibre;
        document.getElementById("search_type_date_depart_ski").value = a.departSki;
        document.getElementById("nbPersonnes_nb").value = a.nbPersonne;
        document.getElementById("nbPersonnes_as").value = a.nbPersonne_as;
        document.getElementById("nbPersonnes_ans").value = a.nbPersonne_ans;
        document.getElementById("nbPersonnes_es").value = a.nbPersonne_es;
        document.getElementById("nbPersonnes_ens").value = a.nbPersonne_ens;
        if (a.dateFlexible != null) {
            document.getElementById("search_type_date_flexible_ski").checked = true
        } else {
            document.getElementById("search_type_date_flexible_ski").checked = false
        }
        if (a.dureeSejour == 7) {
            document.getElementById("semaine").checked = true
        } else {
            document.getElementById("weekEnd").checked = true
        }
        if (a.forfait != null) {
            document.getElementById("search_type_rem_meca").checked = true
        }
        if (a.materiel != null) {
            document.getElementById("search_type_materiel").checked = true
        }
        if (a.foodpack != null) {
            document.getElementById("search_type_foodpack").checked = true
        }
        if (a.courSki != null) {
            document.getElementById("search_type_cours_ski").checked = true
        }
    }

    var b = $.cookie("_vtrFavList");
    if (b != null) {
        objTabs = JSON.parse(b);
        for (var c in objTabs) {
            var d = objTabs[c]["id"];
            document.getElementById("liste_ajout_fav_" + d).style.display = "none";
            document.getElementById("liste_supp_fav_" + d).style.display = "block";
        }
    }
    compteurFavList();
    
};
/*
var choix_precedent_id = null;
function choix(c, b) {
    var a = document.getElementById("case_" + c).textContent;
    document.getElementById("search_type_lieu").value = b;
    document.getElementById("search_type_lieu_choisi").value = b;
    document.getElementById("case_search_type_lieu").textContent = a;
    document.getElementById("case_search_type_lieu").className = "simulation-champ-text";
    if (choix_precedent_id != null) {
        document.getElementById(choix_precedent_id).style.backgroundColor = null;
        document.getElementById(choix_precedent_id).style.color = "#333"
    }
    choix_precedent_id = "case_" + c;
    if (b.substring(0, 2) == "v=") {
        document.getElementById("search_type_lieu").checked = false
    }
}
*/

function choix(c, b) {
    var a = document.getElementById("case_"+c).textContent;
    if (b.substring(0, 2) != "zd") {
	document.getElementById("search_type_lieu").value = b ;
	document.getElementById("search_type_lieu_choisi").value = b ;
	document.getElementById("case_search_type_lieu").textContent = a ;
	document.getElementById("case_search_type_lieu").className = "simulation-champ-text";
    }
    if (b.substring(0, 1) == "v") {
        document.getElementById("search_type_lieu").checked = false;
	if (window.matchMedia("(max-width: 767px)").matches) {
	    window.scrollTo(0,0); // pour qu'après la selection l'écran remonte en haut pour l'écran mobile
	}
	else if (window.matchMedia("(min-width: 767px)").matches) {
	    window.scrollTo(400,0); // pour qu'après la selection l'écran remonte en haut pour les autres écrans (400 pour le slider)
	}
    }
    
}

function cookieFormulaireRecherche() {
    var a = document.getElementById("search_type_texte_libre").value;
    if (document.getElementById("search_type_lieu").value != "") {
        var m = document.getElementById("case_search_type_lieu").textContent
    } else {
        var m = null
    }
    var p = document.getElementById("search_type_date_depart_ski").value;
    if (document.getElementById("search_type_date_flexible_ski").checked) {
        var d = document.getElementById("search_type_date_flexible_ski").value
    } else {
        var d = null
    }
    if (document.getElementById("weekEnd").checked) {
        var k = document.getElementById("weekEnd").value
    } else {
        var k = document.getElementById("semaine").value
    }
    var h = document.getElementById("nbPersonnes_nb").value;
    var n = document.getElementById("nbPersonnes_as").value;
    var l = document.getElementById("nbPersonnes_ans").value;
    var g = document.getElementById("nbPersonnes_es").value;
    var f = document.getElementById("nbPersonnes_ens").value;
    if (document.getElementById("search_type_rem_meca").checked) {
        var j = document.getElementById("search_type_rem_meca").value
    } else {
        var j = null
    }
    if (document.getElementById("search_type_materiel").checked) {
        var e = document.getElementById("search_type_materiel").value
    } else {
        var e = null
    }
    if (document.getElementById("search_type_foodpack").checked) {
        var c = document.getElementById("search_type_foodpack").value
    } else {
        var c = null
    }
    if (document.getElementById("search_type_cours_ski").checked) {
        var b = document.getElementById("search_type_cours_ski").value
    } else {
        var b = null
    }
    var o = {texteLibre: a,lieu: m,departSki: p,dateFlexible: d,dureeSejour: k,nbPersonne: h,nbPersonne_as: n,nbPersonne_ans: l,nbPersonne_es: g,nbPersonne_ens: f,forfait: j,materiel: e,foodpack: c,courSki: b};
    $.cookie.raw = true;
    $.cookie.json = true;
    $.cookie("_vtrFormRech", o, {expires: 90})
}
function ajoutCookieFavList(d) {
    var d = d.substring(16);
    var b = document.getElementById("in_fav_liste_" + d).value;
    var c = {};
    var a = $.cookie("_vtrFavList");
    if (a != null) {
        c = JSON.parse(a)
    }
    c[d] = {id: d,date: b};
    $.cookie.raw = true;
    $.cookie.json = true;
    $.cookie("_vtrFavList", c, {expires: 90});
    document.getElementById("liste_ajout_fav_" + d).style.display = "none";
    document.getElementById("liste_supp_fav_" + d).style.display = "block";
    compteurFavList();
}
function suppCookieFavList(b) {
    b = b.substring(15);
    var a = $.cookie("_vtrFavList");
    if (a != null) {
        objTabs = JSON.parse(a)
    }
    delete objTabs[b];
    $.cookie.raw = true;
    $.cookie.json = true;
    $.cookie("_vtrFavList", objTabs, {expires: 90});
    document.getElementById("liste_ajout_fav_" + b).style.display = "block";
    document.getElementById("liste_supp_fav_" + b).style.display = "none";
    compteurFavList();
}
$("#search_type_liste").mouseover(function() {
    document.getElementById("search_type_lieu").checked = true
}).mouseout(function() {
    document.getElementById("search_type_lieu").checked = false
});
$("#search_type_liste label").mouseover(function() {
    document.getElementById(this.id).style.backgroundColor = "#029ce1";
    document.getElementById(this.id).style.color = "#fff"
}).mouseout(function() {
    if (choix_precedent_id != this.id) {
        document.getElementById(this.id).style.backgroundColor = null;
        document.getElementById(this.id).style.color = "#333"
    }
});

function compteurFavList() {
    var a = 0;
    var b = $.cookie("_vtrFavList");
    if ((b != null) || (b != {})) {
        objTabs = JSON.parse(b);
        for (var c in objTabs) {
            a++;
        }
    }
    if (a != 0) {
	document.getElementById("circle").textContent = a;
	document.getElementById("coups_coeur").style.display = "block";
    }
    if (a == 0) {
	document.getElementById("circle").textContent = a;
	document.getElementById("coups_coeur").style.display = "none";
    }

}






