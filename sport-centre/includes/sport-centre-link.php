<?php
    require_once "sport-centre-action.php";
    $data = getBuilding();

    if (!isset($_GET['id'])) {
        $data = getBuilding();
    } else {
        $data = getBuildingDetails($_GET['id']);
    }


    header("Content-Type: application/json");
    echo json_encode($data);
    exit;
?>