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
