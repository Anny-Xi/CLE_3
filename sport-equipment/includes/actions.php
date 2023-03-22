<?php
function getApparatuur()
{
    return [
        [
            "id" => 1,
            "naam" => "test",
            "ledemaat" => "Armen",
        ],
        [
            "id" => 2,
            "naam" => "test",
            "ledemaat" => "Benen",
        ],
        [
            "id" => 3,
            "naam" => "test",
            "ledemaat" => "Core",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getApparatuurdetails($id)
{
    $tags = [
        1 => [
            "apparatuur" => "test 1",
            "tags" => ['polsen', 'onderarm']
        ],
        2 => [
            "apparatuur" => "test3",
            "tags" => ['bovenbeen', 'enkel']
        ],
        3 => [
            "apparatuur" => "test4",
            "tags" => ['buik', 'heup']
        ],
        4 => [
            "apparatuur" => "test5",
            "tags" => ['buik', 'opperarm']
        ],
        5 => [
            "apparatuur" => "test6",
            "tags" => ['heup', 'bovenbeen']
        ],
    ];

    return $tags[$id];
}