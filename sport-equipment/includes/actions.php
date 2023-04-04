<?php
function getApparatuur()
{
    return [
        [
            "id" => 1,
            "naam" => "Polsen",
            "ledemaat" => "Armen",
        ],
        [
            "id" => 2,
            "naam" => "Opperarm",
            "ledemaat" => "Armen",
        ],
        [
            "id" => 3,
            "naam" => "Onderarm",
            "ledemaat" => "Armen",
        ],
        [
            "id" => 4,
            "naam" => "Vingers",
            "ledemaat" => "Armen",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getApparatuurDetails($id)
{
    $tags = [
        1 => [
            "id" => 1,
            "informatie" => "Wrist wraps zijn simpelweg elastische banden voor om je pols. 
            De polsbeschermers worden gebruikt in de sportschool bij bepaalde oefeningen. 
            Ze bieden ondersteuning en houden het polsgewricht op temperatuur.",
            "naam" => "Flexibele staaf",
            "tags" => ['polsen', 'onderarm']
        ],
        2 => [
            "informatie" => "Met verstelbare dumbbells kun je het gewicht van de dumbbell veranderen, wat handig kan zijn als je beperkte mobiliteit of kracht hebt. 
            Sommige verstelbare dumbbells kunnen met slechts één hand worden aangepast, waardoor ze gemakkelijker te gebruiken zijn",
            "naam" => "Dumbbells",
            "tags" => ['onderarm', 'opperarm']
        ],
        3 => [
            "informatie" => "Onderarm-oefenballen zijn kleine, 
            in de hand te houden ballen die zijn ontworpen om de grijpkracht en het 
            uithoudingsvermogen van de onderarmspieren te verbeteren.",
            "naam" => "Onderarm oefenbal",
            "tags" => ['onderarm', 'pols']
        ],
        4 => [
            "informatie" => "Handgrijpers zijn kleine apparaten die u met uw vingers samenknijpt om kracht in uw hand en vingers op te bouwen. 
            Ze zijn er in verschillende weerstandsniveaus en zijn een geweldige manier om je grijpkracht te verbeteren.",
            "naam" => "Hand grijpers",
            "tags" => ['vingers', 'polsen']
        ],
    ];

    return $tags[$id];
}