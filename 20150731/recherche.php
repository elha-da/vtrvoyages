<?php


include('template.php');
// on créé une nouvelle instance de la classe Template
// et on indique en argument le chemin vers les modèles
$aside_recherche = new Template('html/');
$piedAside_recherche = new Template('html/');
$recherche = new Template('html/');
// modèle à utiliser auquel on adjoint un nom arbitraire
$aside_recherche->set_filenames(array('aside_recherche' => 'aside_recherche.html'));
$piedAside_recherche->set_filenames(array('piedAside_recherche' => 'piedAside_recherche.html'));
$recherche->set_filenames(array('recherche' => 'recherche.html'));

$aside_recherche->pparse('aside_recherche');

$recherche->pparse('recherche');

$piedAside_recherche->pparse('piedAside_recherche');


?>
