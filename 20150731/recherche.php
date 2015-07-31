<?php


include('template.php');
// on créé une nouvelle instance de la classe Template
// et on indique en argument le chemin vers les modèles
$entete_site = new Template('./html/');
$aside_recherche = new Template('./html/recherche/');
$piedAside_recherche = new Template('./html/recherche/');
$block_recherche = new Template('./html/recherche/');
$onglets_recherche = new Template('./html/recherche/');

// modèle à utiliser auquel on adjoint un nom arbitraire
$entete_site->set_filenames(array('entete_site' => 'entete_site.html'));
$aside_recherche->set_filenames(array('aside_recherche' => 'aside_recherche.html'));
$onglets_recherche->set_filenames(array('onglets_recherche' => 'onglets_recherche.html'));
$block_recherche->set_filenames(array('block_recherche' => 'block_recherche.html'));
$piedAside_recherche->set_filenames(array('piedAside_recherche' => 'piedAside_recherche.html'));

$entete_site->pparse('entete_site');
$aside_recherche->pparse('aside_recherche');
$onglets_recherche->pparse('onglets_recherche');
$block_recherche->pparse('block_recherche');
$piedAside_recherche->pparse('piedAside_recherche');

?>
