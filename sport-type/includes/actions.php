<?php
/**getSport
 * @return array
 */
function Sports()
{
    return [
        "Sport" => [
            [
                "id" => 1,
                "naam" => "zwemmen"
            ],
            [
                "id" => 2,
                "naam" => "gewichtheffen"
            ],
            [
                "id" => 3,
                "naam" => "boogschieten"
            ],
            [
                "id" => 4,
                "naam" => "fietsen"
            ],
            [
                "id" => 5,
                "naam" => "kano"
            ],
            [
                "id" => 6,
                "naam" => "skiën"
            ],
            [
                "id" => 7,
                "naam" => "atletiek"
            ],
            [
                "id" => 8,
                "naam" => "badminton"
            ],
            [
                "id" => 9,
                "naam" => "boccia"
            ],
            [
                "id" => 10,
                "naam" => "gym"
            ],
            [
                "id" => 11,
                "naam" => "paardensport"
            ],
            [
                "id" => 12,
                "naam" => "roeien"
            ],
            [
                "id" => 13,
                "naam" => "bordspel"
            ],
            [
                "id" => 14,
                "naam" => "schieten sport"
            ],
            [
                "id" => 15,
                "naam" => "Zittend volleybal"
            ],
            [
                "id" => 16,
                "naam" => "tafeltennis"
            ],
            [
                "id" => 17,
                "naam" => "Taekwondo"
            ],
            [
                "id" => 18,
                "naam" => "Triathlon"
            ],
            [
                "id" => 19,
                "naam" => "rolstoelbasketbal"
            ],
            [
                "id" => 20,
                "naam" => "rolstoelschermen"
            ],
            [
                "id" => 21,
                "naam" => "rolstoelrugby"
            ],
            [
                "id" => 22,
                "naam" => "rolstoel-tennis"
            ],
            [
                "id" => 23,
                "naam" => "ijshockey"
            ],
            [
                "id" => 24,
                "naam" => "snowboarden"
            ],
            [
                "id" => 25,
                "naam" => "curling"
            ]

        ]
    ];
}


function sportsDetail($id)
{
    $details = [
        1 => [
            "id" => 1,
            "naam" => "zwemmen",
            "beschrijving" => "beschrijving zwemmen",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["water sport"]
        ],
        2 => [
            "id" => 2,
            "naam" => "gewichtheffen",
            "beschrijving" => "beschrijving gewichtheffen",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["geen beperking"],
            "locatie" => ["binnen"],
            "kenmerk" => ["Boven lichaam kracht wordt sterk vereist"]
        ],
        3 => [
            "id" => 3,
            "naam" => "boogschieten",
            "beschrijving" => "beschrijving boogschieten",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["zowel voor op rolstoel als staande"]
        ],
        4 => [
            "id" => 4,
            "naam" => "fietsen",
            "beschrijving" => "beschrijving fietsen",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["zowel voor op rolstoel als staande"]
        ],
        5 => [
            "id" => 5,
            "naam" => "kano",
            "beschrijving" => "beschrijving kano",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["buiten"],
            "kenmerk" => ["water sport"]
        ],
        6 => [
            "id" => 6,
            "naam" => "skiën",
            "beschrijving" => "beschrijving skiën",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["wintersport, als binnensport is het hele jaar uit te voeren"]
        ],
        7 => [
            "id" => 7,
            "naam" => "atletiek",
            "beschrijving" => "beschrijving atletiek",
            "Benen" => ["geen beperking","licht beperkt", "beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["erg beperkt locatie"]
        ],
        8 => [
            "id" => 8,
            "naam" => "badminton",
            "beschrijving" => "beschrijving badminton",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["met aangepast regels"]
        ],
        9 => [
            "id" => 9,
            "naam" => "boccia",
            "beschrijving" => "beschrijving boccia",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["Geschikt voor mensen met extreem beperking"]
        ],
        10 => [
            "id" => 10,
            "naam" => "gym",
            "beschrijving" => "beschrijving gym",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["Thuis uitvoerbar"]
        ],
        11 => [
            "id" => 11,
            "naam" => "paardensport",
            "beschrijving" => "beschrijving paardensport",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["een paard wordt vereist"]
        ],
        12 => [
            "id" => 12,
            "naam" => "roeien",
            "beschrijving" => "beschrijving roeien",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["buiten"],
            "kenmerk" => ["water sport"]
        ],
        13 => [
            "id" => 13,
            "naam" => "bordspel",
            "beschrijving" => "beschrijving bordspel",
            "Benen" => ["geen beperking","licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["geen actiev sport"]
        ],
        14 => [
            "id" => 14,
            "naam" => "schieten sport",
            "beschrijving" => "beschrijving schieten sport",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["rolstoel friendelijk sport"]
        ],
        15 => [
            "id" => 15,
            "naam" => "Zittend volleybal",
            "beschrijving" => "beschrijving Zittend volleybal",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["buiten"],
            "kenmerk" => ["rolstoel friendelijk sport"]
        ],
        16 => [
            "id" => 16,
            "naam" => "tafeltennis",
            "beschrijving" => "beschrijving tafeltennis",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["rolstoel friendelijk sport"]
        ],
        17 => [
            "id" => 17,
            "naam" => "Taekwondo",
            "beschrijving" => "beschrijving Taekwondo",
            "Benen" => ["licht beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["vechtsport"]
        ],
        18 => [
            "id" => 18,
            "naam" => "Triathlon",
            "beschrijving" => "beschrijving Triathlon",
            "Benen" => ["licht beperkt", "beperkt"],
            "Armen" => ["licht beperkt", "beperkt"],
            "locatie" => ["buiten"],
            "kenmerk" => ["combinatie van zwemmen, fietsen en schiesport"]
        ],
        19 => [
            "id" => 19,
            "naam" => "rolstoelbasketbal",
            "beschrijving" => "beschrijving rolstoelbasketbal",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["bal sport"]
        ],
        20 => [
            "id" => 20,
            "naam" => "rolstoelschermen",
            "beschrijving" => "beschrijving rolstoelschermen",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["binnen sport"]
        ],
        21 => [
            "id" => 21,
            "naam" => "rolstoelrugby",
            "beschrijving" => "beschrijving rolstoelrugby",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["bal sport"]
        ],
        22 => [
            "id" => 22,
            "naam" => "rolstoel-tennis",
            "beschrijving" => "beschrijving rolstoel-tennis",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["bal sport"]
        ],
        23 => [
            "id" => 23,
            "naam" => "ijshockey",
            "beschrijving" => "beschrijving ijshockey",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["wintersport, als binnensport is het hele jaar uit te voeren"]
        ],
        24 => [
            "id" => 24,
            "naam" => "snowboarden",
            "beschrijving" => "beschrijving snowboarden",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen en buiten"],
            "kenmerk" => ["wintersport, als binnensport is het hele jaar uit te voeren"]
        ],
        25 => [
            "id" => 25,
            "naam" => "curling",
            "beschrijving" => "beschrijving curling",
            "Benen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "Armen" => ["licht beperkt", "beperkt", "erg beperkt"],
            "locatie" => ["binnen"],
            "kenmerk" => ["wintersport, als binnensport is het hele jaar uit te voeren, samenwerk"]
        ]
    ];

    return $details[$id];
}

