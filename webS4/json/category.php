<?php

$obj = new stdClass;

$obj->success = false;
$obj->number = null;

if (isset($_POST['category']) && in_array($_POST['category'], array('cuisine', 'pokemon'))) {
    session_start();
    $contentFileJson = file_get_contents("question.json");
    $scoreBoard = json_decode($contentFileJson, true);

    $_SESSION['category'] = $_POST['category'];
    $_SESSION['cpt'] = 1;
    $category = $_SESSION['category'];

    $obj->success = true;
    $obj->category = $category;

    foreach ($scoreBoard['category'] as $value){
        $value['numero'] = 1;
        $obj->number = $value['numero'];
        foreach ($value[$category] as $value2){
            foreach ($value2[$_SESSION['cpt']] as $value3){
                $obj->question = $value3['question'];
                foreach($value3['reponse'] as $value4){
                    $obj->reponse1 = $value4[1];
                    $obj->reponse2 = $value4[2];
                    $obj->reponse3 = $value4[3];
                    $obj->reponse4 = $value4[4];
                    break;
                }
            }

        }
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
