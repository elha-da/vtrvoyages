
function sortTable(tid, ord){
    
    var lines = $("#"+tid).children('li'),
    sorter = [],
    idCourant = [],
    i = -1,
    j = -1;
    
    
    while(lines[++i]){
	sorter.push([i, lines.eq(i).attr('data-prix')]);
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
	var bloc = document.getElementById(idBloc).innerHTML ;
	var leBloc = '<li data-prix="'+sorter[j][1]+'" class="mix produit vignettes liste_sejours_vtr_li mix_all" id="'+idBloc+'" style=" display: inline-block; opacity: 1;">'+bloc+'</li>' ;
	document.getElementById(idBloc).remove();
	$("#"+tid).append(leBloc)
    }
}

