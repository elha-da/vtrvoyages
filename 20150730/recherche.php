<div class="contenu_onglet" id="contenu_onglet_ski">
   <aside id="span_recherche_ski" class="span3" >
   <div id="recherche_ski" class="recherche" >
   <fieldset>
   <form method="POST" name="ski" class="form-horizontal" action="http://www.vtr-voyages.fr:8080/app_test.php/recherche-ski">	
   <label class="control-label-date_depart " for="texte_libre" style="width:100px">Recherche libre</label>
   <input type="text" value="" placeholder="Ex : Val d'Isère" name="search_type[texte_libre]" >
   <hr class="bloc" />	 
   <div class="contenu_fil_ariane" id="choix_type_ski_fil_ariane">
   <ul id="fil_ariane" >
							  
   </ul>
   </div>

   <div class="contenu_onglet" id="choix_type_ski_recup">
   </div>
		  
   <div class="control-group" id="choix_ski">
   <div class="controls">
   <select id="choix_type_ski" name="search_type[choix_ski]">
   </select>
   </div>
   </div>

   <div class="control-group ville_station">
   <div class="controls contenu_onglet" id="ville_ski">
   <select id="search_type_ville_ski" name="search_type[ville_ski]">
   <option value="">Ville/Station</option>
   </select>
   </div>
   </div>

   <hr class="bloc" />

   <div class="control-group date_depart">
   <label class="control-label-date_depart " style="width:100px" for="search_type_date_depart">Date de départ</label>
   <input type="text" id="search_type_date_depart_ski" name="search_type[date_depart]" class="date" >
   <input checked="checked" rel="tooltip" title="Date flexible" type="checkbox" id="search_type_date_flexible_ski" name="search_type[date_flexible]" value="8">
   <p style="display: inline; font-size: 10px; margin: 0 0 0 -10px ;" > +/- 8 jours. </p>
   </div>
				
   <div class="div_inline">
   <input type="radio" name="search_type[duree_sejour]" id="weekEnd" value="02" >
   <label for="weekEnd" style="display: inline;">week-end (1 à 3 jours)</label>
   </div>
   <div class="div_inline">
   <input type="radio" name="search_type[duree_sejour]" id="semaine" value="7" checked="checked">
   <label for="semaine" style="display: inline;">1 semaine et plus</label>
   </div>
						
   <hr class="bloc" />
					  
   <div class="control-group controls">	
   <div class="total_nbPersonnes">
   <label class="control-label-nbPersonnes" for="search_type[nbPersonnes][nb]" ><strong>Nombre de participants</strong></label>
   <input id="nbPersonnes_nb" type="number" step="1" value="2" min="1" max="19" class="nbPersonnes" required="required" name="search_type[nbPersonnes][nb]">
   </div>
   <div id="nbPersonnes_details" style="display: none;">
   <div>
   <label class="control-label-nbPersonnes" for="search_type[nbPersonnes][as]">Adultes skieurs</label>
   <input id="nbPersonnes_as" type="number" step="1" value="2" min="1" max="19" class="nbPersonnes" required="required" name="search_type[nbPersonnes][as]">
   </div>
   <div>
   <label class="control-label-nbPersonnes" for="search_type[nbPersonnes][ans]">Adultes non skieurs</label>
   <input id="nbPersonnes_ans" type="number" step="1" value="0" min="0" max="19" class="nbPersonnes" required="required" name="search_type[nbPersonnes][ans]">
   </div>
   <div>
   <label class="control-label-nbPersonnes" for="search_type[nbPersonnes][es]">Enfants skieurs</label>
   <input id="nbPersonnes_es" type="number" step="1" value="0" min="0" max="19" class="nbPersonnes" required="required" name="search_type[nbPersonnes][es]">
   </div>
   <div>
   <label class="control-label-nbPersonnes" for="search_type[nbPersonnes][ens]">Enfants non skieurs</label>
   <input id="nbPersonnes_ens" type="number" step="1" value="0" min="0" max="19" class="nbPersonnes" required="required" name="search_type[nbPersonnes][ens]">
   </div>
   </div>
   </div>	
							  
   <hr class="bloc" />

   <div class="control-group champ_pays">
   <div class="controls">
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][hebergement]" >Hébergement</label>
   <input type="checkbox" id="search_type_hebergement" name="search_type[formule][hebergement]" value="0" checked="checked" onClick="cocherDecocherFormule(0);">
   </div>
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][rem_meca]">Remontées mécaniques</label>
   <input class="search_type_formule" type="checkbox" id="search_type_rem_meca" name="search_type[formule][rem_meca]" value="1" onClick="cocherDecocherFormule(1);"/>
   </div>
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][materiel]">Matériel</label>
   <input class="search_type_formule" type="checkbox" id="search_type_materiel" name="search_type[formule][materiel]" value="2" onClick="cocherDecocherFormule(2);"/>
   </div>
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][foodpack]">Livraison de courses</label>
   <input class="search_type_formule" type="checkbox" id="search_type_foodpack" name="search_type[formule][foodpack]" value="5" onClick="cocherDecocherFormule(5);"/>
   </div>
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][cours_ski]">Cours de ski</label>
   <input class="search_type_formule" type="checkbox" id="search_type_cours_ski" name="search_type[formule][cours_ski]" value="3" onClick="cocherDecocherFormule(3);"/>
   </div>
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][transport]">Transport</label>
   <input class="search_type_formule" type="checkbox" id="search_type_transport" name="search_type[formule][transport]" value="4" onClick="cocherDecocherFormule(4);"/>
   </div>
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][pensionC]">Pension complète</label>
   <input class="search_type_formule" type="checkbox" id="search_type_transport" name="search_type[formule][transport]" value="6" onClick="cocherDecocherFormule(4);"/>
   </div>
   <div class="control-group-formule">
   <label class="control-label-formule" for="search_type[formule][dPension]">Demi-pension</label>
   <input class="search_type_formule" type="checkbox" id="search_type_transport" name="search_type[formule][dPension]" value="7" onClick="cocherDecocherFormule(4);"/>
   </div>
   </div>
   </div>
					  
   <div class="control-group">
   <button type="submit" class="btn">
   <i class="icon-search"></i>
   Recherche
   </button>
   </div>

   </form>
   </fieldset>
   </div>
   </aside>
   </div>