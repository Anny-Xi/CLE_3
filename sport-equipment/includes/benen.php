<?php
function getApparatuur()
{
    return [
        [
            "id" => 1,
            "naam" => "Enkels",
            "ledemaat" => "Benen",
        ],
        [
            "id" => 2,
            "naam" => "Opperbeen",
            "ledemaat" => "Benen",
        ],
        [
            "id" => 3,
            "naam" => "Dijen",
            "ledemaat" => "Benen",
        ],
        [
            "id" => 4,
            "naam" => "Tenen",
            "ledemaat" => "Benen",
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
            "naam" => "Circulation Leg stoelfiets",
            "tags" => ['voeten', 'onderbeen']
        ],
        2 => [
            "informatie" => "test",
            "naam" => "Widestandband",
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