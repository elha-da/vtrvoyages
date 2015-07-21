<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>abriès, hautes-alpes, queyras</title>
    <meta name="description" content="petite station des hautes-alpes nichée au coeur du queyras, ski alpin et ski de fond" />
    <link rel="alternate" hreflang="fr" href="http://www.vtr-voyages.fr/station-ski/abries" />
    <link rel="alternate" hreflang="en" href="http://www.vtr-voyages.com/station-ski/abries" />
    <link rel="alternate" hreflang="x-default" href="http://www.vtr-voyages.fr/station-ski/abries" />
    
    
    <link rel="stylesheet" href="http://www.vtr-voyages.fr/css/5e48888.css" />
    <!--    <link rel="stylesheet" type="text/css" href="css/style.css" /> -->

    <link rel="icon" type="image/x-icon" href="http://www.vtr-voyages.fr/favicon.ico" />
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="initial-scale=1.0">
  </head>
  <body>
    
    <header>
      <div id="logo" align="center">
	<div class="logo">
	  <div> 
	    <a href="/"><img src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/images/vtr-voyages-logo.png" border="0" /></a>
	    <div class="infosclients">conseils & réservations<span class="tel"><a href="tel:+33467583636">04 67 58 36 36</a></span></div>
	  </div>
	  <div class="drapeau">
	    <a href="http://www.vtr-voyages.com/"><img width="16" height="11" src="http://img1.vtr-voyages.net/img/w16h11/flag-en.png"/></a>
	  </div>
	</div>
      </div>

      <div class="aff_slider" onmouseover="mouseInBanner=true" onmouseout="mouseInBanner=false">
	<a id="header-link" href="/" style="text-decoration: none;">
	  <div style="height: 300px; width: 100%;" id="header2015">
	    <div id="grand_splash_text"></div>
	  </div>
	</a>
	<div id="header-arrows">
	  <span style="cursor:pointer;" onclick="decrement_disp_idx();cycle_head();return false;">&lt;</span>
	  <span style="cursor:pointer;" onclick="increment_disp_idx(true);cycle_head();return false;">&gt;</span>
	</div>
	<style type="text/css">
	  #header2015{display:block;height:300px;width:100%;background-position:center;background-repeat:no-repeat}#header-arrows{display:none;margin-top:-3em;margin-left:95%;font-weight:700;text-shadow:0 0 1em #ccc}#header-arrows>span{background-color:rgba(240,240,240,.6);border-radius:1em}#grand_splash_text{padding-top:155px;margin-left:55%;font:400 2.5em Impact;color:#FFF;text-transform:uppercase;text-shadow:3px 3px 1px #333;text-decoration:none}
	</style>
	<script type="text/javascript">
	  var mouseInBanner= false;
	  var setup = JSON.parse('[{"title_en":" ","subtitle_en":"","link_en":"\/sejours-ski\/ski-tout-compris?utm_medium=image&utm_source=header&utm_campaign=headerEarlySki","photo_en":"http:\/\/img4.vtr-voyages.net\/img\/w0h300\/blocs\/header-14358472524header_ski_early.jpg","title_fr":" ","subtitle_fr":"earlybooking ski 2015-2016","link_fr":"\/sejours-ski\/ski-tout-compris?utm_medium=image&utm_source=header&utm_campaign=headerEarlySki","photo_fr":"http:\/\/img4.vtr-voyages.net\/img\/w0h300\/blocs\/header-14358472524header_ski_early.jpg","alt_fr":"","alt_en":""}]');
	  function increment_disp_idx(is_user_called){
	  if(!mouseInBanner || is_user_called){
	  disp_idx++;
	  if(disp_idx > setup.length - 1){
	  disp_idx = 0; //back to start
	  }
	  }
	  }
	  function decrement_disp_idx(){
	  if(disp_idx==0){
	  disp_idx= setup.length-1;
	  }
	  else{
	  disp_idx--;
	  }
	  }
	  var disp_idx = 0;//this controls what we show
	  var lang = 'fr';
	  function cycle_head(){
	  //document.getElementById("cur_header_disp").innerHTML= disp_idx+1; document.getElementById("max_header_disp").innerHTML= setup.length;
	  document.getElementById("header2015").style.backgroundImage = "url('"+setup[disp_idx]["photo_"+lang]+"')";
	  document.getElementById("grand_splash_text").innerHTML = setup[disp_idx]["title_"+lang];
	  document.getElementById("header-link").setAttribute("href", setup[disp_idx]["link_"+lang]);
	  increment_disp_idx(false);
	  }
	  cycle_head();
	  if(setup.length > 1) {
	  document.getElementById("header-arrows").style.display = "initial";
	  setInterval(cycle_head, 5111);
	  }
	  
	</script>
      </div>


      <nav>
	<div class="vignettes_menu">
	  <a href="http://www.vtr-voyages.fr/sejours-ski">
	    <img src="http://img1.vtr-voyages.net/img/w136h68/vignettes/sejours-ski.jpg" />
	  </a>
	  <a href="http://www.vtr-voyages.fr/sejours-juniors">
	    <img src="http://img2.vtr-voyages.net/img/w136h68/vignettes/sejours-juniors.jpg" />
	  </a>
	  <a href="http://www.vtr-voyages.fr/sejours-evenements">
	    <img src="http://img3.vtr-voyages.net/img/w136h68/vignettes/sejours-evenements.jpg" />
	  </a>
	  <a href="http://www.vtr-voyages.fr/sejours-france">
	    <img src="http://img4.vtr-voyages.net/img/w136h68/vignettes/sejours-france.jpg" />
	  </a>
	  <a href="http://www.vtr-voyages.fr/sejours-monde">
	    <img src="http://img3.vtr-voyages.net/img/w136h68/vignettes/sejours-monde.jpg" />
	  </a>
	  <a href="http://www.vtr-voyages.fr/sejours-sportifs">
	    <img src="http://img2.vtr-voyages.net/img/w136h68/vignettes/sejours-sportifs.jpg" />
	  </a>
	  <a href="http://www.vtr-voyages.fr/page/devis-groupes">
	    <img src="http://img4.vtr-voyages.net/img/w136h68/vignettes/devis-groupes.jpg" />
	  </a>
	  <p class="clear"></p>
	</div>

	<div class="navbar">
	  <div class="navbar-inner">
	    <div class="container">
	      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	      </a>
	      <a class="brand" data-toggle="collapse" data-target=".nav-collapse">VTR Voyages</a>
	      <div class="nav-collapse collapse">
		<ul class="nav"><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle plus" href="#"><b class="caret">+</b></a><a data-slug="ski" data-hover="dropdown" class="dropdown-toggle" href="/sejours-ski"><h3>Séjours Ski</h3></a><ul class="dropdown-menu"><li><a href="/sejours-ski/location">Location</a></li><li><a href="/sejours-ski/hebergement-forfait">Hébergement + Forfait</a></li><li><a href="/sejours-ski/hebergement-forfait-materiel-1">Hébergement + Forfait + Matériel</a></li><li><a href="/sejours-ski/ski-tout-compris">Ski tout compris</a></li><li><a href="/sejours-ski/hotels-et-villages-clubs">Hôtels et Villages Clubs</a></li><li><a href="/sejours-ski/hebergement-forfait-cours-de-ski">Hébergement + Forfait + Cours de Ski</a></li><li><a href="/sejours-ski/transport-hebergement-forfait">Transport + Hébergement + Forfait</a></li><li><a href="/sejours-ski/residences-avec-pension-au-restaurant">Résidences avec pension au restaurant</a></li><li><a href="/sejours-ski/promotions">Promotions</a></li><li><a href="/sejours-ski/week-end-ski">Week-end Ski</a></li><li><a href="/sejours-ski/noel-et-nouvel-an">Noel et Nouvel An</a></li><li><a href="/sejours-ski/vacances-de-fevrier-2">Vacances de Février</a></li><li><a href="/sejours-ski/vacances-de-paques-2">Vacances de Pâques</a></li><li><a href="/sejours-ski/a-l-etranger">A l'étranger</a></li><li><a href="/sejours-ski/special-chalets">Special Chalets</a></li></ul></li></ul><ul class="nav"><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle plus" href="#"><b class="caret">+</b></a><a data-slug="juniors" data-hover="dropdown" class="dropdown-toggle" href="/sejours-juniors"><h3>Séjours Juniors</h3></a><ul class="dropdown-menu"><li><a href="/sejours-juniors/colonies-de-vacances-fevrier">Colonies de Vacances Février</a></li><li><a href="/sejours-juniors/colonies-de-vacances-paques">Colonies de Vacances Pâques</a></li><li><a href="/sejours-juniors/colonies-de-vacances-ete">Colonies de Vacances Eté</a></li><li><a href="/sejours-juniors/colonies-de-vacances-toussaint">Colonies de Vacances Toussaint</a></li><li><a href="/sejours-juniors/colonies-de-vacances-noel">Colonies de Vacances Noël</a></li></ul></li></ul><ul class="nav"><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle plus" href="#"><b class="caret">+</b></a><a data-slug="evenements" data-hover="dropdown" class="dropdown-toggle" href="/sejours-evenements"><h3>Evènements</h3></a><ul class="dropdown-menu"><li><a href="/sejours-evenements/parcs-d-attractions">Parcs d'Attractions</a></li><li><a href="/sejours-evenements/fise-2015">FISE 2015</a></li><li><a href="/sejours-evenements/week-end-saint-valentin-2016">Week end Saint-Valentin 2016</a></li></ul></li></ul><ul class="nav"><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle plus" href="#"><b class="caret">+</b></a><a data-slug="france" data-hover="dropdown" class="dropdown-toggle" href="/sejours-france"><h3>France</h3></a><ul class="dropdown-menu"><li><a href="/sejours-france/location-1">Location</a></li><li><a href="/sejours-france/hotellerie-de-plein-air">Hôtellerie de Plein Air</a></li><li><a href="/sejours-france/villages-clubs">Villages Clubs</a></li><li><a href="/sejours-france/vacances-de-juillet">Vacances de Juillet</a></li><li><a href="/sejours-france/vacances-d-aout">Vacances d'Août</a></li><li><a href="/sejours-france/week-ends-et-courts-sejours">Week-ends et Courts Séjours</a></li></ul></li></ul><ul class="nav"><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle plus" href="#"><b class="caret">+</b></a><a data-slug="monde" data-hover="dropdown" class="dropdown-toggle" href="/sejours-monde"><h3>Monde</h3></a><ul class="dropdown-menu"><li><a href="/sejours-monde/hebergement-seul">Hébergement seul</a></li><li><a href="/sejours-monde/vol-hotel">Vol + Hôtel</a></li><li><a href="/sejours-monde/circuit">Circuit</a></li><li><a href="/sejours-monde/week-ends-et-courts-sejours-1">Week-ends et Courts séjours</a></li></ul></li></ul><ul class="nav"><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle plus" href="#"><b class="caret">+</b></a><a data-slug="sportifs" data-hover="dropdown" class="dropdown-toggle" href="/sejours-sportifs"><h3>Séjours Sportifs</h3></a><ul class="dropdown-menu"><li><a href="/sejours-sportifs/sejours-aquatiques">Séjours Aquatiques</a></li><li><a href="/sejours-sportifs/sejours-aeriens">Séjours Aériens</a></li><li><a href="/sejours-sportifs/sejours-kitesurf">Séjours Kitesurf</a></li><li><a href="/sejours-sportifs/sejours-montagne">Séjours Montagne</a></li><li><a href="/sejours-sportifs/combines">Séjours Combinés</a></li></ul></li></ul>
		<ul class="nav">
		  <li class="dropdown">
		    <a data-hover="dropdown" class="dropdown-toggle" href="http://www.vtr-voyages.fr/page/devis-groupes">
		      <h3>Devis Groupes</h3>
		    </a>
		  </li>
		</ul>
	      </div>
	    </div>
	  </div>
	</div>

    </nav>	</header>
    
    <div class="container-fluid">
      
      <aside class="span3">
	<form class="form-horizontal" action="/recherche">
	  <div class="moteur_recherche">
	    <span class="input-append">
	      <p>Recherche</p>
	      <input name="query" placeholder="Ex : Tignes" type="text" value="">
	      <button type="submit" class="btn">Go!</button>
	    </span>						
	  </div>
	</form>

	<div class="recherche">
	  <fieldset>
	    
	    <form method="post" class="form-horizontal" action="http://www.vtr-voyages.fr/recherche-detail">

	      <div class="control-group champ_pays">
		
		<div class="controls">
		  <select id="search_type_pays" name="search_type[pays]" required="required"><option value="12">Allemagne</option><option value="15">Andorre</option><option value="5">Angleterre</option><option value="7">Croatie</option><option value="19">Cuba</option><option value="23">Emirats Arabes Unis</option><option value="4">Espagne</option><option value="20">Etats-Unis</option><option value="1" selected="selected">France</option><option value="8">Grèce</option><option value="22">Inde</option><option value="2">Italie</option><option value="11">Malte</option><option value="9">Maroc</option><option value="13">Pays Bas</option><option value="21">Pérou</option><option value="16">République Tchèque</option><option value="18">Sénégal</option><option value="3">Suisse</option><option value="24">Tanzanie</option><option value="17">Thaïlande</option><option value="25">Tunisie</option><option value="26">Turquie</option></select>
		</div>
	      </div>

	      <div class="control-group champ_region">
		
		<div class="controls">
		  <select id="search_type_region" name="search_type[region]"><option value="">Région</option><option value="5">Alsace</option><option value="6">Aquitaine</option><option value="7">Auvergne</option><option value="8">Basse Normandie</option><option value="9">Bourgogne</option><option value="10">Bretagne</option><option value="11">Centre</option><option value="12">Champagne-Ardenne</option><option value="13">Corse</option><option value="14">Franche-Comté</option><option value="27">Haute-Normandie</option><option value="16">Ile-de-France</option><option value="17">Languedoc-Roussillon</option><option value="18">Limousin</option><option value="19">Lorraine</option><option value="20">Midi-Pyrénées</option><option value="21">Nord-Pas-de-Calais</option><option value="22">Pays de la Loire</option><option value="23">Picardie</option><option value="24">Poitou-Charentes</option><option value="2">Provence-Alpes-Côte d&#039;Azur</option><option value="1">Rhône-Alpes</option></select>
		</div>
	      </div>

	      <div class="control-group ville_station">
		
		<div class="controls">
		  <select id="search_type_ville" name="search_type[ville]"><option value="">Ville/Station</option><option value="1749">Abriès</option><option value="34165">Agadir</option><option value="34128">Agay</option><option value="12916">Agde</option><option value="11137">Aigues-Mortes</option><option value="34017">Aime-la-Plagne</option><option value="4337">Aix-en-Provence</option><option value="28301">Albiez-Montrond</option><option value="34194">Alcoceber</option><option value="25623">Alénya</option><option value="1562">Allos</option><option value="4">Alpe d&#039;Huez</option><option value="34109">Altea</option><option value="24718">Anglet</option><option value="1933">Antibes</option><option value="34089">Arc 1600</option><option value="34090">Arc 1800</option><option value="34091">Arc 1950</option><option value="34092">Arc 2000</option><option value="24731">Arcangues</option><option value="34019">Arêches Beaufort</option><option value="12439">Arès</option><option value="25628">Argelès-sur-Mer</option><option value="6483">Argentat</option><option value="34068">Argentière</option><option value="4340">Arles</option><option value="25236">Arreau</option><option value="34174">Arusha</option><option value="1754">Arvieux</option><option value="2109">Aubenas</option><option value="4476">Auberville</option><option value="31707">Aubignan</option><option value="10860">Audierne</option><option value="15049">Aureilhan</option><option value="14049">Auris</option><option value="14050">Autrans</option><option value="34020">Avoriaz</option><option value="2898">Ax-les-Thermes</option><option value="13781">Azay-le-Rideau</option><option value="20488">Baden</option><option value="12935">Balaruc-les-Bains</option><option value="34166">Bangkok</option><option value="16939">Barbaste</option><option value="34123">Barcelone</option><option value="7">Bardonecchia</option><option value="2903">Barjac</option><option value="16131">Batz-sur-Mer</option><option value="31581">Bauduen</option><option value="15223">Bayonne / Ondres</option><option value="6491">Beaulieu-sur-Dordogne</option><option value="7154">Beaune Levernois</option><option value="1939">Beausoleil</option><option value="34133">Beg-Meil</option><option value="6776">Belgodère</option><option value="34021">Belle Plagne</option><option value="28575">Bellevaux</option><option value="10863">Bénodet</option><option value="8421">Bergerac</option><option value="26373">Bergheim</option><option value="12941">Béziers</option><option value="24808">Biarritz</option><option value="24811">Bidart</option><option value="15075">Biscarrosse</option><option value="34176">Bodrum</option><option value="31584">Bormes-les-Mimosas</option><option value="24424">Bourboule</option><option value="14072">Bourgoin-Jallieu</option><option value="34098">Bravone</option><option value="31855">Bretignolles-sur-Mer</option><option value="4537">Bréville-les-Monts</option><option value="28327">Brides-les-Bains</option><option value="12947">Brissac</option><option value="32551">Bussang</option><option value="4544">Cabourg</option><option value="4351">Cabriès</option><option value="1952">Cagnes-sur-Mer</option><option value="16672">Cajarc</option><option value="34185">Calarossa</option><option value="6791">Calvi</option><option value="11185">Calvisson</option><option value="34207">Cambrils</option><option value="13253">Cancale</option><option value="25649">Canet-en-Roussillon</option><option value="1954">Cannes</option><option value="34195">Cannes / Mandelieu</option><option value="34094">Cap Coz</option><option value="34101">Cap d&#039;Agde</option><option value="1956">Cap-d&#039;Ail</option><option value="15093">Capbreton</option><option value="12513">Carcans-Maubuisson</option><option value="3682">Carcassonne</option><option value="4353">Carnoux-en-Provence</option><option value="4354">Carry-le-Rouet</option><option value="8455">Carsac-Aillac</option><option value="16966">Castelmoron-sur-Lot</option><option value="3688">Castelnaudary</option><option value="12959">Castries</option><option value="25333">Cauterets</option><option value="31595">Cavalaire-sur-Mer</option><option value="25659">Cerbère</option><option value="6827">Cervione</option><option value="34023">Chabanon</option><option value="28593">Chamonix-Mont-Blanc</option><option value="28338">Champagny-en-Vanoise</option><option value="14087">Chamrousse</option><option value="9011">Chapelle-des-Bois</option><option value="34067">Châtel</option><option value="13830">Chinon</option><option value="24866">Ciboure</option><option value="25664">Collioure</option><option value="5863">Colombiers</option><option value="28610">Combloux</option><option value="28678">Contamines-Montjoie</option><option value="34180">Corse</option><option value="34012">Courchevel</option><option value="4611">Courseulles-sur-Mer</option><option value="34145">Crète</option><option value="31622">Croix-Valmer</option><option value="30861">Crotoy</option><option value="34167">Dakar</option><option value="15114">Dax</option><option value="4637">Deauville</option><option value="34171">Delhi</option><option value="9574">Die</option><option value="7817">Dinan</option><option value="34175">Djerba</option><option value="34138">Dordogne</option><option value="34024">Doucy Combelouvière / Valmorel</option><option value="34173">Dubaï</option><option value="6541">Égletons</option><option value="34209">El Tarter</option><option value="34134">Empuriabrava</option><option value="4122">Entraygues-sur-Truyère</option><option value="28638">Évian-les-Bains</option><option value="8598">Eyzies-de-Tayac</option><option value="12987">Fabrègues</option><option value="31607">Fayence</option><option value="34025">Flaine</option><option value="34027">Font Romeu</option><option value="10905">Fouesnant</option><option value="31613">Fréjus</option><option value="12997">Frontignan</option><option value="31615">Gassin</option><option value="11239">Gaujac</option><option value="32650">Gérardmer</option><option value="18453">Giffaumont-Champaubert</option><option value="16742">Gramat</option><option value="28674">Grand-Bornand</option><option value="1988">Grasse</option><option value="1618">Gréoux-les-Bains</option><option value="14169">Gresse-en-Vercors</option><option value="31618">Grimaud</option><option value="3773">Gruissan</option><option value="20545">Guidel Plages</option><option value="34074">Guillaumes</option><option value="12604">Gujan-Mestras</option><option value="34028">Guzet</option><option value="28376">Hauteluce</option><option value="34179">Hautes-Alpes</option><option value="17869">Hauteville-sur-Mer</option><option value="24934">Hendaye</option><option value="34139">Hossegor</option><option value="175">Hotonnes</option><option value="28680">Houches</option><option value="4729">Houlgate</option><option value="12607">Hourtin</option><option value="31619">Hyères</option><option value="34095">Ile d&#039;Oléron</option><option value="34096">Ile de Ré</option><option value="5914">Île-d&#039;Aix</option><option value="31750">Isle-sur-la-Sorgue</option><option value="1992">Isola</option><option value="5917">Jonzac</option><option value="34130">Juan les Pins</option><option value="34137">Kerjouanno</option><option value="16347">La Baule</option><option value="34029">La Bresse</option><option value="34030">La Clusaz</option><option value="34031">La Feclaz</option><option value="34102">La Grande Motte</option><option value="34168">La Havane</option><option value="34033">La Joue du Loup</option><option value="31625">La Londe-les-Maures</option><option value="17255">La Malène</option><option value="34081">La Mongie</option><option value="34034">La Norma</option><option value="3788">La Palme</option><option value="34097">La Palmyre</option><option value="34216">La Pommeraye</option><option value="5941">La Rochelle</option><option value="34082">La Rosière</option><option value="34035">La Tania</option><option value="34036">La Toussuire</option><option value="34131">La Tranche Sur Mer</option><option value="31755">La-Roque-sur-Pernes</option><option value="28774">Lac d&#039;Annecy / Saint-Jorioz</option><option value="12622">Lacanau</option><option value="13022">Lattes</option><option value="1642">Lauzet-Ubaye</option><option value="34037">Le Corbier</option><option value="16210">Le Croisic</option><option value="11266">Le Grau-du-Roi</option><option value="34182">Le Laouzas</option><option value="31636">Le Lavandou</option><option value="16216">Le Pouliguen</option><option value="23892">Le Touquet-Paris-Plage</option><option value="13365">Le Tronchet</option><option value="12654">Le Verdon-sur-Mer</option><option value="34140">Le Vigan</option><option value="15175">Léon</option><option value="34038">Les 2 Alpes</option><option value="34039">Les Angles</option><option value="34069">Les Bottières</option><option value="34040">Les Carroz d&#039;Araches</option><option value="34154">Les Epesses</option><option value="28679">Les Gets</option><option value="34127">Les Issambres</option><option value="34041">Les Karellis</option><option value="34042">Les Menuires</option><option value="1832">Les Orres</option><option value="31956">Les Sables d&#039;Olonne</option><option value="34043">Les Saisies</option><option value="3821">Leucate</option><option value="34170">Lima</option><option value="15180">Lit-et-Mixe</option><option value="10987">Locmaria-Plouzané</option><option value="31958">Longeville-sur-Mer</option><option value="34169">Los Angeles</option><option value="25459">Loudenvielle</option><option value="34070">Luchon</option><option value="34188">Lunel / Saint-Christol</option><option value="26832">Lyon</option><option value="31770">Malaucène</option><option value="2018">Mandelieu-la-Napoule</option><option value="28694">Manigod</option><option value="12230">Marseillan</option><option value="5965">Mathes</option><option value="28706">Megève</option><option value="34150">Mellieha</option><option value="2021">Menton</option><option value="34044">Méribel</option><option value="34045">Méribel Mottaret</option><option value="34155">Méribel-Village</option><option value="16231">Mesquer</option><option value="7496">Messanges</option><option value="9258">Métabief</option><option value="13057">Mèze</option><option value="15202">Mimizan</option><option value="15205">Moliets-et-Maa</option><option value="1837">Molines-en-Queyras</option><option value="17082">Monflanquin</option><option value="13451">Mont Saint-Michel / Roz-sur-Couesnon</option><option value="24449">Mont-Dore</option><option value="31650">Montauroux</option><option value="34046">Montchavin les Coches</option><option value="1843">Montgenèvre</option><option value="8648">Montignac</option><option value="21598">Montigny-en-Morvan</option><option value="13068">Montpellier</option><option value="13164">Montpellier / St-Jean-de-Védas</option><option value="34203">Montréal du Gers</option><option value="26550">Mooslargue</option><option value="34093">Morgat</option><option value="28723">Morillon</option><option value="28724">Morzine</option><option value="34211">Mouans Sartoux</option><option value="5">Mûr de Bretagne</option><option value="24495">Murol</option><option value="34103">Narbonne Plage</option><option value="34087">Nendaz</option><option value="2025">Nice</option><option value="11311">Nîmes</option><option value="34047">Notre Dame de Bellecombe</option><option value="31985">Notre-Dame-de-Monts</option><option value="9705">Nyons</option><option value="31987">Olonne-sur-Mer</option><option value="1852">Orcières</option><option value="28449">Orelle</option><option value="34048">Oz en Oisans</option><option value="13085">Palavas-les-Flots</option><option value="4410">Paradou</option><option value="33632">Paris / Chevilly-Larue</option><option value="34161">Pas de la Case</option><option value="34193">Pays de Fayence / Tourrettes</option><option value="34049">Peisey-Vallandry</option><option value="7944">Perros-Guirec</option><option value="34050">Peyragudes</option><option value="34051">Piau Engaly</option><option value="34052">Plagne 1800</option><option value="34053">Plagne Bellecote</option><option value="34054">Plagne Centre</option><option value="34055">Plagne Montalbert</option><option value="34056">Plagne Soleil</option><option value="34157">Plagne Villages</option><option value="22791">Plailly</option><option value="34112">Platja d&#039;Aro</option><option value="11035">Plouescat</option><option value="11038">Plougasnou</option><option value="11040">Plougonvelin</option><option value="6981">Poggio-Mezzana</option><option value="32234">Poitiers</option><option value="16255">Pornic</option><option value="16256">Pornichet</option><option value="25707">Port Barcarès</option><option value="34204">Port Grimaud</option><option value="4933">Port-en-Bessin-Huppain</option><option value="3905">Port-la-Nouvelle</option><option value="34057">Pra Loup</option><option value="28455">Pralognan-la-Vanoise</option><option value="34079">Prapoutel Les 7 Laux</option><option value="16835">Prayssac</option><option value="28742">Praz-sur-Arly</option><option value="34142">Primosten</option><option value="6">Puy Saint Vincent</option><option value="34202">Pyla sur Mer</option><option value="34077">Pyrénées 2000</option><option value="20667">Quéven</option><option value="20668">Quiberon</option><option value="11329">Remoulins</option><option value="16029">Retournac</option><option value="1873">Risoul</option><option value="5654">Rivières</option><option value="20676">Rochefort-en-Terre</option><option value="34132">Ronce les Bains</option><option value="2040">Roquebrune-Cap-Martin</option><option value="31669">Roquebrune-sur-Argens</option><option value="11899">Rouffiac-Tolosan</option><option value="14798">Rousses</option><option value="34152">Rust</option><option value="34177">Sables d&#039;Or les Pins</option><option value="34129">Saint Aygulf</option><option value="34058">Saint Jean d&#039;Arves</option><option value="34108">Saint Pierre la Mer</option><option value="13140">Saint-Bauzille-de-Putois</option><option value="16277">Saint-Brevin</option><option value="13463">Saint-Briac-sur-Mer</option><option value="34104">Saint-Cyprien</option><option value="1707">Saint-Étienne-les-Orgues</option><option value="7054">Saint-Florent</option><option value="28481">Saint-François-Longchamp</option><option value="6091">Saint-Georges-de-Didonne</option><option value="34071">Saint-Gervais-les-Bains</option><option value="32024">Saint-Hilaire-de-Riez</option><option value="25166">Saint-Jean-de-Luz</option><option value="32030">Saint-Jean-de-Monts</option><option value="25167">Saint-Jean-Pied-de-Port</option><option value="25576">Saint-Lary-Soulan</option><option value="2061">Saint-Laurent-du-Var</option><option value="13493">Saint-Malo</option><option value="16301">Saint-Michel-Chef-Chef</option><option value="11103">Saint-Nic</option><option value="6127">Saint-Palais-sur-Mer</option><option value="7671">Saint-Philibert</option><option value="11105">Saint-Pol-de-Léon</option><option value="8842">Saint-Raphaël</option><option value="28512">Saint-Sorlin-d&#039;Arves</option><option value="34106">Sainte Marie la Mer</option><option value="28515">Sainte-Foy-Tarentaise</option><option value="31689">Sainte-Maxime</option><option value="34117">Salou</option><option value="13015">Salvetat-sur-Agout</option><option value="28750">Samoëns</option><option value="34196">San Mauro Mare</option><option value="34144">San Miguel</option><option value="7017">San-Nicolao</option><option value="31672">Sanary-sur-Mer</option><option value="7026">Santa-Maria-Poggio</option><option value="8709">Sarlat-la-Canéda</option><option value="11345">Sauve</option><option value="34164">Semnoz</option><option value="1882">Serre Chevalier</option><option value="13131">Sète</option><option value="34183">Séville</option><option value="31630">Seyne-sur-Mer</option><option value="3952">Sigean</option><option value="31677">Six-Fours-les-Plages</option><option value="34208">Soldeu</option><option value="31679">Solliès-Toucas</option><option value="12776">Soulac-sur-Mer</option><option value="15282">Soustons</option><option value="34073">St Lary</option><option value="25704">St-Cyprien / Latour-Bas-Elne</option><option value="34197">Ste-Maxime / Le Plan de la Tour</option><option value="26275">Strasbourg</option><option value="34060">Super Besse</option><option value="34217">Super Lioran</option><option value="34061">Superdévoluy</option><option value="7057">Taglio-Isolaccio</option><option value="32067">Talmont-Saint-Hilaire</option><option value="15317">Tarnos</option><option value="34184">Ténérife</option><option value="28520">Termignon la Vanoise</option><option value="2072">Théoule-sur-Mer</option><option value="1">Tignes</option><option value="25810">Torreilles</option><option value="31401">Trébas</option><option value="8113">Trégastel</option><option value="11129">Trégunc</option><option value="29470">Trouville</option><option value="25194">Urrugne</option><option value="11440">Uzès</option><option value="34062">Val Cenis</option><option value="3">Val d&#039;Isère</option><option value="34063">Val Louron</option><option value="34064">Val Thorens</option><option value="34160">Valberg</option><option value="34189">Valence</option><option value="34065">Valfréjus</option><option value="34124">Valjoly</option><option value="34178">Vallée de l&#039;Ubaye</option><option value="34151">Vallée de la Durance</option><option value="28530">Valloire</option><option value="2404">Vallon-Pont-d&#039;Arc</option><option value="28792">Vallorcine</option><option value="28531">Valmeinier</option><option value="34075">Valmorel</option><option value="20641">Vannes / Plescop</option><option value="1922">Vars</option><option value="34181">Vars Sainte Marie</option><option value="14489">Vaujany</option><option value="34105">Vendres Plage</option><option value="34199">Vernet Les Bains</option><option value="34088">Veysonnaz</option><option value="13205">Vic-la-Gardiole</option><option value="34156">Vieux Boucau</option><option value="2089">Villefranche-sur-Mer</option><option value="2091">Villeneuve-Loubet</option><option value="5139">Villers-sur-Mer</option><option value="2421">Vogüé</option><option value="29503">Yerville</option></select>
		</div>
	      </div>

	      <div class="control-group champ_pays">
		
		<div class="controls">
		  <select id="search_type_theme" name="search_type[theme]"><option value="">Formule</option><optgroup label="Séjours Ski"><option value="9">Location</option><option value="10">Hébergement + Forfait</option><option value="3">Hébergement + Forfait + Matériel</option><option value="12">Ski tout compris</option><option value="8">Hôtels et Villages Clubs</option><option value="11">Hébergement + Forfait + Cours de Ski</option><option value="61">Transport + Hébergement + Forfait</option><option value="24">Résidences avec pension au restaurant</option><option value="45">Promotions</option><option value="7">Week-end Ski</option><option value="41">Noel et Nouvel An</option><option value="42">Vacances de Février</option><option value="51">Vacances de Pâques</option><option value="46">A l&#039;étranger</option><option value="43">Special Chalets</option></optgroup><optgroup label="Séjours Juniors"><option value="13">Colonies de Vacances Février</option><option value="18">Colonies de Vacances Pâques</option><option value="17">Colonies de Vacances Eté</option><option value="5">Colonies de Vacances Toussaint</option><option value="16">Colonies de Vacances Noël</option></optgroup><optgroup label="Evènements"><option value="44">Parcs d&#039;Attractions</option><option value="48">FISE 2015</option><option value="63">Week end Saint-Valentin 2016</option></optgroup><optgroup label="France"><option value="21">Location</option><option value="25">Hôtellerie de Plein Air</option><option value="34">Villages Clubs</option><option value="59">Vacances de Juillet</option><option value="60">Vacances d&#039;Août</option><option value="47">Week-ends et Courts Séjours</option></optgroup><optgroup label="Monde"><option value="52">Hébergement seul</option><option value="53">Vol + Hôtel</option><option value="54">Circuit</option><option value="56">Week-ends et Courts séjours</option></optgroup><optgroup label="Séjours Sportifs"><option value="27">Séjours Aquatiques</option><option value="33">Séjours Aériens</option><option value="57">Séjours Kitesurf</option><option value="58">Séjours Montagne</option><option value="37">Séjours Combinés</option></optgroup></select>
		</div>
	      </div>
	      
	      <div class="control-group duree_sejour">
		
		<div class="controls">
		  <select id="search_type_duree_sejour" name="search_type[duree_sejour]"><option value="">Durée du séjour</option><option value="1">Week-ends &amp; Court-Séjours</option><option value="2">1 à 2 semaines</option><option value="3">Plus de 15 jours</option></select>
		</div>
	      </div>

	      <div class="control-group typehebergement">
		
		<div class="controls">
		  <select id="search_type_typehebergement" name="search_type[typehebergement]"><option value="">Type d&#039;hébergement</option></select>
		</div>
	      </div>

	      <div class="control-group date_depart">
		
		<label class="control-label" for="search_type_date_depart">Date de départ</label>
		<input type="text" id="search_type_date_depart" name="search_type[date_depart]"    class="date" style="width:113px" />
	      </div>

	      <div class="control-group date_flexible">
		
		<label class="control-label" for="search_type_date_flexible">Date flexible</label>
		<input type="checkbox" id="search_type_date_flexible" name="search_type[date_flexible]" value="1" />
	      </div>

	      <div class="control-group">
		<button type="submit" class="btn">
		  <i class="icon-search"></i> 
		  Recherche			</button>
		<input type="hidden" id="search_type__token" name="search_type[_token]" value="2f79ac8660bb38044afaf554dc9bdb1c6e9479eb" />
	      </div>
	      
	    </form>
	  </fieldset>


	</div>


	<div class="noeljourdelan aff_slider" style="background-color: rgb(217, 236, 241); margin-bottom: 10px; margin-top: 10px; height: initial;">
	  <div style="margin: 5px;">
	    <a href="http://www.vtr-voyages.fr/stations-ski">Toutes nos stations de Ski</a><br>
	    <b><a href="http://www.vtr-voyages.fr/stations-ski">Plus de 120 stations au choix</a></b>
	  </div>
	</div>
	<div class="billet_avion_marketing noeljourdelan">
	  <div>
	    <u><a href="http://www.vtr-voyages.fr/sejours-france/location-1">Locations été 2015</a></u><br>
	    <b><a href="http://www.vtr-voyages.fr/sejours-france/location-1">Je découvre !</a></b>
	  </div>
	</div>
	<a href="/sejours-france/location-1">
	  <figure>
	    <img src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/images/left-nav/location-vacances-ete.jpg" class="marketing" border="0" alt="Location vacances été 2015">
	  </figure>
	</a>
	<div class="billet_avion_marketing noeljourdelan">
	  <div>
	    <u><a href="http://www.vtr-voyages.fr/sejours-france/villages-clubs">Clubs vacances été</a></u><br>
	    <b><a href="http://www.vtr-voyages.fr/sejours-france/villages-clubs">Demi-pension ou pension complète</a></b>
	  </div>
	</div>
	<a href="http://www.vtr-voyages.fr/sejours-france/villages-clubs">
	  <figure>
	    <img src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/images/left-nav/vv-ete.jpg" class="marketing" border="0" alt="Clubs vacances été 2015">
	  </figure>
	</a>
	<div class="billet_avion_marketing noeljourdelan">
	  <div>
	    <u><a href="http://www.vtr-voyages.fr/sejours-ski/ski-tout-compris">Ski tout compris</a></u><br>
	    <b><a href="http://www.vtr-voyages.fr/sejours-ski/ski-tout-compris">On a même fait les courses !</a></b>
	  </div>
	</div>
	<a href="http://www.vtr-voyages.fr/sejours-ski/ski-tout-compris">
	  <figure>
	    <img src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/images/left-nav/Bloc-ski-tout-compris.jpg" class="marketing" border="0" alt="Ski tout compris 2015">
	  </figure>
	</a>
	<div class="billet_avion_marketing noeljourdelan">
	  <div>
	    <u><a href="http://www.vtr-voyages.fr/theme/location-montagne-ete">Location Montagne été</a></u><br>
	    <b><a href="http://www.vtr-voyages.fr/theme/location-montagne-ete">Prenez un bol d'air pur !</a></b>
	  </div>
	</div>
	<a href="http://www.vtr-voyages.fr/theme/location-montagne-ete">
	  <figure>
	    <img src="http://img3.vtr-voyages.net/img/w231h155/blocs/left-14278809085location_montagne_ete_jpg" class="marketing" border="0" alt="Location été à la montagne">
	  </figure>
	</a>
	<div class="billet_avion_marketing noeljourdelan">
	  <div>
	    <u><a href="http://www.vtr-voyages.fr/sejours-juniors/colonies-de-vacances-ete">Colonies d'été</a></u><br>
	    <b><a href="http://www.vtr-voyages.fr/sejours-juniors/colonies-de-vacances-ete">Faites plaisir à vos enfants !</a></b>
	  </div>
	</div>
	<a href="http://www.vtr-voyages.fr/sejours-juniors/colonies-de-vacances-ete">
	  <figure>
	    <img src="http://img3.vtr-voyages.net/img/w231h155/blocs/-14310093512left_ju_ete.jpg" class="marketing" border="0" alt="colonies de vacances été">
	  </figure>
	</a>
	<div class="billet_avion_marketing noeljourdelan">
	  <div>
	    <u><a href="http://www.vtr-voyages.fr/sejours-sportifs/sejours-kitesurf">Séjours Kite Surf</a></u><br>
	    <b><a href="http://www.vtr-voyages.fr/sejours-sportifs/sejours-kitesurf">Stages en Languedoc-Roussillon</a></b>
	  </div>
	</div>
	<a href="http://www.vtr-voyages.fr/sejours-sportifs/sejours-kitesurf">
	  <figure>
	    <img src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/images/left-nav/sejours-kitesurf.jpg" class="marketing" border="0" alt="Stages Kite surf languedoc roussillon">
	  </figure>
	</a>

	<p class="titre_newsletter">Newsletter VTR Voyages</p>
	<div class="box_newsletter">
	  Inscrivez vous à notre Newsletter afin de profiter de nos Bons Plans ainsi que nos Offres Exclusives.		<span id="newsletterResponse"></span>
	  <div class="input-append" id="contentNewsletter">
	    <input class="span2" placeholder="Votre e-mail" id="emailNewsletter" type="text">
	    <button class="btn" type="button" id="btSendEmailNewsletter">S'inscrire</button>
	</div>	</div>
	
	<a href="http://www.vtr-voyages.fr/page/avantages-vtr" rel="nofollow">
	  <figure style="margin-top: 1em;">
	    <img src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/images/left-nav/bloc_panier_fr.png" class="marketing" border="0" alt="Avantages à choisir VTR Voyages" />
	  </figure>
	</a>
      </aside>
      
      <section class="span9 categ_sejours">
        


        
	<div class="bloc_stay_sejour">
	  <ul class="breadcrumb">
	    <li><a href="/">Accueil</a></li>
	  </ul>
	</div>

	<div class="page-description page-header" id="page_description_content" style="overflow: hidden; max-height: 150px">
	  <h1>Abriès</h1>
	  <div class="page-header stays_desc_sejour"><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
	    <html><body><div>Abri&egrave;s est situ&eacute;e au coeur du Queyras, &agrave; 1550m d'altitude. Cette petite station sans pr&eacute;tention vous permettra de d&eacute;connecter de la vie quotidienne, et de pratiquer de nombreuses activit&eacute;s. Vous appr&eacute;cierez son architecture typique des Hautes-Alpes.<div class="clear"></div></div>

		<div>Pour les amateurs de ski alpin, 25km de pistes sont &agrave; votre disposition (1 verte, 3 bleues, 7 rouges, 1 noire). Altitude maximale du domaine : 2450m.&nbsp;</div>

		<div>Ski de fond : 37km de pistes.</div>

		<p>&nbsp;</p></body></html>
	  </div>

	  <h2 class="titre">Domaine Skiable</h2>
	  Queyras
	  
	</div>

	<div id="show_all_description" style="cursor: pointer;">
	  <span id="button_show_all_description" onclick="document.getElementById('page_description_content').style.maxHeight='';var element = document.getElementById('show_all_description');element.parentNode.removeChild(element);	return false;" style="color: #08C;"> [En savoir plus ...] </span>
	  <br>
	  <br>
	</div>
	
	<script type="text/javascript">var criteoItems = [];</script>
	<ul id="liste_sejours_vtr" class="liste_sejours_vtr">

	  <!-- =======================************************   Resultat modifié   ************************======================= --> 	 

          <li id="sejour_resultat" class="produit vignettes">
            <a href="http://www.vtr-voyages.fr/sejours-ski/hebergement-forfait-cours-de-ski/hebergement-forfait-cours-de-ski-superdevoluy-le-bois-d-aurouze-a-superdevoluy">
	      <div class="thumbnail">
                <div id="haut_vignette" class="haut_vignette">
		  <div class="titre_haut_vignette">
                    <span>Puy Saint Vincent </span>
                    <p style="display: inline-block ;">Hautes-Alpes</p>
		    <p id="haut_vignette_categ" class="categ"  style="margin: 1px 0;">Hébergement + Forfait + Matériel</p>
		  </div>
		  
		  <div class="pictos_infos_sejour">
		    <figure>
		      <img src="images/pictos_formules/hebergement.png" border="0" alt="Hébergement" />
		      <figcaption>Hébergement</figcaption>
		    </figure>
		    
		    <figure>
		      <img src="images/pictos_formules/forfait.png" border="0" alt="Forfait" />
		      <figcaption>Forfait</figcaption>
		    </figure>

		    <figure>
		      <img src="images/pictos_formules/materiel.png" border="0" alt="Matériel" />
		      <figcaption>Matériel</figcaption>
		    </figure>
		    
		  </div>
		  
		</div>
                
                <div id="photo_vignette" class="photo_vignette" >
                  <figure>
		    <img src="http://img1.vtr-voyages.net/images/w600h0/hosting/hebergement/8820.jpeg" border="0" alt="HEBERGEMENT + FORFAIT + MATERIEL - PUY ST VINCENT - La Dame Blanche" />

		  </figure>
                </div>

                <div id="caption" class="caption">
		  <div class="titre_caption">
                    <p>La Dame Blanche </p>
		  </div>
		  <div class="votes">
		    <p title="1 étoile">☆</p>
		    <p title="2 étoiles">☆</p>
		    <p title="3 étoiles">☆</p>
		    <p title="4 étoiles">☆</p>
		    <p title="5 étoiles">☆</p>
		  </div>
		  
		  <div class="avis_caption">
		    <a href="">(5 avis)</a>
		  </div>		  

                  <div id="header_infos_sejour" class="header_infos_sejour" style="border-right: none;" >
		    <p id="sejour_categ" class="categ" ><u>Description :</u> </p>
                    <p id="description_categ" class="categ" >
		      Week-ends et Courts Séjours. Descendre l'Hérault en canoë procure à chaque fois des sensations différentes, selon le niveau d'eau, la saison, 
		      l'heure de la journée 
		    </p>
		    <span class="tarifs_caption" onclick="javascript:afficher_cacher('options_infos_sejour');"> Tarifs </span>
                  </div>
                  
                  
		</div>
		
		<div id="prix_sejour" class="prix_sejour" >
		  <div id="vignette_promotions" class="vignette_promotions">
		    <p id="prix_nuits_barre" class="prix_nuits" ><del>287€</del></p>
		    <span id="promo_span">-20%</span>
		  </div>
		  <p id="text_prix" class="prix_nuits">7 nuits à partir de&nbsp;</p>
		  <p id="prix_nuits_sejour" class="prix_nuits">                      
		    <font  >210 €</font> 
		    <small > / pers.</small>
                  </p>      		   
		  
		  <a id="btn_ifos_resa" class="btn btn-warning btn_resultat" titre="Infos et réservation" href=" " >
		    <div>
		      <span style="font-size: 13px; display: block;">Infos & </span>
		      <span style="font-size: 13px; ">réservation</span>
		      
		    </div>
		  </a>
		  <p id="muted">
		    <small class="muted">Départ 02/04/2016 - Base 2pers. </small>
		  </p>
		  <div class="ajouter_liste" style="font-size: 11px; text-align: center; margin: -15px 0 0;">
		    <a href="">
		      <span style="font-size: 13px; color: red;"> &#9825; </span>
		      Ajouter à ma liste
		    </a>
		  </div>
		</div>
	      </div>
	    </a>
          </li>
          <style type="text/css">
	    .sejour_resultat {
	    clear: both;
	    }
	    ul, li {
	    border: 0 none;
	    list-style: outside none none;
	    margin: 0;
	    padding: 0;
	    }
	    .pictos_infos_sejour {
	    font-size: 10px; 
	    color: #fff; 
	    height: 30px; 
	    text-align: right; 
	    margin: 5px 0 0;
	    }
	    .pictos_infos_sejour figure { 
	    display: inline-block; 
	    margin: 1px 0;
	    }
	    .pictos_infos_sejour figure:before {
	    color: #fff;
	    content: "\2b";
	    font-size: 15px;
	    margin: 0 0.5px 0 1.5px;
	    vertical-align: bottom;
	    }	  
	    .pictos_infos_sejour figure:first-child:before{
	    content: "";
	    }

	    .titre_caption {
	    color: #666;
	    }
	    .votes p {
	    float: left;
	    }
	    #sejour_categ {
	    clear: both;
	    }
	    
	    #header_infos_sejour {
	    padding: 0;
	    }

	    .tarifs_caption {
	    font-size: 10px; 
	    cursor: pointer;
	    margin: 0 0 0 10px;
	    }
	    .tarifs_caption::before {
	    background: rgba(0, 0, 0, 0) url("images/fleche_bas.png") no-repeat scroll 0 1px / 100% 100%;
	    content: "";
	    height: 9px;
	    margin: 6px 0 0 -12px;
	    position: absolute;
	    width: 9px;
	    }
	    
	    #muted {
	    text-align: center; 
	    font-size: 10px; 
	    color: #666;
	    }

