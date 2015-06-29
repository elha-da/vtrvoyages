<?php
// connexion à la base de données
try {
  $bdd = new PDO('mysql:host=localhost;dbname=ppurlowj', 'root', '123456789Aa');
} catch(Exception $e) {
  exit('Impossible de se connecter à la base de données.');
  }

$json = array();
     
if(isset($_GET['go'])) {
  // requête qui récupère les régions
  $requete = "SELECT id, nom FROM pays ORDER BY nom";
} 
else if(isset($_GET['id_pays']) ) {
  $id_pays = $_GET['id_pays'] ;
  // requête qui récupère les départements selon la région
  $requete = "SELECT id, nom FROM regions WHERE id_pays = ". $id_pays ." ORDER BY nom";
}
else if(isset($_GET['id_region']) ) {
  $id_region = $_GET['id_region'] ;
  // requête qui récupère les départements selon la région
  $requete = "SELECT id, nom FROM departements WHERE id_region = ". $id_region ." ORDER BY nom";
}
else if(isset($_GET['id_departement']) ) {
  $id_departement = $_GET['id_departement'] ;
  // requête qui récupère les villes selon le département
  $requete = "SELECT id, nom FROM villes WHERE id_departement = ". $id_departement ." ORDER BY nom";
}


// exécution de la requête
$resultat = $bdd->query($requete) or die(print_r($bdd->errorInfo()));
     
// résultats
while($donnees = $resultat->fetch(PDO::FETCH_ASSOC)) {
  // je remplis un tableau et mettant l'id en index (que ce soit pour les régions ou les départements ou les villes)
  $json[$donnees['id']][] = utf8_encode($donnees['nom']);
}
     
// envoi du résultat au success
echo json_encode($json);

?>