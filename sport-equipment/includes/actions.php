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
            "informatie" => "test",
            "naam" => "Dumbbells",
            "tags" => ['onderarm', 'opperarm']
        ],
        3 => [
            "informatie" => "test",
            "naam" => "test4",
            "tags" => ['buik', 'heup']
        ],
        4 => [
            "informatie" => "test",
            "naam" => "test5",
            "tags" => ['buik', 'opperarm']
        ],
    ];

    return $tags[$id];
}