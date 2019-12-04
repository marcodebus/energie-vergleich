<?php
$servername = "80.151.160.59";
$username = "dbAdmin";
$password = "Debus1Software1#";
$dbname = "strom";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];

$plz = $_POST['plz'];
$adresse = $_POST['adresse'];

$anbieter = $_POST['anhttps://github.com/marcodebus/energie-vergleichbieter'];
$verbrauch = $_POST['verbrauch'];
$tel = $_POST['tel'];
$weiteres = $_POST['weiteres'];
//$sql = "INSERT INTO `onlineAnfrage` (`id`, `name`, `email`, `plz`, `Adresse`, `telefon`, `aktuellerAnbieter`, `verbrauch`, `weiteres`, `leadID`) VALUES (NULL, 'name', 'email', 'plz', 'adresse', 'telef', 'anb', 'verb', 'weiteres', '');";


$sql = "INSERT INTO `leads` (`id`, `MaklerName`, `Kundenid`, `Kundenname`, `Adresse`, `Telefon`, `KWangaben`, `StatusStrom`, `StatusGas`, `Sonstiges`, `Eingangsdatum`, `email`, `plz`, `anbieter`, `zaehler`) VALUES (NULL, '', '0', '".$name."', '".$adresse."', '".$tel."', '".$verbrauch."', 'frei', 'frei', '".$weiteres."', '".date("yy-m-d")."', '".$email."', '".$plz."', '".$anbieter."', '')";

if ($conn->query($sql) === TRUE) {
   $empfaenger = "marcokite@yahoo.de";
   $absendername = "Kontaktformular FAQ Anfrage";
   $absendermail = "info@sorglosenergie.de";
   $betreff = "FAQ Lead von Kontaktfprmular";
   $text = "Kontaktformular
       <ul>
       <li>Name: ".$name."</li>
       <li>Telefon ".$tel."</li>
       <li>Name ".$email."</li>
       </ul>
     bitte über Webportal bearbeiten.
       ";
   mail($empfaenger, $betreff, $text, "From: $absendername <$absendermail>");
   $conn->close();
   header('Location: https://sorglosenergie.de/erfolg.html');
   exit;

} else {
   $conn->close();
   header('Location: https://sorglosenergie.de/fehler.html');
   exit;
}






?>
