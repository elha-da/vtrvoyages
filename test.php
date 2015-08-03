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
$z= empty($lieu['zone_geo'])? NULL: $lieu['zone_geo']; // non
$p= empty($lieu['pays'])? NULL: $lieu['pays']; // non
$r= empty($lieu['region'])? NULL: $lieu['region']; // non
$v= empty($lieu['ville'])? NULL: $lieu['ville']; // non
$ds= empty($tab[''])? NULL: $tab['']; // non
$dp= empty($tab[''])? NULL: $tab['']; // non

$tab= $_POST['search_type']; //le tableau critères du formulaire de recherche

$var= empty($tab['date_depart'])? NULL: $tab['date_depart'];
if ($var != NULL) {
  $date = str_replace('/', '-', $var);
  $d = date('Y-m-d', strtotime($date)); //ok
}
else 
  $d= NULL; //ok

$fd= empty($tab['date_flexible'])? NULL: $tab['date_flexible']; //ok
$l= empty($tab['duree_sejour'])? NULL: $tab['duree_sejour']; //ok
$pr=1;
if (empty($tab['formule']['rem_meca']))
  $pr= $pr;
else 
  $pr = $pr + pow(2, ($tab['formule']['rem_meca']));

if (empty($tab['formule']['materiel']))
  $pr= $pr;
else 
  $pr = $pr + pow(2, ($tab['formule']['materiel']));

if (empty($tab['formule']['cours_ski']))
  $pr= $pr;
else 
  $pr = $pr + pow(2, ($tab['formule']['cours_ski']));


$nb= empty($tab['nbPersonnes']['nb'])? NULL: $tab['nbPersonnes']['nb']; //ok
$as= empty($tab['nbPersonnes']['as'])? NULL: $tab['nbPersonnes']['as']; //ok
$ans= empty($tab['nbPersonnes']['ans'])? NULL: $tab['nbPersonnes']['ans']; //ok
$es= empty($tab['nbPersonnes']['es'])? NULL: $tab['nbPersonnes']['es']; //ok
$ens= empty($tab['nbPersonnes']['ens'])? NULL: $tab['nbPersonnes']['ens']; //ok
$t= empty($_POST['texte_libre'])? NULL: $_POST['texte_libre']; //ok

$query_string = "o=json&d=".$d."&fd=".$fd."&l=".$l."&pr=".$pr."&nb=".$nb."&as=".$as."&ans=".$ans."&es=".$es."&ens=".$ens."&t=".urlencode($t);
//$query_string ="o=json&d=2016-02-13&fd=0&l=&pr=3&nb=1&as=1&ans=&es=&ens=&t=val d'isère";

//$query_string = "o=json&d=2016-02-13&fd=8&pr=1&t=val d'isère";
$res = file_get_contents($url_srv . $query_string);

//die($res); // meme résultat que l'appel direct à resultset.php
$res = json_decode($res, true);
//print_r ($res);
echo "reprise des valeurs utilisées pour la recherche : $query_string<br /> \n";
echo "<hr /> \n Entete de liste = petit formulaire de tri et/ou filtre (à voir)<hr /> \n";

include('template.php');
// on créé une nouvelle instance de la classe Template
// et on indique en argument le chemin vers les modèles
$entete_site = new Template('./html/');
$pied_site = new Template('./html/');

$section_blockSejour = new Template('./html/sejour');
$pied_page_blockSejour = new Template('./html/sejour');
// modèle à utiliser auquel on adjoint un nom arbitraire
$entete_site->set_filenames(array('entete_site' => 'entete_site.html'));
$pied_site->set_filenames(array('pied_site' => 'pied_site.html'));

// Formulaire de recherche :
$onglets_recherche = new Template('./html/recherche');
$block_recherche = new Template('./html/recherche');
$piedAside_recherche = new Template('./html/recherche');

$entete_site->set_filenames(array('entete_site' => 'entete_site.html'));
$pied_site->set_filenames(array('pied_site' => 'pied_site.html'));


$onglets_recherche->set_filenames(array('onglets_recherche' => 'onglets_recherche.html'));
$block_recherche->set_filenames(array('block_recherche' => 'block_recherche.html'));
$piedAside_recherche->set_filenames(array('piedAside_recherche' => 'piedAside_recherche.html'));

// Fin formulaire de recherche :


$section_blockSejour->set_filenames(array('section_blockSejour' => 'section_blockSejour.html'));
$pied_page_blockSejour->set_filenames(array('pied_page_blockSejour' => 'pied_page_blockSejour.html'));

$entete_site->pparse('entete_site');

// Parse formulaire de recherche :
$onglets_recherche->pparse('onglets_recherche');
$block_recherche->pparse('block_recherche');
$piedAside_recherche->pparse('piedAside_recherche');
// Fin parse formulaire de recherche :

$section_blockSejour->pparse('section_blockSejour');
//print_r ($res) ;
$i= 0;
if (!empty($res)) {
  foreach($res as $sejour) {
    /*	
	echo "<pre>\n";
	print_r($sejour);
	echo "</pre>\n";
    */
	
    $bloc = new Template('./html/sejour');
    $bloc->set_filenames(array('bloc_sejour_' . $sejour['Sejour_id'] => 'bloc_sejour.html'));

    // Assignation des variables
    $bloc->assign_vars($sejour);

    foreach($sejour['Inclus'] as $presta) {
      $bloc->assign_block_vars('presta',array(  'nom' => $presta,
						'picto' => str_replace(" ", "_", strtolower($presta))
						)
			       );
    }

    if($sejour['PrixOld']) {
      $bloc->assign_block_vars('promo',array(
					     'Promo_prix' => $sejour['PrixOld'] ,
					     'Promo_pourcent' => "- " . round(100*($sejour['PrixOld'] - $sejour['Prix'])/$sejour['PrixOld'],0) . " %"
					     ));
    }
    // Affichage des données
    $bloc->pparse('bloc_sejour_' . $sejour['Sejour_id']);

  }
}
else 
  echo "aucun resultat ";

$pied_page_blockSejour->pparse('pied_page_blockSejour');
$pied_site->pparse('pied_site');

echo "<hr /> \n Bas de liste (pagination ?) ou simple reprise de l'entete de liste (petit formulaire de tri/filtre) ?";

function affiche_bloc_sejour($sejour){
	
  $out = " ?>
<?php 
	";
  return $out;
}
?>