/* ********************************************************************************** */
	    
	    @media screen and (min-width: 999px) {
	    .liste_sejours_vtr li {
	    margin: 0 0.4% 15px; 
	    width : 745px; 
	    background-color: #e1e1e1;
	    }
	    .titre_haut_vignette {
	    width: 50%; 
	    height: 35px; 
	    float: left;
	    }

	    .pictos_infos_sejour img {
	    display: inline-block; 
	    vertical-align: bottom;
	    }
	    .pictos_infos_sejour figcaption {
	    display: inline-block;
	    }	  

	    #photo_vignette {
	    width: 225px; 
	    height: 150px; 
	    display: block;
	    }
	    #caption {
	    display: inline-block; 
	    width: 327px;
	    }
	    .titre_caption {
	    display: inline-block; 
	    height: auto; 
	    max-width: 325px;  
	    padding: 5px 0 0; 
	    font-size: 16px; 
	    color: #666;
	    }
	    .avis_caption a {
	    font-size: 10px; 
	    float: left; 
	    margin: 0 5px;
	    }
	    #description_categ {
	    max-height: 30px; 
	    overflow: hidden;
	    }
	    #prix_sejour {
	    width: 179px;
	    }
	    #prix_nuits_barre {
	    width: 90px; 
	    margin: 5px 0px 0px 36px; 
	    text-align: center; 
	    font-size: 16px; 
	    float: left;
	    }
	    #promo_span {
	    margin: 0; 
	    position: static; 
	    width: 35px; 
	    line-height: 25px; 
	    font-size: 14px;
	    }

	    .prix_sejour {
	    float: right;
	    width: 200px;
	    }
	    #text_prix {
	    text-align: center; 
	    font-size: 10px; 
	    color: #666;
	    }
	    #prix_nuits_sejour {
	    margin: -8px 0px 5px 15px; 
	    text-align: center; 
	    color: #555;
	    }
	    #prix_nuits_sejour font {
	    font-size: 25px; 
	    font-weight: bold;
	    }
	    
	    #btn_ifos_resa {
	    margin: 0 20px; 
	    width: 140px; 
	    border-radius: 7px; 
	    text-align: left; 
	    padding: 1px 2px;
	    }
	    #btn_ifos_resa div {
	    line-height: 120%; 
	    margin: 5px; 
	    padding-left: 10px;
	    }
	    
	    .tarifs_resultat::before {
	    content: "\f103" ;
	    }
	    .btn_resultat::before {
	    border-bottom: 7px solid transparent;
	    border-left: 14px solid #fff;
	    border-top: 7px solid transparent;
	    content: "";
	    float: right;
	    height: 0;
	    margin-right: 18px;
	    margin-top: 15px;
	    width: 0;
	    }

	    }
	    
