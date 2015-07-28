<?php

require("config.php");

// connexion à la base de données
try{
  $bdd = new PDO("mysql:host={$_sgbd["host"]};dbname={$_sgbd["dbname"]}; charset=UTF8",$_sgbd["pseudo"],$_sgbd["mdp"]);
  $bdd -> exec("SET CHARACTER SET utf8");
} 
catch (Exception $e) {
  echo $e="Impossible de se connecter à la base de données. Erreur PDO:: query($req)";
  exit();
}

?>