<?php
require("connexion.php");


$json = array();
     
if(isset($_GET['go'])) {
  // requête qui récupère les pays
  $requete = "SELECT id, name 
              FROM atlas_pays 
              ORDER BY name";
} 
else if(isset($_GET['id_pays']) ) {
  $id_pays = $_GET['id_pays'] ;
  // requête qui récupère les zonegeographiques selon le pays
  $requete = "SELECT Distinct(id), name 
              FROM atlas_zonegeographique 
              JOIN pays_zonegeographique ON id = zonegeographique_id 
              AND pays_id = ". $id_pays ." 
              ORDER BY name";
}

else if(isset($_GET['id_zonegeo']) ) {
  $id_zonegeographique = $_GET['id_zonegeo'] ;
  // requête qui récupère les stations selon la zonegeographique
  $requete = "SELECT atSta.id As id, atSta.name As name
              FROM atlas_station atSta
              JOIN zonegeographique_city zonCit ON zonCit.city_id = atSta.city_id  
                           AND zonCit.zonegeographique_id = ". $id_zonegeographique ."
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