/* ********************************************************************************** */
	    @media screen and (min-width: 768px) and (max-width: 998px){
	    .liste_sejours_vtr li {
	    margin: 0 0.4% 15px; 
	    width : 570px; 
	    background-color: #e1e1e1;
	    }
	    .titre_haut_vignette {
	    width: 50%; 
	    height: 35px; 
	    float: left;
	    }

	    .pictos_infos_sejour img {
	    display: inline-block; 
	    vertical-align: bottom;
	    }
	    .pictos_infos_sejour figcaption {
	    display: inline-block;
	    }	  

	    #photo_vignette {
	    width: 175px; 
	    height: 130px; 
	    display: block;
	    }
	    #caption {
	    display: inline-block; 
	    width: 225px;
	    }
	    .titre_caption {
	    display: inline-block; 
	    height: auto; 
	    max-width: 325px;  
	    padding: 5px 0 0; 
	    font-size: 16px; 
	    color: #666;
	    }
	    .avis_caption a {
	    font-size: 10px; 
	    float: left; 
	    margin: 0 5px;
	    }
	    #description_categ {
	    max-height: 30px; 
	    overflow: hidden;
	    }
	    #prix_sejour {
	    width: 160px;
	    }
	    #prix_nuits_barre {
	    width: 90px; 
	    margin: 5px 0px 0px 17px; 
	    text-align: center; 
	    font-size: 16px; 
	    float: left;
	    }
	    #promo_span {
	    margin: 0; 
	    position: static; 
	    width: 35px; 
	    line-height: 25px; 
	    font-size: 14px;
	    }
	    .tarifs_caption {
	    font-size: 10px; 
	    cursor: pointer;
	    }
	    .prix_sejour {
	    float: right;
	    width: 200px;
	    }
	    #text_prix {
	    text-align: center; 
	    font-size: 10px; 
	    color: #666;
	    }
	    #prix_nuits_sejour {
	    margin: -8px 0px 5px ; 
	    text-align: center; 
	    color: #555;
	    }
	    #prix_nuits_sejour font {
	    font-size: 25px; 
	    font-weight: bold;
	    }
	    
	    #btn_ifos_resa {
	    margin: 0 auto; 
	    width: 120px; 
	    border-radius: 7px; 
	    text-align: left; 
	    padding: 1px 2px;
	    }
	    #btn_ifos_resa div {
	    line-height: 120%; 
	    margin: 5px; 
	    padding-left: 10px;
	    }
	    
	    .tarifs_resultat::before {
	    content: "\f103" ;
	    }
	    .btn_resultat::before {
	    border-bottom: 7px solid transparent;
	    border-left: 14px solid #fff;
	    border-top: 7px solid transparent;
	    content: "";
	    float: right;
	    height: 0;
	    margin-right: 10px;
	    margin-top: 15px;
	    width: 0;
	    }
	    }

