
function sortTable(tabId, data, ord){
    
    var lines = $("#"+tabId).children('li'),
    sorter = [],
    idCourant = [],
    i = -1,
    j = -1;
    
    
    while(lines[++i]){
	sorter.push([i, lines.eq(i).attr(data)]);
	idCourant.push([i, lines.eq(i).attr('id')]) ;
    }
    
    if (ord == 'asc') {
	sorter.sort();
    } else if (ord == 'desc') {
	sorter.sort().reverse();
    } else if (ord == 'numAsc'){
	sorter.sort(function(a, b){return(a[1] - b[1]);});
    } else if (ord == 'numDesc'){
	sorter.sort(function(a, b){return(b[1] - a[1]);});
    } else if (ord == 'alphaAsc'){
	sorter.sort(function(a, b){
	    var x = parseInt(a[1], 10),
	    y = parseInt(b[1], 10);
	    
	    if (isNaN(x) || isNaN(y)){
		if (a[1] > b[1]){
		    return 1;
		} else if(a[1] < b[1]){
		    return -1;
		} else {
		    return 0;
		}
	    } else {
		return(a[1] - b[1]);
	    }
	});
    } else if (ord == 'alphaDesc'){
	sorter.sort(function(a, b){
	    var x = parseInt(a[1], 10),
	    y = parseInt(b[1], 10);
	    
	    if (isNaN(x) || isNaN(y)){
		if (a[1] > b[1]){
		    return -1;
		} else if(a[1] < b[1]){
		    return 1;
		} else {
		    return 0;
		}
	    } else {
		return(b[1] - a[1]);
	    }
	});
    }

    
    while(sorter[++j]){
	var idBloc = idCourant[sorter[j][0]][1];
	var element = document.getElementById(idBloc);
	var balise = '<li ';
	for (var i = 0; i < element.attributes.length; i++ ) {
	    var nomAtrr = element.attributes[i].name ;
	    var valeurAtrr = element.attributes[i].value ;
	    var attribu =  nomAtrr +'= "'+ valeurAtrr+'" ' ;
	    balise = balise + attribu ;	    	    
	}
	var bloc = document.getElementById(idBloc).innerHTML;

	var leBloc = balise+'>'+bloc+'</li>' ;

	document.getElementById(idBloc).remove();
	$("#"+tabId).append(leBloc) 
    }
}

