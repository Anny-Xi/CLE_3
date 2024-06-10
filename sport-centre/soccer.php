<?php
// html
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>sport-soccer</title>
    <link rel="stylesheet" type="text/css" href="css-sport-centre/sport-filter.css">
    <script type="text/javascript" src="js-sport-centre/sport-centre-form.js" defer ></script>
</head>
<body>
    <nav>
    </nav>

    <header>
    </header>
    <main>
        <section class="sport-container">
            <div class="sport-image-box">
                <img class="sport-image" alt="Foto van een voetbal" src="photo-sport-centre/voetbal.jpg">
            </div>

            <div class="sport-text-box">
                <h2> Voetbal </h2>
                <span class="sport-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae elementum. </span>
            </div>
        </section>

        <section class="sport-filters-container">
            <form id="filter-form">
                <input type="checkbox" id="slope" name="slope">
                <label for="slope"> Ingang voorziet van een helling</label> <br>

                <input type="checkbox" id="wheelchairLift" name="wheelchairLift">
                <label for="wheelchairLift"> Ingang voorziet van een rolstoel lift</label><br>

                <input type="checkbox" id="buildingLift" name="buildingLift">
                <label for="buildingLift"> Het gebouw is voorzien van een lift</label><br>

                <input type="checkbox" id="disabledBathroom" name="disabledBathroom">
                <label for="disabledBathroom"> Het gebouw is voorzien van een invalide toilet </label><br>

                <input type="checkbox" id="wheelchairAcs" name="wheelchairAcs">
                <label for="wheelchairAcs"> Het gebouw kan gemakkelijk betreed worden met een rolstoel</label><br>

                <input type="checkbox" id="automaticDoors" name="automaticDoors">
                <label for="automaticDoors"> De deuren openen automatisch</label><br>

                <input type="checkbox" id="manualDoors" name="manualDoors">
                <label for="manualDoors"> De deuren openen door middel van een knop</label><br><br>

                <input type="hidden" id="sport" value="soccer">


                <button class="button" name="submit" id="submit"> Zoek </button>
            </form>
        </section>
    </main>
</body>
</html>
