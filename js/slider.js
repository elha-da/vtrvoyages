jQuery(function($){

// Selection du budget 

    $('.range').each(function(){
	var cls     = $(this).attr('class');
	var matches = cls.split(/([a-zA-Z]+)\-([0-9]+)/g);
	var elem    = $(this).parent();
	var options = {};
	var input   = elem.find('input');
	elem.append('<div class="uirange" style="width: 93%; margin: 0 auto"></div>');
	for (i in matches) {
	    i = i*1;
	    if(matches[i] == 'min') {
		var valMin = matches[i+1]*1;
	        options.min = valMin;
		$('.affinage_budget_min').find('label span').empty().append(valMin);
	    }
	    if(matches[i] == 'max') {
		var valMax = matches[i+1]*1;
	        options.max = valMax;
		$('.affinage_budget_max').find('label span').empty().append(valMax);
	    }
	}
	options.slide = function(event, ui){
	    var budget = ui.value *1 ;

	    $('.affinage_budget_prix').find('span').empty().append(budget);
	    input.val(budget);
	    $('.liste_sejours_vtr_li').each(function(){
		if ($(this).attr('data-prix') < budget ) {
		    $(this).hide( 1000 );
		} else {$(this).show( "slow" );}
	    });
	}
	options.value = input.val();
	options.range = 'min';
	elem.find('.uirange').slider(options);
	$('.affinage_budget_prix').find('span').empty().append(input.val());
    });

// Selection de formule(s) 
    
    $('.affinage_formule_checkbox').click(function() {
	$('.affinage_formule_checkbox').each(function(){
	    if ($(this).prop('checked') == true) {
		var valeurFormule = $(this).attr('value');
		$('.liste_sejours_vtr_li').each(function(){
		    $(this).hide( 1000 );		
		});
		$('.liste_sejours_vtr_li').each(function(){
		    $('.'+valeurFormule).show( "slow" );	
		});
	    } 
	});    
    });
    
});

