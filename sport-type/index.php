<?php
//Require functions for actions
require_once "includes/actions.php";

$data = getSport();


//Based on the existence of the GET parameter, 1 of the 2 functions will be called
//if (!isset($_GET['id'])) {
//    $data = getSport();
//} else {
//    $data = getSportDetail($_GET['id']);
//}

//Set the header & output JSON so the client will know what to expect.
header("Content-Type: application/json");

$dataArray = json_encode($data);
