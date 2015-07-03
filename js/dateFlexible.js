var date = document.getElementById('search_type_date_depart_ski').value ;

function date_flexible(date){
    if (document.getElementById('search_type_date_flexible_ski').checked= true) {
	var dateMax = date + 8 ;
	var dateMin = date - 8 ;
	alert ("Ok");
	return [dateMax, dateMin] ;
    }
    else {
	return [date] ;		
    }
}

/*
$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            alert("Checkbox is checked.");
        }
        else if($(this).prop("checked") == false){
            alert("Checkbox is unchecked.");
        }
    });
});
*/
