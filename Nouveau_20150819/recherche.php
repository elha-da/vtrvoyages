<div class="contenu_onglet" id="contenu_onglet_ski">
  <aside id="span_recherche_ski" class="span3" >
    <div id="recherche_ski" class="recherche" >
      <fieldset>
	<form method="POST" name="ski" class="form-horizontal" action="<?php if(strpos($_SERVER['REQUEST_URI'],'app_test.php') !== false) echo "/app_test.php";?>/recherche-ski" onsubmit="cookieFormulaireRecherche();">
	  <div id="lieu_Jtree">
	    <input id="search_type_lieu_choisi" type="text" value="" name="search_type[lieu]" style="display: none;"/>
	    <input id="search_type_nomLieu" type="text" value="" name="search_type[nomLieu]" style="display: none;"/>
	    <input type="checkbox" id="search_type_lieu" value="" />
	    <label class="btn" id="case_search_type_lieu" for="search_type_lieu">Veuillez choisir un lieu</label>
	    <ul class="liste_Jtree" id="search_type_liste">
<?php	
	$conn = include("get_db_conn.php");
	$q = "
		select p.id as p_id, p.name as p_name, z.id as z_id, z.name as z_name, c.id as s_id, s.name as s_name, count(distinct ss.id) as NbSejours
		from atlas_station s inner join atlas_city c on c.id = s.city_id
			inner join atlas_departement d on d.id = c.departement_id
			inner join atlas_region r on r.id = d.region_id
			inner join atlas_pays p on p.id = r.pays_id
			inner join zonegeographique_city zc on zc.city_id = s.city_id
			inner join atlas_zonegeographique z on z.id = zc.zonegeographique_id
			inner join stay_sejour ss on ss.city_id = s.city_id	
		group by s.id
		order by p_name, z_name, s_name
	";
	$results = $conn->query($q) or die("Pb with SQL : " . $conn->error . " :: $q");
	$lettres = array( 	'Commençant par A' 	=> array('A','A') ,
						'de B à K' 			=> array('B','K') ,
						'Commençant par L' 	=> array('L','L') ,
						'de M à O' 			=> array('M','O') ,
						'de P à T' 			=> array('P','T') ,
						'de U à Z' 			=> array('U','Z')
				);
	$zone1_details = array();
	// On trie
	foreach($lettres as $k => $val)
		$zone1_details[$k] = array();
	while($res = $results->fetch_assoc()) {
		$pa_zo_vi[$res['p_id']][$res['z_id']][$res['s_id']] = $res['NbSejours'];
		$payss[$res['p_id']] = utf8_encode($res['p_name']);
		$zones[$res['z_id']] = utf8_encode($res['z_name']);
		$villes[$res['s_id']] = utf8_encode($res['s_name']);
		if($res['z_id'] == 1) { //On découpe la liste des stations Alpes du Nord par lettre
/* Version "1ere lettre de CHAQUE mot"
			$station = str_replace(array(" d'","-"," en ","-les-","-en-", " / "," les ", " l'", " de ", " Dame ","-sur-", " des ", "-de-"), " ",$res['s_name']);
			$mots = explode(" ",$station);
			foreach($mots as $mot) {
				$l = strtoupper(substr($mot,0,1));
				foreach($lettres as $lettre => $tabLettres)
					if($tabLettres[0] <= $l and $l <= $tabLettres[1])
						//echo "  $lettre = " . $res['s_id'] . "(" . $res['s_name'] . ") - " . $tabLettres[0] . " <= $l <= " . $tabLettres[1];
						$zone1_details[$lettre][$res['s_id']] = $res['NbSejours'];
			}
*/
				$l = strtoupper(substr($res['s_name'],0,1));
				foreach($lettres as $lettre => $tabLettres)
					if($tabLettres[0] <= $l and $l <= $tabLettres[1])
						$zone1_details[$lettre][$res['s_id']] = $res['NbSejours'];			
		}
	}

	foreach($pa_zo_vi as $pid => $ppays) {
		echo '
			<li id="search_type_pays_' . $pid . '"> 
				<input type="checkbox" id="pays_' . $pid . '" value="p=' . $pid . '" onclick="choix(this.id, this.value );"/>
				<label id="case_pays_' . $pid . '" for="pays_' . $pid . '">' . $payss[$pid] . '</label>
				<ul>
';
		if(count($ppays) > 1) {
			foreach($ppays as $zid => $zzone) {
				echo '
						<li id="search_type_region_' . $zid . '">
							<input type="checkbox" id="region_' . $zid . '" value="z=' . $zid . '" onclick="choix(this.id, this.value );"/>
							<label id="case_region_' . $zid . '" for="region_' . $zid . '">' . $zones[$zid] . '</label>
							<ul>
';
				if($zid == 1 and count($zzone) > 12) { // On découpe la liste des stations des Alpes du Nord (s'il y en a plus de 12)
					$i = 0;
					foreach($zone1_details as $lid => $zzd) {
						$i++;
						echo '
								<li id="search_type_zone1_' . $i . '">
									<input type="checkbox" id="zd_' . $i . '" value="zd=' . $i . '"/>
									<label id="case_zd_' . $i . '" for="zd_' . $i . '">' . $lid . '</label>
									<ul>
';
						foreach($zzone as $vid => $vville) {
							if(in_array($vid,array_keys($zzd))) 
								echo '
									<li>
										<input type="checkbox" id="ville_' . $vid . '" value="v=' . $vid . '" onclick="choix(this.id, this.value );"/>
										<label id="case_ville_' . $vid . '" for="ville_' . $vid . '">' . $villes[$vid] . '</label>
									</li>
';
						}				
?>
									</ul>
								</li>
<?php
					}				
				}
				else {	
					foreach($zzone as $vid => $vville) {
						echo '
								<li>
									<input type="checkbox" id="ville_' . $vid . '" value="v=' . $vid . '" onclick="choix(this.id, this.value );"/>
									<label id="case_ville_' . $vid . '" for="ville_' . $vid . '">' . $villes[$vid] . '</label>
								</li>
';
					}
				}
?>
							</ul>
						</li>
<?php
			}
		}
		else { // On remonte les villes d'un niveau
			$ppays = array_shift($ppays);
			foreach($ppays as $vid => $vville) {
				echo '
						<li>
							<input type="checkbox" id="ville_' . $vid . '" value="v=' . $vid . '" onclick="choix(this.id, this.value );"/>
							<label id="case_ville_' . $vid . '" for="ville_' . $vid . '">' . $villes[$vid] . '</label>
						</li>
';
			}
		}
?>
				</ul>
			</li>
<?php
	}
