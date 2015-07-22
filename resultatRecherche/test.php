<?php

/* test d'interrogation de resultset.php  */

$url_srv = 'http://gestion.vtr-voyages.fr/admin/recherche/resultset.php?';
/* 	paramètres à récupérer à partir du formulaire de recherche/resultset 
	(donc, probablement reçu en POST ici, mais à "habiller" / nommer comme suit)

	lg = langue demandée (fr ou en) [fr]
	d = date de départ (yyyy-mm-jj) [vide]
	fd = flexibilité de la date (+ ou - fd jours) [1]
	l = durée du séjour [7]
	pr = prestations incluses [1 = heb] : en puissance de 2, correspond à la présence, dans l'ordre, de heb / forfait / mat / food / transport / cours de ski
	nb = nombre total de participants (hors bébé de - de 2 ans, pour lesquels la gratuité totale est supposée) [4]
	as = nombre d'adultes (plus de 10 ans) skieurs [2]
	ans = nombre d'adultes non skieurs [0]
	es = nombre d'enfants (de 3 à 9 ans) skieurs [2]
	ens = nombre d'enfants skieurs [0]
	z = id de la zone geo ciblée [vide]
	p = id du pays [vide]
	r = id de la région [vide]
	v = id de la ville (attention, pas id de la station, meme si on affiche le nom de la station ...) [vide]
	ds = id du domaine skiable [vide]
	dp = id du département [vide]
	t = texte libre ajouté à la recherche

*/
// à faire = construire la query string dynamiquement
$lieu= $_POST['choix_ski']; // tableau du lieu du formulaire de recherche
$z= empty($lieu['zone_geo'])? NULL: $lieu['zone_geo'];
$p= empty($lieu['pays'])? NULL: $lieu['pays'];
$r= empty($lieu['region'])? NULL: $lieu['region'];
$v= empty($lieu['ville'])? NULL: $lieu['ville'];


$tab= $_POST['search_type']; //le tableau critères du formulaire de recherche

$var= empty($tab['date_depart'])? NULL: $tab['date_depart'];
$date = str_replace('/', '-', $var);
$d = date('Y-m-d', strtotime($date));

$fd= empty($tab['date_flexible'])? NULL: $tab['date_flexible'];
//$l= empty($tab[''])? NULL: $tab[''];
$pr= empty($tab[''])? '1': $tab[''];
$nb= empty($tab['nbPersonnes']['nb'])? NULL: $tab['nbPersonnes']['nb'];
$as= empty($tab['nbPersonnes']['as'])? NULL: $tab['nbPersonnes']['as'];
$ans= empty($tab['nbPersonnes']['ans'])? NULL: $tab['nbPersonnes']['ans'];
$es= empty($tab['nbPersonnes']['es'])? NULL: $tab['nbPersonnes']['es'];
$ens= empty($tab['nbPersonnes']['ens'])? NULL: $tab['nbPersonnes']['ens'];
$ds= empty($tab[''])? NULL: $tab[''];
$dp= empty($tab[''])? NULL: $tab[''];
$t= empty($_POST['texte_libre'])? NULL: $_POST['texte_libre'];

$query_string = "d=".$d."&fd=".$fd."&pr=".$pr."&t=".$t ;
$res = file_get_contents($url_srv . $query_string);
//die($res); // meme résultat que l'appel direct à resultset.php
$res = json_decode($res, true);

echo "reprise des valeurs utilisées pour la recherche : $query_string<br /> \n";
echo "<hr /> \n Entete de liste = petit formulaire de tri et/ou filtre (à voir)<hr /> \n";

include('template.php');
// on créé une nouvelle instance de la classe Template
// et on indique en argument le chemin vers les modèles
$template = new Template('./');
// modèle à utiliser auquel on adjoint un nom arbitraire
$template->set_filenames(array('bloc_sejour' => 'bloc_sejour.html'));


foreach($res as $sejour) {
  /*	
	echo "<pre>\n";
	print_r($sejour);
	echo "</pre>\n";
  */
  // Assignation des variables
  $template->assign_vars($sejour);
	
  $template->assign_block_vars('presta',$sejour['Inclus']);

  if($sejour['Prix_old']) {
    $template->assign_block_vars('promo',array(
					       'Promo_prix' => $sejour['Prix_old'] ,
					       'Promo_pourcent' => round(($sejour['Prix'] - $sejour['Prix_old'])/$sejour['Prix_old'],0) . " %"
					       ));
  }
  // Affichage des données
  $template->pparse('bloc_sejour');
}

echo "<hr /> \n Bas de liste (pagination ?) ou simple reprise de l'entete de liste (petit formulaire de tri/filtre) ?";

function affiche_bloc_sejour($sejour){
	
  $out = " ?>
<?php 
	";
  return $out;
}
?>