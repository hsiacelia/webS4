<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

session_start();

$obj = new stdClass();
$obj->success = false;

if (isset($_SESSION['username']) == true && isset( $_SESSION['password']) == true){
    $obj->isConnected = true;
}else {
    $obj->isConnected = false;
}
echo json_encode($obj);