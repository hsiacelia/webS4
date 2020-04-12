<?php
session_start();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$obj = new stdClass();
$bool = true;

if(isset($_POST['numero']) == true){
    echo $_POST['numero'];
}


echo json_encode($obj); // encode en format json pour des données en dur