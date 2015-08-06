
function choix(paysId, paysVal) {
    var id = 'search_type_'+paysId ;
    var valeur = paysVal ;
    var bloc = document.getElementById(id).innerHTML;
    $('#tree1').empty();
    $('#tree1').append(bloc);
}



