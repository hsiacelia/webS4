<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
session_start();

$obj = new stdClass();
$obj -> resultat = 0;
$resultat = 0;

$tabRep = array();
$tabVrai = array(1=>2,2=>4,3=>4,4=>4,5=>2,6=>1,7=>2,8=>4,9=>3,10=>1);


if(isset($_POST['question']) ===  true && isset($_POST['reponse']) == true){
    $tabRep[$_POST['question']] = $_POST['reponse'];
}

if(isset($_POST['fini']) == true && $_POST['fini'] == true){
    $resultat = verification($tabRep, $tabVrai);
    $_Post['resultat'] = $resultat;
//    $obj -> resultat = $res;
//    echo json_encode($obj);
    echo $resultat;

}


function verification ($tab, $tabVrai) {
    $res = 0;
    for($i = 0; $i < 10; ++$i){
        if($tab[$i] == $tabVrai[$i]){
            $res += 1;
        }
    }
    return $res;
}
