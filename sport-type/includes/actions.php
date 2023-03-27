<?php
/**getSport
 * @return array
 */
function getSport()
{
    return [
        "naam van server" => "Sport type",
        [
            "Tag" => [
                [ "tagNaam" => "beperking",
                    [
                        "naam" => "armen",
                        [
                            "id" => 1,
                            "niveau" => "licht beperkt"
                        ],
                        [
                            "id" => 2,
                            "niveau" => "beperkt "
                        ],
                        [
                            "id" => 3,
                            "niveau" => "erg beperkt"
                        ]
                    ],
                    [
                        "naam" => "benen",
                        [
                            "id" => 1,
                            "niveau" => "licht beperkt"
                        ],
                        [
                            "id" => 2,
                            "niveau" => "beperkt "
                        ],
                        [
                            "id" => 3,
                            "niveau" => "erg beperkt"
                        ]
                    ]
                ],
                [
                    "tagNaam" => "locatie",
                    [
                        "id" => 1,
                        "naam" => "binnen"
                    ],
                    [
                        "id" => 2,
                        "naam" => "buiten "
                    ],
                    [
                        "id" => 3,
                        "naam" => "binnen en buiten"
                    ]
                ],
                [
                    "tagNaam" => "kenmerk",
                    [
                        "id" => 1,
                        "naam" => "binnen"
                    ],
                    [
                        "id" => 2,
                        "naam" => "buiten "
                    ],
                    [
                        "id" => 3,
                        "naam" => "binnen en buiten"
                    ]
                ]
            ],
            "Sport" => [
                [
                    "id" => 1,
                    "naam" => "zwemmen",
                    "beschrijving" => "beschrijving zwemmen",
                    "tag" => ["1", "bennen"]
                ],
                [
                    "id" => 2,
                    "naam" => "gewichtheffen",
                    "beschrijving" => "beschrijving gewichtheffen",
                    "impairment" => ["bennen"]
                ],
                [
                    "id" => 3,
                    "naam" => "boogschieten",
                    "beschrijving" => "beschrijving boogschieten",
                    "impairment" => ["bennen"]
                ],
                [
                    "id" => 4,
                    "naam" => "fietsen",
                    "beschrijving" => "beschrijving fietsen",
                    "impairment" => ["bennen", "armen"]
                ],
                [
                    "id" => 5,
                    "naam" => "kano",
                    "beschrijving" => "beschrijving kano",
                    "impairment" => ["bennen"]
                ],
                [
                    "id" => 6,
                    "naam" => "skiën",
                    "beschrijving" => "beschrijving skiën",
                    "impairment" => ["bennen", "arm"]
                ]
            ]
        ]
    ];
//    return [
//        [
//            "id" => 1,
//            "name" => "zwemmen",
//            "impairment" => ["armen","bennen"]
//        ],
//        [
//            "id" => 2,
//            "name" => "gewichtheffen",
//            "impairment" => ["bennen"]
//        ],
//        [
//            "id" => 3,
//            "name" => "boogschieten",
//            "impairment" => ["bennen"]
//        ],
//        [
//            "id" => 4,
//            "name" => "fietsen",
//            "impairment" => ["bennen", "armen"]
//        ],
//        [
//            "id" => 5,
//            "name" => "kano",
//            "impairment" => ["bennen"]
//        ],
//        [
//            "id" => 6,
//            "name" => "skiën",
//            "impairment" => ["bennen", "arm"],
//            "location" => ["sneeuw"]
//        ]
//    ];
}

/**
 * @param $id
 * @return mixed
 */
function getSportDetail($id)
{
    $tags = [
        1 => [
            "beschrijving" => "beschrijving zwemmen",
            "tags" => ['water', 'binnen en buiten']
        ],
        2 => [
            "beschrijving" => "beschrijving gewichtheffen",
            "tags" => ['droog', 'binnen']
        ],
        3 => [
            "beschrijving" => "beschrijving boogschieten",
            "tags" => ['droog', 'binnen en buiten']
        ],
        4 => [
            "beschrijving" => "beschrijving fietsen",
            "tags" => ['droog', 'binnen en buiten']
        ],
        5 => [
            "beschrijving" => "beschrijving kano",
            "tags" => ['water', 'buiten']
        ],
        6 => [
            "beschrijving" => "beschrijving skiën",
            "tags" => ['sneeuw', 'binnen en buiten']
        ],
    ];

    return $tags[$id];
}
