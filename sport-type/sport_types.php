<?php
//Require functions for actions
require_once "includes/actions.php";

/**
 * Get json data fro sport
 */
if (!isset($_GET['id'])) {
    $data = Sports();
}else {
    $data = sportsDetail($_GET['id']);
}

//Disable caching for page
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");


//Set the header & output JSON so the client will know what to expect.
header("Content-Type: application/json");

//get encode the data from getSport function


echo json_encode($data);
exit;




