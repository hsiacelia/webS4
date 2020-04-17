<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

session_start();
session_destroy();

//echo json_encode(true);
header('Location: ../index.html');