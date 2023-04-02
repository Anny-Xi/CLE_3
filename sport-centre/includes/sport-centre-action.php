<?php

function getBuilding () {
    return [
        [
            "sport" => ["footbal", "basketbal", "tennis", "swimming"],
            "slope" => false,
            "wheelchairLift" => false,
            "buildingLift" => false,
            "disabledBathroom" => false,
            "wheelchairAcs" => true,
            "automaticDoors" => true,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness"],
            "slope" => true,
            "wheelchairLift" => false,
            "buildingLift" => false,
            "disabledBathroom" => false,
            "wheelchairAcs" => true,
            "automaticDoors" => true,
            "manualDoors" => false,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => true,
            "wheelchairLift" => false,
            "buildingLift" => true,
            "disabledBathroom" => true,
            "wheelchairAcs" => true,
            "automaticDoors" => false,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => true,
            "wheelchairLift" => true,
            "buildingLift" => true,
            "disabledBathroom" => true,
            "wheelchairAcs" => true,
            "automaticDoors" => true,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => true,
            "wheelchairLift" => true,
            "buildingLift" => true,
            "disabledBathroom" => true,
            "wheelchairAcs" => false,
            "automaticDoors" => false,
            "manualDoors" => false,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => false,
            "wheelchairLift" => false,
            "buildingLift" => false,
            "disabledBathroom" => true,
            "wheelchairAcs" => true,
            "automaticDoors" => true,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => false,
            "wheelchairLift" => true,
            "buildingLift" => true,
            "disabledBathroom" => false,
            "wheelchairAcs" => true,
            "automaticDoors" => false,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => true,
            "wheelchairLift" => false,
            "buildingLift" => false,
            "disabledBathroom" => true,
            "wheelchairAcs" => true,
            "automaticDoors" => false,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => false,
            "wheelchairLift" => true,
            "buildingLift" => false,
            "disabledBathroom" => false,
            "wheelchairAcs" => true,
            "automaticDoors" => false,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "slope" => true,
            "wheelchairLift" => false,
            "buildingLift" => true,
            "disabledBathroom" => true,
            "wheelchairAcs" => false,
            "automaticDoors" => true,
            "manualDoors" => false,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness"],
            "slope" => true,
            "wheelchairLift" => true,
            "buildingLift" => false,
            "disabledBathroom" => false,
            "wheelchairAcs" => false,
            "automaticDoors" => true,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness"],
            "slope" => true,
            "wheelchairLift" => false,
            "buildingLift" => false,
            "disabledBathroom" => true,
            "wheelchairAcs" => true,
            "automaticDoors" => true,
            "manualDoors" => false,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness"],
            "slope" => false,
            "wheelchairLift" => false,
            "buildingLift" => true,
            "disabledBathroom" => false,
            "wheelchairAcs" => false,
            "automaticDoors" => false,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness"],
            "slope" => true,
            "wheelchairLift" => true,
            "buildingLift" => true,
            "disabledBathroom" => false,
            "wheelchairAcs" => true,
            "automaticDoors" => false,
            "manualDoors" => true,
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness"],
            "slope" => true,
            "wheelchairLift" => false,
            "buildingLift" => true,
            "disabledBathroom" => true,
            "wheelchairAcs" => false,
            "automaticDoors" => true,
            "manualDoors" => true,
        ],
    ];
}

function buildingDetails ($id) {
    $tags = [
        1 => [
            "name" => "sportschool 1",
            "location" => "Nesselande"
        ],
        2 => [
            "name" => "sportschool 2",
            "location" => "Blaak"
        ],
        3 => [
            "name" => "sportschool 4",
            "location" => "Beurs"
        ],
        4 => [
            "name" => "sportschool 4",
            "location" => "Beurs"
        ],
        5 => [
            "name" => "sportschool 5",
            "location" => "Slinge"
        ],
        6 => [
            "name" => "sportschool 6",
            "location" => "Kralingsezoom",
        ],
        7 => [
            "name" => "sportschool 7",
            "location" => "Eendrachtsplein"
        ],
        8 => [
            "name" => "sportschool 8",
            "location" => "Schiedam"
        ],
        9 => [
            "name" => "sportschool 9",
            "location" => "Alexander",
        ],
        11 => [
            "name" => "sportschool 10",
            "location" => "Slinge",
        ],
        12 => [
            "name" => "sportschool 10",
            "location" => "Rotterdam Zuid",
        ],
        13 => [
            "name" => "sportschool 10",
            "location" => "Rotterdam Noord",
        ],
        14 => [
            "name" => "sportschool 10",
            "location" => "Rotterdam West",
        ],
        15 => [
            "name" => "sportschool 10",
            "location" => "Rotterdam Oost",
        ],
    ];
    return $tags[$id];
}

