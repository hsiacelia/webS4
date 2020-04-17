<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

session_start();

$obj = new stdClass;
$obj ->message = 'Mauvais identifiant ou mot de passe';
$obj ->success = false;

$contentFileJson = file_get_contents("login.json");
$scoreBoard = json_decode($contentFileJson, true);


foreach ($scoreBoard['users'] as $key){
    for ($i = 0; $i < 4; ++$i){
        foreach ($key[$i] as $value){
            if ($value["username"] == $_POST["username"] && $value["password"] == $_POST["password"]){

                $_SESSION['username'] = $_POST["username"];
                $_SESSION['password'] = $_POST['password'];
                $obj -> success = true;
                break;
            }
        }
    }
}



echo json_encode($obj);

?>