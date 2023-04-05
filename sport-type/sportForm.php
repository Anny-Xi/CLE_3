<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script type="text/javascript" src="js/sportForm.js" defer></script>
    <link rel="stylesheet" href="css/style.css">

    <title>Document</title>
</head>
<body>

<main>
    <button id="backToPrevious">Terg naar vorig pagina</button>

    <form id="sport_form">

        <h2>Selecteer het optie die voor u van toepassing zijn:</h2>
        <h3>Been</h3>
        <input type="radio" id="geen_beperking" name="been" value="geen beperking">
        <label for="geen_beperking">geen beperking</label><br>
        <input type="radio" id="licht_beperkt" name="been" value="licht beperkt">
        <label for="licht_beperkt">licht beperkt</label><br>
        <input type="radio" id="beperkt" name="been" value="beperkt">
        <label for="beperkt">beperkt</label><br>
        <input type="radio" id="erg_beperkt" name="been" value="erg beperkt">
        <label for="erg_beperkt">erg beperkt</label><br>

        <h3>Arm</h3>
        <input type="radio" id="geen_beperking" name="arm" value="geen beperking">
        <label for="geen_beperking">geen beperking</label><br>
        <input type="radio" id="licht_beperkt" name="arm" value="licht beperkt">
        <label for="licht_beperkt">licht beperkt</label><br>
        <input type="radio" id="beperkt" name="arm" value="beperkt">
        <label for="beperkt">beperkt</label><br>
        <input type="radio" id="erg_beperkt" name="arm" value="erg beperkt">
        <label for="erg_beperkt">erg beperkt</label><br>

        <h3>binnen of buiten</h3>
        <input type="radio" id="buiten" name="binnen_buiten" value="buiten">
        <label for="buiten">buiten</label><br>
        <input type="radio" id="binnen" name="binnen_buiten" value="binnen">
        <label for="binnen">binnen</label><br>
        <input type="radio" id="binnen_buiten" name="binnen_buiten" value="binnen en buiten">
        <label for="binnen_buiten">maak niet uit</label><br>

        <input id="sendForm" type="submit" value="Submit">

    </form>
</main>
</body>
</html>
