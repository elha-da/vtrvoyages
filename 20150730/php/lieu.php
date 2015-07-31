<?php
require("connexion.php");


$json = array();
     
if(isset($_GET['go'])) {
  // requête qui récupère tous les pays
  $requete = "SELECT id, name 
              FROM atlas_pays ORDER BY name";
} 
else if(isset($_GET['id_pays']) ) {
  $id_pays = $_GET['id_pays'] ;
  // requête qui récupère les régions selon le pays
  $requete = "SELECT id, name 
              FROM atlas_region
              WHERE pays_id = ". $id_pays ." 
              ORDER BY name";
}

else if(isset($_GET['id_region']) ) {
  $id_region = $_GET['id_region'] ;
  // requête qui récupère les villes selon la région
  $requete = "SELECT atC.id As id, atC.name As name
              FROM atlas_city atC
              JOIN atlas_departement atDep ON atDep.id = atC.departement_id
                           AND region_id = ". $id_region ." 
              ORDER BY name";
}


// exécution de la requête
$resultat = $bdd->query($requete) or die(print_r($bdd->errorInfo()));
     
// résultats
while(($donnees = $resultat->fetch()) != null) {
  // je remplis un tableau et mettant l'id en index (que ce soit pour les régions ou les départements ou les villes)
  $json[$donnees['id']][] = $donnees['name'];
}
     
// envoi du résultat au success
echo json_encode($json);

?>
