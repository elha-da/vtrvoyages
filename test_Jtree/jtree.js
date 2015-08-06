
function choix(paysId, paysVal) {
    var id = 'search_type_'+paysId ;
    var valeur = paysVal ;
    var bloc = document.getElementById(id).innerHTML;
    $('#tree1').empty();
    $('#tree1').append(bloc);
}

function cookieFormulaireRecherche() {
    var departSki = document.getElementById('search_type_date_depart_ski').value;
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
    alert ("ok");
 
    var tab = = new Array();
    tab['departSki'] = departSki; 
    tab['dureeSejour'] = dureeSejour; 
    tab['nbPersonne'] = nbPersonne; 
    tab['nbPersonne_as'] = nbPersonne_as; 
    tab['nbPersonne_ans'] = nbPersonne_ans; 
    tab['nbPersonne_es'] = nbPersonne_es; 
    tab['nbPersonne_ens'] = nbPersonne_ens;
    

}

// var  = document.getElementById('').value;
//    alert(document.getElementsByName('search_type[duree_sejour]').value);
