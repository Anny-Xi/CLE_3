<?php
    require_once "sport-centre-action.php";
    $data = getBuilding();

    header("Content-Type: application/json");
    echo json_encode($data);
    exit;
?>