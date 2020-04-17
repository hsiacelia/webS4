<?php

session_start();

$obj = new stdClass;

$obj->fini = false;
$category = $_SESSION['category'];
$obj->resultat = 0;
$tab = $_SESSION['tabRep'];

$contentFileJson = file_get_contents("question.json");
$scoreBoard = json_decode($contentFileJson, true);

function point ($tabRepPrs, $tabVrai){
    $res = 0;
    for($i = 1; $i < 11; ++$i){
        if($tabRepPrs[$i] == $tabVrai[$i]){
            $res += 1;
        }
    }
    return $res;
}


if(isset($_POST['valider']) ){
    if(isset($_POST['numero']) && isset($_POST['reponse'])){
        $tab[$_POST['numero']] = $_POST['reponse'];
        $_SESSION['tabRep'] = $tab;
    }
    $_SESSION['cpt'] += 1;
    $obj->test = $_POST['numero'];

    if (isset($_SESSION['category']) && $_SESSION['cpt'] <11){
        foreach ($scoreBoard['category'] as $value){
            $value['numero'] = $value['numero'] + 1;
            $obj->number = $value['numero'];
            foreach ($value[$_SESSION['category']] as $value2){
                foreach ($value2[$_SESSION['cpt']] as $value3){
                    $obj->question = $value3['question'];
                    foreach($value3['reponse'] as $value4){
                        $obj->number = $_SESSION['cpt'];
                        $obj->reponse1 = $value4[1];
                        $obj->reponse2 = $value4[2];
                        $obj->reponse3 = $value4[3];
                        $obj->reponse4 = $value4[4];
                        $obj->message = $_SESSION['category'];

                    }
                }

            }
        }
    }
    elseif($_SESSION['cpt'] == 11){
        $obj->fini = true;
        $cuisine = array(1=>2, 2=>4, 3=>4, 4=>4, 5=>2, 6=>1, 7=>2, 8=>4, 9=>3, 10=>1);
        $pokemon = array(1=>3, 2=>2, 3=>3, 4=>3, 5=>4, 6=>1, 7=>3, 8=>1, 9=>2, 10=>1);
        $obj->tab = $_SESSION['tabRep'];
        if($category == 'cuisine'){
            $obj->resultat = point($_SESSION['tabRep'], $cuisine);
        }
        elseif ($category == 'pokemon'){
            $obj->resultat = point($_SESSION['tabRep'], $pokemon);
        }
        $_SESSION['tabRep'] = array();
    }
}



header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
