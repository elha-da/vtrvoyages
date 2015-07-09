<?php
require("connexion.php");

$list = array();
$grandeChaine='<option value="Z" selected >Zone géographique</option>' ;

  // requête qui récupère les zonegeographiques selon le pays
  $requete = "SELECT Distinct(id), name 
              FROM atlas_zonegeographique 
              JOIN pays_zonegeographique ON id = zonegeographique_id 
              AND pays_id = 1 
              ORDER BY name";


// exécution de la requête
$resultat = $bdd->query($requete) or die(print_r($bdd->errorInfo()));
     
// résultats
while(($donnees = $resultat->fetch()) != null) {
  $chaine = '<option value="Z'.$donnees['id'].'">'.$donnees['name'].'</option>';
  $grandeChaine = $grandeChaine.$chaine ;
  //$list[$donnees['id']] = $donnees['name'];
}

echo $grandeChaine;
//print_r ($list) ;

?>
