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
            "naam" => "Flexibele staaf",
            "tags" => ['polsen', 'onderarm']
        ],
        2 => [
            "naam" => "Dumbbells",
            "tags" => ['onderarm', 'opperarm']
        ],
        3 => [
            "naam" => "test4",
            "tags" => ['buik', 'heup']
        ],
        4 => [
            "naam" => "test5",
            "tags" => ['buik', 'opperarm']
        ],
    ];

    return $tags[$id];
}