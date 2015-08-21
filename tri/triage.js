
function sortTable(tid, ord){
    
    var lines = $("#"+tid).children('li'),
    sorter = [],
    i = -1,
    j = -1;
    
    
    while(lines[++i]){
	sorter.push([i, lines.eq(i).attr('data-prix')])
    }
    //alert (sorter);
    
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
	alert ('li[data-prix='+sorter[j][1]+']');

	var leBloc = $('li[data-prix='+sorter[j][1]+']').id ;
	alert (leBloc);

	$("#"+tid).append(sorter[j][1])
    }
}

