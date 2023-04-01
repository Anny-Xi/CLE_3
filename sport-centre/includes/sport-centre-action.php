<?php

function getBuilding () {
    return [
        [
            "sport" => ["footbal", "basketbal", "tennis", "swimming"],
            "enterSpecs" => ["helling"],
            "buildingSpecs" => ["lift"],
            "doors" => ["Automatisch"],
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness"],
            "enterSpecs" => ["rolstoelLift"],
            "buildingSpecs" => ["Lift", "invalideToilet", "ruimte"],
            "doors" => ["knop"]
        ],

        [
            "sport" => ["footbal", "fitness"],
            "enterSpecs" => ["Helling"],
            "buildingSpecs" => [ "Lift", "Invalide toilet"],
            "doors" => ["Automatisch"]
        ],

        [
            "sport" => ["bowling"],
            "enterSpecs" => [""],
            "buildingSpecs" => ["ruimte"],
            "doors" => ["Automatisch"],
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "bowling", "fitness", "swimming"],
            "enterSpecs" => [""],
            "buildingSpecs" => ["Invalide toilet"],
            "doors" => [""],
        ],

        [
            "sport" => ["footbal"],
            "enterSpecs" => ["helling"],
            "buildingSpecs" => ["lift"],
            "doors" => ["Automatisch"],
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "swimming"],
            "enterSpecs" => ["rolstoelLift"],
            "buildingSpecs" => ["Lift", "invalideToilet", "ruimte"],
            "doors" => ["knop"]
        ],

        [
            "sport" => ["tennis", "swimming"],
            "enterSpecs" => ["Helling"],
            "buildingSpecs" => [ "Lift", "Invalide toilet"],
            "doors" => ["Automatisch"]
        ],

        [
            "sport" => ["footbal", "basketbal", "tennis", "swimming"],
            "enterSpecs" => [""],
            "buildingSpecs" => ["ruimte"],
            "doors" => ["Automatisch"],
        ],

        [
            "sport" => ["footbal", "fitness"],
            "enterSpecs" => [""],
            "buildingSpecs" => ["Invalide toilet"],
            "doors" => [""],
        ],
    ];
}

function buildingDetails ($id) {
    $tags = [
        1 => [
            "name" => "sportschool 1",
            "location" => "locatie 1"
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
        10 => [
            "name" => "sportschool 10",
            "location" => "Slinge",
        ],
    ];
    return $tags[$id];
}