/* ********************************************************************************** */	    
	    @media screen and (max-width: 767px) {
	    #sejour_resultat {
	    background-color: #e1e1e1;
	    }
	    .pictos_infos_sejour figcaption {
	    display: none;
	    }
	    #caption {
	    float: right;
	    width: 54%;
	    }
	    .titre_caption {
	    font-weight: bold;
	    font-size: 13px;
	    text-align: center;
	    max-height: 23px;
	    overflow: hidden;
	    margin: 3px 0px 2px -5px;
	    }
	    .titre_caption.categ {
	    display: none;
	    }
	    .votes {
	    margin: -6px 0 0 18px;
	    }
	    .avis_caption {
	    padding: 0 0 0 110px;
	    font-size: 12px;
	    cursor: pointer;
	    }
	    .avis_caption a{
	    cursor: pointer;
	    }
	    #photo_vignette {
	    width: 130px; 
	    height: 95px; 
	    display: block;
	    }
	    #haut_vignette {
	    height: 35px;
	    }
	    .titre_haut_vignette {
	    width: 50%; 
	    height: 35px; 
	    float: left;
	    }
	    #haut_vignette_categ{
	    display: none;
	    }
	    #header_infos_sejour {
	    display: none;
	    }
	    #prix_sejour {
	    width: 179px;
	    }
	    #text_prix {
	    float: right;
	    margin: -8px -90px 5px 0;
	    font-size: 13px;
	    }
	    #promo_span {
	    margin: 0; 
	    position: static; 
	    width: 35px; 
	    line-height: 25px; 
	    font-size: 14px;
	    }
	    #vignette_promotions {
	    width: 305px;
	    height: 60px;
	    position: absolute;
	    float: right;
	    cursor: pointer;
	    }
	    #promo_span {
	    float: left;
	    font-size: 13px;
	    line-height: 15px;
	    margin: -65px 80px;
	    position: static;
	    width: 30px;
	    }
	    .btn_resultat::before {
	    border-bottom: 7px solid transparent;
	    border-left: 14px solid #fff;
	    border-top: 7px solid transparent;
	    content: "";
	    float: right;
	    height: 0;
	    margin-right: 0px;
	    margin-top: 9px;
	    width: 0;
	    }
	    #btn_ifos_resa {
	    border-radius: 7px;
	    margin: -10px 167px 0;
	    padding: 2px 10px;
	    text-align: left;
	    width: 95px;
	    height: 31px;
	    }
	    #prix_nuits_sejour {
	    width: 308px;
	    text-align: center; 
	    color: #555;
	    }
	    #prix_nuits_sejour font {
	    font-size: 23px; 
	    font-weight: bold;
	    }
	    #prix_nuits_barre {
	    margin: 45px 1px 0 0;
	    font-size: 15px;
	    }
	    #vignette_promotions {
	    height: 75px;
	    }
	    #muted {
	    width: 155px;
	    margin: -35px 0 15px 3px;
	    text-align: left;
	    }
	    .ajouter_liste {
	    width: 150px;
	    margin:  0;
	    }
	    .ajouter_liste a {
	    margin: 0 40px 0 0;
	    }

	    }


	  </style>
	  <script>
	    function afficher_cacher(id) {
	      if(document.getElementById(id).style.display=='none'){
	        document.getElementById(id).style.display='block';
	      }
	      else{
	        document.getElementById(id).style.display='none';
	    
	      }
	      return true;
	    }

            $(document).ready(function() {
		$.getJSON('monFichier.json',function(data){
		    $('#expertise').empty();

            $.ajax ({
	      url: 'http://gestion.vtr-voyages.fr/admin/recherche/resultset.php',
	      data: 'd=2016-02-13&fd=8&o=json&pr=3',
	      dataType: 'json',
	      success: function(json) {
		  $('#liste_sejours_vtr').empty();
		    $.each(json, function(index, valeur) {
		      $('#liste_sejours_vtr').append('<li id="sejour_resultat" class="produit vignettes"><a href="'+ valeur.Sejour_url +'"><div id="'+ valeur.Sejour_id +'" class="thumbnail"><div id="haut_vignette" class="haut_vignette"><div class="titre_haut_vignette"><span>'+ valeur.StationVille +'</span><p style="display: inline-block ;">'+ valeur.Lieu +'</p><p id="haut_vignette_categ" class="categ"  style="margin: 1px 0;">'+valeur.Souscat +'</p></div><div class="pictos_infos_sejour"><?php $inclus = array ("0" => "Hebergement","1" => "Forfait ski","2" => "Materiel ski");foreach ($inclus as $cle => $valeur) { ?> <figure><img src="images/pictos_formules/<?php $valeurM= strtolower($valeur); echo($valeurM); ?>.png" border="0" alt="<?php echo($valeur); ?>" /><figcaption><?php echo($valeur); ?></figcaption></figure> <?php } ?></div></div> <div id="photo_vignette" class="photo_vignette" > <figure><img src="http://img4.vtr-voyages.net/images/w600h0/hosting/hebergement/'+valeur.Sejour_id+'.jpeg" border="0" alt="'+valeur.Cat +  valeur.StationVille +  valeur.Lieu +'" /></figure></div><div id="caption" class="caption"><div class="titre_caption"><p>'+valeur.Hebergement+'</p></div><div class="votes"><p title="1 étoile">☆</p> <p title="2 étoiles">☆</p> <p title="3 étoiles">☆</p><p title="4 étoiles">☆</p> <p title="5 étoiles">☆</p> </div> <div class="avis_caption"> <a href="">(99 avis)</a></div><div id="header_infos_sejour" class="header_infos_sejour" style="border-right: none;" > <p id="sejour_categ" class="categ" ><u>Description :</u> </p> <p id="description_categ" class="categ" >' + valeur.Description +' </p> <span class="tarifs_caption" onclick="javascript:afficher_cacher("options_infos_sejour");"> Tarifs </span> </div></div>	<div id="prix_sejour" class="prix_sejour" >  <div id="vignette_promotions" class="vignette_promotions" style="display: none;"> <p id="prix_nuits_barre" class="prix_nuits" ><del>'+ valeur.PrixOld +'€</del></p> <span id="promo_span">-20%</span> </div> <p id="text_prix" class="prix_nuits">'+ valeur.Duree +' nuits à partir de&nbsp;</p> <p id="prix_nuits_sejour" class="prix_nuits"><font>'+  valeur.Prix + '€</font>  <small > / pers.</small>   </p>  <a id="btn_ifos_resa" class="btn btn-warning btn_resultat" titre="Infos et réservation" href=" " > <div> <span style="font-size: 13px; display: block;">Infos & </span> <span style="font-size: 13px; ">réservation</span> </div>  </a> <p id="muted"> <small class="muted">Départ '+valeur.Debut +' - '+valeur.Typo +'. </small> </p> <div class="ajouter_liste" style="font-size: 11px; text-align: center; margin: -15px 0 0;"> <a href=""> <span style="font-size: 13px; color: red;"> &#9825; </span> Ajouter à ma liste </a> </div></div> </div></a> </li> ');
		    });
		}
	      });


	  </script>

	  
          <li id="sejour_resultat" class="produit vignettes">
            <a href="{{ Sejour_url }}">
	      <div id="{{ Sejour_id }}" class="thumbnail">
                <div id="haut_vignette" class="haut_vignette">
		  <div class="titre_haut_vignette">
	      <span>{{ StationVille }}</span>
	      <p style="display: inline-block ;">{{ Lieu }}</p>
	      <p id="haut_vignette_categ" class="categ"  style="margin: 1px 0;">{{ Souscat }}</p>
		  </div>
		  
		  <div class="pictos_infos_sejour">

	      <?php	  
	      $inclus = array (
			       "0" => "Hebergement",
			       "1" => "Forfait ski",
			       "2" => "Materiel ski");
foreach ($inclus as $cle => $valeur) {
?>
		    <figure>
		      <img src="images/pictos_formules/<?php $valeurM= strtolower($valeur); echo($valeurM); ?>.png" border="0" alt="<?php echo($valeur); ?>" />
		      <figcaption><?php echo($valeur); ?></figcaption>
		    </figure>
<?php
}
?>
		   
  
		  </div>
		  
		</div>
                
                <div id="photo_vignette" class="photo_vignette" >
                  <figure>
		    <img src="http://img4.vtr-voyages.net/images/w600h0/hosting/hebergement/{{ Sejour_id }}.jpeg" border="0" alt="{{ Cat }} {{ StationVille }} {{ Lieu }}" />

		  </figure>
                </div>

                <div id="caption" class="caption">
		  <div class="titre_caption">
                    <p>{{ Hebergement }}</p>
		  </div>
		  <div class="votes">
		    <p title="1 étoile">☆</p>
		    <p title="2 étoiles">☆</p>
		    <p title="3 étoiles">☆</p>
		    <p title="4 étoiles">☆</p>
		    <p title="5 étoiles">☆</p>
		  </div>
		  
		  <div class="avis_caption">
		    <a href="">(99 avis)</a>
		  </div>		  

                  <div id="header_infos_sejour" class="header_infos_sejour" style="border-right: none;" >
		    <p id="sejour_categ" class="categ" ><u>Description :</u> </p>
                    <p id="description_categ" class="categ" >
		      {{ Description }}
		    </p>
		    <span class="tarifs_caption" onclick="javascript:afficher_cacher('options_infos_sejour');"> Tarifs </span>
                  </div>
                  
                  
		</div>
		
		<div id="prix_sejour" class="prix_sejour" >
		  <div id="vignette_promotions" class="vignette_promotions" style="display: none;">
		    <p id="prix_nuits_barre" class="prix_nuits" ><del>{{ PrixOld }}€</del></p>
		    <span id="promo_span">-20%</span>
		  </div>
		  <p id="text_prix" class="prix_nuits">{{ Duree }} nuits à partir de&nbsp;</p>
		  <p id="prix_nuits_sejour" class="prix_nuits">                      
		    <font> {{ Prix }} €</font> 
		    <small > / pers.</small>
                  </p>      		   
		  
		  <a id="btn_ifos_resa" class="btn btn-warning btn_resultat" titre="Infos et réservation" href=" " >
		    <div>
		      <span style="font-size: 13px; display: block;">Infos & </span>
		      <span style="font-size: 13px; ">réservation</span>
		      
		    </div>
		  </a>
		  <p id="muted">
								     <small class="muted">Départ {{ Debut }} - {{ Typo }}. </small>
		  </p>
		  <div class="ajouter_liste" style="font-size: 11px; text-align: center; margin: -15px 0 0;">
		    <a href="">
		      <span style="font-size: 13px; color: red;"> &#9825; </span>
		      Ajouter à ma liste
		    </a>
		  </div>
		</div>
	      </div>
	    </a>
          </li>


          


	  <!-- =======================************************   Fin de la modification du résultat   ************************======================= -->
          <div class="overflow-y" stype="padding-top:10px;">
	  </div>

	  <div id="options_infos_sejour" class="options_infos_sejour" style="background-color: #e1e1e1 ; width:99.5%; font-size: 10px; margin: 5px 0 0 1px; display: none;">
	    <figure style="display: inline-block; margin: 1px 5px; width: 23%;">
	      <img style="display: inline-block;" src="images/pictos_options/pied_des_pistes.png" border="0" alt="Hébergement" />
	      <figcaption style="display: inline-block;">Pied des pistes de ski</figcaption>
	    </figure>
	    
	    <figure style="display: inline-block; margin: 1px 5px; width: 23%;">
	      <img style="display: inline-block;" src="images/pictos_options/bien_etre.png" border="0" alt="Forfait" />
	      <figcaption style="display: inline-block;">Sauna</figcaption>
	    </figure>
	    
	    <figure style="display: inline-block; margin: 1px 5px; width: 23%;">
	      <img style="display: inline-block;" src="images/pictos_options/linge_lit_compris.png" border="0" alt="Matériel" />
	      <figcaption style="display: inline;">Linge de lit compris</figcaption>
	    </figure>

	    <figure style="display: inline-block; margin: 1px 5px; width: 23%;">
	      <img style="display: inline-block;" src="images/pictos_options/animaux.png" border="0" alt="Matériel" />
	      <figcaption style="display: inline;">Animaix (payant)</figcaption>
	    </figure>


	    <figure style="display: inline-block; margin: 1px 5px; width: 23%;">
	      <img style="display: inline-block;" src="images/pictos_options/internet.png" border="0" alt="Matériel" />
	      <figcaption style="display: inline;">Accès internet</figcaption>
	    </figure>

	    <figure style="display: inline-block; margin: 1px 5px; width: 23%; ">
	      <img style="display: inline-block;" src="images/pictos_options/parking.png" border="0" alt="Matériel" />
	      <figcaption style="display: inline;">Parking</figcaption>
	    </figure>
	  </div>

	  <!-- =======================************************   Fin de la modification tableau options  ************************======================= -->

          
        </ul>
	<div class="clear"></div>  

      </section>
      
    </div>

























    <footer id="footer">
      <div class="upper_footer">
	<div class="container clearfix" align="center">
	  <div class="page_pied">
	    <ul class="nav categ_home">
	      <li class="dropdown">
		<a style="text-align: center;" href="/">
		  <img src="http://img1.vtr-voyages.net/img/w195h0/vtr-voyages-logo.png" class="logo" />
		</a>
		<p class="conseils_client">conseils réservations</p>
		<a href="tel:+33467583636"><p class="numero_telephone">04 67 58 36 36</p></a>
		<div style="text-align: center;">
		  <a href="http://www.facebook.com/VtrVoyages" target="_blank"><img style="margin: 0.5em 1em 0.5em;" src="http://img1.vtr-voyages.net/img/w24h24/facebook.png" alt="Facebook VTR Voyages" /></a>
		  <a href="http://twitter.com/vtrvoyages" target="_blank"><img style="margin: 0.5em 1em 0.5em;" src="http://img2.vtr-voyages.net/img/w24h24/twitter.png" alt="Twitter VTR Voyages" /></a>
		  <a href="https://plus.google.com/116185851518653787862 " target="_blank"><img style="margin: 0.5em 1em 0.5em;" src="http://img3.vtr-voyages.net/img/w24h24/google_plus.png" alt="Google Plus VTR Voyages" /></a>
		  <a href="http://www.youtube.com/channel/UCx2j3sg6sW3P0_K2m1EcUvQ" target="_blank"><img style="margin: 0.5em 1em 0.5em;" src="http://img4.vtr-voyages.net/img/w24h24/youtube.png" alt="YouTube VTR Voyages" /></a>
		  <a href="http://fr.pinterest.com/vtrvoyage" target="_blank"><img style="margin: 0.5em 1em 0.5em;" src="http://img3.vtr-voyages.net/img/w24h24/Pinterest.png" alt="Pinterest VTR Voyages" /></a>
		</div>
	      </li>
	    </ul>	   	
	    <ul style="max-width: 50%;" class='nav categ_home'>
	      <li class='dropdown' style='display:inline; line-height: 1.5em;'><a style="cursor: pointer;" data-slug='ski' data-hover='dropdown' class='dropdown-toggle'><h3>SKI</h3></a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/sejours-ski/ski-tout-compris" title="Ski tout compris">Ski tout compris</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/stations-ski" title="Stations de ski">Stations de ski</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/sejours-ski" title="Vacances au ski">Vacances au ski</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/sejours-ski/week-end-ski" title="Ski pas cher">Ski pas cher</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/sejours-ski/hebergement-forfait-materiel-1" title="Ski forfait matériel">Ski forfait matériel</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/sejours-ski/noel-et-nouvel-an" title="Noel et Nouvel an au ski">Noel et Nouvel an au ski</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/sejours-ski/vacances-de-fevrier-2" title="Vacances de février au ski">Vacances de février au ski</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/sejours-ski/hotels-et-villages-clubs" title="Hôtels et Villages clubs">Hôtels et Villages clubs</a>
	      </li>
	    </ul>
	    <ul style="max-width: 50%;" class='nav categ_home'>
	      <li class='dropdown' style='display:inline; line-height: 1.5em;'><a style="cursor: pointer;" data-slug='ski' data-hover='dropdown' class='dropdown-toggle'><h3>TOP STATIONS</h3></a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/saint-francois-longchamp" title="St François Longchamp">St François Longchamp</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/alpe-d-huez" title="Alpe d'Huez">Alpe d'Huez</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/chamrousse" title="Chamrousse">Chamrousse</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/gresse-en-vercors" title="Gresse en Vercors">Gresse en Vercors</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/les-orres" title="Les Orres">Les Orres</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/puy-saint-vincent" title="Puy St Vincent">Puy St Vincent</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/superdevoluy" title="Superdévoluy">Superdévoluy</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/station-ski/tignes" title="Tignes">Tignes</a>
	      </li>
	    </ul>
	    <ul style="max-width: 50%;" class='nav categ_home'>
	      <li class='dropdown' style='display:inline; line-height: 1.5em;'><a style="cursor: pointer;" data-slug='ski' data-hover='dropdown' class='dropdown-toggle'><h3>NOS THEMES</h3></a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/les-trois-vallees" title="Les 3 Vallées">Les 3 Vallées</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/alpe-d-huez-grand-domaine" title="Alpe d'Huez Grand Domaine">Alpe d'Huez Grand Domaine</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/autour-d-annecy" title="Autour d'Annecy">Autour d'Annecy</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/autour-de-grenoble" title="Autour de Grenoble">Autour de Grenoble</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/espace-killy" title="Espace Killy">Espace Killy</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/la-plagne" title="La Plagne">La Plagne</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/les-arcs" title="Les Arcs">Les Arcs</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/au-pied-des-pistes" title="Ski au pied des pistes">Ski au pied des pistes</a>
	      </li>
	    </ul>
	    <ul style="max-width: 50%;" class='nav categ_home'>
	      <li class='dropdown' style='display:inline; line-height: 1.5em;'><a style="cursor: pointer;" data-slug='ski' data-hover='dropdown' class='dropdown-toggle'><h3>ZONES GEO</h3></a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/lieu/alpes-du-nord" title="Alpes du Nord">Alpes du Nord</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/lieu/jura" title="Jura">Jura</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-alpes-du-sud" title="Location Alpes du Sud">Location Alpes du Sud</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-appartement-montagne" title="Location appart montagne">Location appart montagne</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-appartement-ski-la-mongie" title="Location à La Mongie">Location à La Mongie</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-appartement-pyrenees" title="Location Pyrénées">Location Pyrénées</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/lieu/ski-a-l-etranger" title="Ski à l'étranger">Ski à l'étranger</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/lieu/vosges" title="Vosges">Vosges</a>
	      </li>
	    </ul>
	    <ul style="max-width: 50%;" class='nav categ_home'>
	      <li class='dropdown' style='display:inline; line-height: 1.5em;'><a style="cursor: pointer;" data-slug='ski' data-hover='dropdown' class='dropdown-toggle'><h3>TOUT COMPRIS</h3></a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-courchevel" title="Ski tout compris à Courchevel">Ski tout compris à Courchevel</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-en-isere" title="Tout compris autour de Grenoble">Tout compris autour de Grenoble</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-fevrier" title="Ski tout compris en Février 2015">Ski tout compris en Février 2015</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-en-haute-savoie" title="Ski moins cher en Haute-Savoie">Ski moins cher en Haute-Savoie</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-meribel" title="Ski tout compris à Méribel">Ski tout compris à Méribel</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-noel-et-nouvel-an-1" title="All inclusive - Noel et Nouvel An">All inclusive - Noel et Nouvel An</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-pas-cher" title="Ski tout compris pas cher">Ski tout compris pas cher</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/ski-tout-compris-tignes" title="Séjours tout compris à Tignes">Séjours tout compris à Tignes</a>
	      </li>
	    </ul>
	    <ul style="max-width: 50%;" class='nav categ_home'>
	      <li class='dropdown' style='display:inline; line-height: 1.5em;'><a style="cursor: pointer;" data-slug='ski' data-hover='dropdown' class='dropdown-toggle'><h3>LOCATION + FORFAIT</h3></a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-les-2-alpes" title="ski forfait 2 Alpes">ski forfait 2 Alpes</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-arc-2000" title="ski forfait Arc 2000">ski forfait Arc 2000</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-courchevel" title="ski forfait Courchevel">ski forfait Courchevel</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-meribel" title="ski forfait Méribel">ski forfait Méribel</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-superdevoluy" title="ski forfait Superdévoluy">ski forfait Superdévoluy</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-tignes" title="ski forfait Tignes">ski forfait Tignes</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-val-thorens" title="ski forfait Val Thorens">ski forfait Val Thorens</a>
		<a style="line-height: 3em;" href="http://www.vtr-voyages.fr/theme/location-avec-forfait-ski-risoul" title="ski forfait Risoul">ski forfait Risoul</a>
	      </li>
	    </ul>

	    
	    <img src="http://img3.vtr-voyages.net/img/w0h0src/footer/paiement_footer_fr.png" border="0" alt="Paiement sécurisé" />
	    <p class="pied clear" style="line-height: 3em;">Liens utiles : 
	      <a href="/page/paiement-securise" rel="nofollow">Paiement sécurisé</a>
	      <span class="sep">|</span>
	      <a href="/page/3-fois-sans-frais" rel="nofollow">Paiement en 3 x sans frais</a>
	      <span class="sep">|</span>
	      <a href="/page/avantages-vtr" rel="nofollow">Nos engagements</a>
	      <span class="sep">|</span>
	      <a href="/page/conditions-generales-de-vente" rel="nofollow">C.G.V.</a>
	      <span class="sep">|</span>
	      <a href="/page/faq" rel="nofollow">Questions-Réponses</a>
	      <span class="sep">|</span>
	      <a href="/page/qui-sommes-nous" rel="nofollow">Qui sommes nous ?</a>

	      
	    </p>

            
	    <p class="pied">
	      <span>VTR Voyages</span> / Montpellier
	      <span class="sep">|</span>
	      Tél : 04 67 58 36 36
	      <span class="sep">|</span>
	      E-mail : contact@vtr-voyages.fr
	      <span class="sep">|</span>
	      Licence N° AF-IM034110006 - Agrément DDCS N° 03402ET0162 - Assurance RCP0221540<br>
	      VTR Voyages - Immeuble Le Phénix - 1350 av Albert Einstein - 34000 Montpellier
	    </p>

	    <!-- 2015-07-10 07:15:44 -->
	  </div>
	</div>
	<div class="logo_pied"><img src="http://img1.vtr-voyages.net/img/w0h50/atout_france.jpg"><img src="http://img1.vtr-voyages.net/img/w0h50/apst.jpg"><img src="http://img1.vtr-voyages.net/img/w0h50/ddjs.jpg"><img src="http://img1.vtr-voyages.net/img/w0h50/ancv.jpg"><img src="http://img1.vtr-voyages.net/img/w0h50/paybox.jpg"></div>
    </footer>


    

    <script src="http://www.vtr-voyages.fr/js/91586ba.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
      $("#btSendEmailNewsletter").click(function(){
      var This = $(this);
      var postParameters = {
      'email' : $("#emailNewsletter").val(),
      };
      This.html('..patientez');
      $.post('/newsletter/ajoute-email', postParameters, function(response){
      This.html('S\'inscrire');
      if (response.error) {
      $("#newsletterResponse").addClass('alert-error').html(response.error);
      }
      if (response.success) {
      $("#newsletterResponse").addClass('alert-success').html(response.success);
      }
      setTimeout(function(){
      $("#newsletterResponse").removeClass('alert-success').html("");
      },3000);
      }, 'json');
      });
      });
    </script>  	<script src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/js/browser-detection/browser-detection.js"></script>
    <script src="http://www.vtr-voyages.fr/bundles/madeinvtrstays/js/bjqs-1.3.min.js"></script>
    <script type="text/javascript">
      $(document).ready(function($) {
      $('a[data-slug^=""]').each(function(){
      $(this).css('color','#029ce1');	
      });		  
      
      $('.plus').click(function() {
      $(this).find('b').html('-');
      });

      $('#banner-fade').bjqs({
      width		: '100%',
      showmarkers : true,
      height		: 300,
      nexttext	: '>',
      prevtext	: '<',
		      animspeed   : 4000,
		      responsive  : false
		      });

		      $("img.lazy").lazyload({ effect : "fadeIn" });			
		      });
		      </script>

    <script type="text/javascript">
      $(document).ready(function(){
      $("#btSendEmailNewsletter").click(function(){
      var This = $(this);
      var postParameters = {
      'email' : $("#emailNewsletter").val(),
      };
      This.html('..patientez');
      $.post('/newsletter/ajoute-email', postParameters, function(response){
      This.html('S\'inscrire');
      if (response.error) {
      $("#newsletterResponse").addClass('alert-error').html(response.error);
      }
      if (response.success) {
      $("#newsletterResponse").addClass('alert-success').html(response.success);
      }
      setTimeout(function(){
      $("#newsletterResponse").removeClass('alert-success').html("");
      },3000);
      }, 'json');
      });
      });
    </script>	
    <script type="text/javascript">
      /**
      * Charges les regions en fonction d'un pays.
      * Si l'id du pays est vide, alros sont sort toutes les régions.
      * 
      * @param  integer|null paysId ID du pays
      * @return void
      */
      function type_region(paysId) {
      paysId = (paysId == null || paysId == '') ? 0 : paysId;

      // Si aucun pays de sélectionné, 
      // alors remplir toutes les listes
      if (paysId == 0 || paysId == '0' || paysId == null || paysId == undefined) {
      var route = "/search-ajax/find-all-region";
      } else {
      var route = "/search-ajax/find-region-by-pays/000002";
      route = route.replace("000002", paysId);
      }

      $.get(route, {}, function(text){ 
      $("#search_type_region").html(text); 
      type_ville( $("#search_type_region").val() );
      });
      };

      /**
      * Charge les villes en fonction d'une région.
      * Si l'id de la région est vide, alors onrt toutes les villes.
      *  
      * @param  integer|null regionId
      * @return void
      */
      function type_ville(regionId) {
      regionId = (regionId == null || regionId == '') ? 0 : regionId;
      paysId = $("#search_type_pays").val();

      if (0 == regionId || regionId == '0' || null == regionId || regionId == undefined) {
      if (paysId == 0 || paysId == '0' || paysId == null || paysId == undefined) {
      var route = "http://www.vtr-voyages.fr/search-ajax/find-all-cities";
      } else {
      var route = "http://www.vtr-voyages.fr/search-ajax/find-all-cities-by-pays/000003";
      route = route.replace("000003", paysId);
      }
      } else {
      var route = "http://www.vtr-voyages.fr/search-ajax/find-cities-by-region/000003";
      route     = route.replace("000003", regionId);
      }
      
      $.get(route, {}, function(text){ 
      $("#search_type_ville").html(text);
      type_accomodation_type( $("#search_type_ville").val() );
      }); 
      };

      /**
      * Charge tous les types d'hebergements en fonction d'un vile.
      * Si l'id de la ville est vide, alors on sort tous les type d'heberegements.
      * 
      * @param  integer|null cityId
      * @return void
      */
      function type_accomodation_type(cityId) {
      cityId = (cityId == null || cityId == '') ? 0 : cityId;
      if (0 == cityId) {
      route = "http://www.vtr-voyages.fr/search-ajax/find-all-accomodation-types";
      } else {
      var route = "http://www.vtr-voyages.fr/search-ajax/find-accomodation-type-by-city/000004";
      }

      route     = route.replace("000004", cityId);
      $.get(route, {}, function(text){ 
      $("#search_type_typehebergement").html(text); 
      }); 
      };

      function clearList()
      {
      $("#search_type_region option, #search_type_ville option").remove();
      }

      $(document).ready(function(){
      $('#search_type_pays, #search_type_region, #search_type_ville').change(function() {
      var selected = $(this).attr('id');
      var valueSelect = $(this).val();
      switch(selected) {
      case 'search_type_pays':
      type_region(valueSelect);
      break;
      case 'search_type_region':

      type_ville(valueSelect);
      break;
      case 'search_type_ville':
      type_accomodation_type(valueSelect);
      break;
      }
      });
      $("input[class=date]").datepicker({
      minDate : new Date()
      });      
      });
    </script>
    
    <script async type="text/javascript">
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-12078043-6', 'vtr-voyages.fr');
      ga('send', 'pageview');
    </script>	

    

    <script type="text/javascript">
      $(document).ready(function(){ 
      var fullDescription = $("code.full-description-code").html();
      $("a.read-more-long-desc").click(function(event){
      event.preventDefault();
      $("div.content-description").html( fullDescription);
      });
      });
  </script>  </body>
</html>