?>
		</ul>
	</div>
	<hr class="bloc" />
	<label class="control-label-date_depart " for="texte_libre" style="width:100px; display: none">Recherche libre</label>
	<input id="search_type_texte_libre" type="text" value="" placeholder="Ex : nom de la résidence" name="search_type[texte_libre]" >
	<hr class="bloc" />	 


	  <div class="control-group date_depart">
	    <label class="control-label-date_depart " style="width: 100px; display: inline;" for="search_type_date_depart">Départ le </label>
	    <input type="text" id="search_type_date_depart_ski" name="search_type[date_depart]" class="date" >
	    <input checked="checked" rel="tooltip" title="Date flexible" type="checkbox" id="search_type_date_flexible_ski" name="search_type[date_flexible]" value="8">
	    <p style="display: inline; font-size: 10px; margin: 0 0 0 -10px ;" > +/- 8j </p>
	  </div>
	  
	  <div class="div_inline">
	    <input type="radio" name="search_type[duree_sejour]" id="weekEnd" value="2" >
	    <label for="weekEnd" style="display: inline;">week-end</label>
	  </div>
	  <div class="div_inline">
	    <input type="radio" name="search_type[duree_sejour]" id="semaine" value="7" checked="checked">
	    <label for="semaine" style="display: inline;">+ de 5 jours</label>
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

	  <div class="control-group champ_pays" style="display: none;">
	    <div class="controls">
	      <div class="control-group-formule" style="display: inline-block">
		<img src="http://img2.vtr-voyages.net/img/w0h0/pictos_formules/hebergement_black.png?filter=src" alt="Hébergement ski" title="Hébergement ski">
		<label class="control-label-formule taille-label-hebergement" for="search_type[formule][hebergement]" >Hébergement</label>
		<input type="checkbox" id="search_type_hebergement" name="search_type[formule][hebergement]" value="0" checked="checked"  disabled="disabled"/>
	      </div>
	      <div class="control-group-formule" style="display: inline-block">
		<img src="http://img2.vtr-voyages.net/img/w0h0/pictos_formules/forfait_black.png?filter=src" alt="Forfait ski" title="Remontées mécaniques">
		<label class="control-label-formule taille-label-forfait" for="search_type_rem_meca">Forfait</label>
		<input class="search_type_formule" type="checkbox" id="search_type_rem_meca" name="search_type[formule][rem_meca]" value="1" />
	      </div>
	      <div class="control-group-formule">
		<img src="http://img2.vtr-voyages.net/img/w0h0/pictos_formules/materiel_black.png?filter=src" alt="Location matériel ski" title="Location matériel ski">
		<label class="control-label-formule taille-label-materiel" for="search_type_materiel">Matériel</label>
		<input class="search_type_formule" type="checkbox" id="search_type_materiel" name="search_type[formule][materiel]" value="2" />
	      </div>
	      <div class="control-group-formule">
		<img src="http://img2.vtr-voyages.net/img/w0h0/pictos_formules/courses_black.png?filter=src" alt="Livraison de courses" title="Livraison de courses">
		<label class="control-label-formule taille-label-foodpack" for="search_type_foodpack">Livraison de courses</label>
		<input class="search_type_formule" type="checkbox" id="search_type_foodpack" name="search_type[formule][foodpack]" value="5" />
	      </div>
	      <div class="control-group-formule">
		<img class="img-formule-recherche" src="http://img2.vtr-voyages.net/img/w0h0/pictos_formules/pension_black.png?filter=src" alt="Pension complète demi-pension" title="Pension complète, demi-pension">
		<label class="control-label-formule" for="search_type_cours_ski">Repas du soir et/ou midi</label>
		<input class="search_type_formule" type="checkbox" id="search_type_cours_ski" name="search_type[formule][cours_ski]" value="3" />
	      </div>
	    </div>
	  </div>
	  
	  <div class="control-group">
	    <button type="submit" class="btn" >
	      <i class="icon-search"></i>
	      Recherche
	    </button>
	    <input type="reset" id="effacer" style="display: none;">
	    <label for="effacer" style="float: right; text-decoration: underline; font-size: 13px; margin: 5px 20px 0 0;" onclick="form_rech_raz();">Effacer </label>
      </div>

	</form>
      </fieldset>
    </div>
  </aside>
</div>
