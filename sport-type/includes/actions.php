<?php
/**getSport
 * @return array
 */
function Sports()
{
    return [
        "naam van server" => "Sport type",
        [
            "Sport" => [
                [
                    "id" => 1,
                    "naam" => "zwemmen",
                    "beschrijving" => "beschrijving zwemmen",
                    "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
                    "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
                    "locatie" => ["binnen en buiten"],
                    "kenmerk" => ["water"],

                ],
                [
                    "id" => 2,
                    "naam" => "gewichtheffen",
                    "beschrijving" => "beschrijving gewichtheffen",
                    "impairment" => ["bennen"],
                    "locatie" => ["binnen",]
                ],
                [
                    "id" => 3,
                    "naam" => "boogschieten",
                    "beschrijving" => "beschrijving boogschieten",
                    "impairment" => ["bennen"],
                    "locatie" => ["binnen en buiten",]
                ],
                [
                    "id" => 4,
                    "naam" => "fietsen",
                    "beschrijving" => "beschrijving fietsen",
                    "impairment" => ["bennen", "armen"],
                    "locatie" => ["binnen en buiten",]
                ],
                [
                    "id" => 5,
                    "naam" => "kano",
                    "beschrijving" => "beschrijving kano",
                    "impairment" => ["bennen"],
                    "locatie" => ["binnen en buiten",]
                ],
                [
                    "id" => 6,
                    "naam" => "skiën",
                    "beschrijving" => "beschrijving skiën",
                    "impairment" => ["bennen", "arm"],
                    "locatie" => ["binnen en buiten",]
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

