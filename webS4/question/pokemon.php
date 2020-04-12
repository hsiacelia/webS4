<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
session_start();

$obj = new stdClass();
$obj -> resultat = 0;
$resultat = 0;

$tabRep = array();
$tabVrai = array(1=>3,2=>2,3=>3,4=>3,5=>4,6=>1,7=>3,8=>1,9=>2,10=>1);


if(isset($_POST['question']) ===  true && isset($_POST['reponse']) == true){
    $tabRep[$_POST['question']] = $_POST['reponse'];
}

if(isset($_POST['fini']) == true && $_POST['fini'] == true){
    $resultat = verification($tabRep, $tabVrai);
    $obj -> resultat = $resultat;
    echo json_encode($obj);


}


function verification ($tab, $tabVrai) {
    $res = 0;
    for($i = 1; $i < 11; ++$i){
        if($tab[$i] == $tabVrai[$i]){
            $res += 1;
        }
    }
    return $res;
}

