<?php

$id = '159'; //$_POST['idSejourFav'];
$date = '2015-07-31'; //$_POST['dateSejour'];
$aujourdhui = date("Y-m-d");

$nbSecondes= 60*60*24;

$nbJours = round((strtotime($date) - strtotime($aujourdhui))/ $nbSecondes);

$expire = $nbJours*24*3600 ;


if (isset($_COOKIE['vtr'.$id.'['.$date])) {
   unset($_COOKIE['vtr'.$id.']['.$date]);
}
else {
  setcookie('vtr'.$id.'['.$date.']', $id, time()+$expire);
}



?>
