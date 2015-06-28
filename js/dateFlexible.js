var date = document.getElementById('search_type_date_depart_ski').value ;

function date_flexible(date){
	if (document.getElementById('search_type_date_flexible_ski').checked= true) {
		var dateMax = date + 8 ;
		var dateMin = date - 8 ;
		return [dateMax, dateMin] ;
	else
		return [date] ;		
}
