/*
$(".ajouter_liste").click(function() {
	var idSejourFav = this.id;
	var dateSejour = document.getElementById(favIdSejour).getAttribute('value');
	
	$.ajax({
		type : "POST",
		url : "liste_fav.php",
		data : { idSejourFav: idSejourFav, dateSejour: dateSejour },
		success : function(data) { 
		alert(dateSejour);
		}
	});	
});
*/

$(".ajouter_liste").click(function() {
    var idSejourFav = this.id;
    var dateSejour = document.getElementById(favIdSejour).getAttribute('value');
    
    var aujourdhui = date("Y-m-d");
    
    var nbSecondes= 60*60*24;
    
    var nbJours = round((strtotime(dateSejour) - strtotime(aujourdhui))/ nbSecondes);
    
    var expire = nbJours*24*3600 ;
    
    
    if (isset($_COOKIE['vtr'.$id.'['.dateSejour])) {
	unset($_COOKIE['vtr'.$id.']['.dateSejour]);
    }
    else {
  setcookie('vtr'.$id.'['.dateSejour.']', $id, time()+expire);
    }
});



/*

       
      function cocherFormule_recur(loc, vars){
        if ($('input[value='+loc+']').attr(''checked')) {
          $('input[value='+loc+']').removeAttr('disabled');

          if (vars == '0'){
            $('input[value='+loc+']').removeAttr('disabled', true);
          }

          else {
            var x = (Number(vars)-1) ;
            cocherFormule_recur(vars, x);
          }
        }
        else {

          $('input[value='+loc+']').prop('checked', 'checked');

          if (vars == '0'){
            $('input[value='+loc+']').prop('disabled', true);
            $('input[value='+loc+']').prop('checked', 'checked');
          }

          else {
            var x = (Number(vars)-1) ;
            cocherFormule_recur(vars, x);
          }
        }
      }




      $(".control-label-formule").onClick(function() {
      var valeur = this.value;
      alert (valeur);
      if (valeur == 3) {
      $(#search_type_rem_meca).prop(checked, true);
      }
      
*/
