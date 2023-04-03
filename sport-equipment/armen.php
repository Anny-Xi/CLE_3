
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Armen</title>
    <script type="text/javascript" src="js-sport-equipment/main.js" defer></script>
    <script type="text/javascript" src="js-sport-equipment/form.js" defer></script>
</head>
<body>
<a href="home.html">Terug</a>
<h1 class="main-title">Armen</h1>
<p>Hier komt informatie over het geselecteerde lichaamsdeel en hoe je het kunt trainen</p>

<h3>Favorieten: (druk op tekst van het apparatuur als je het wilt verwijderen)</h3>

<form id="favorite">
    <ul id="list"></ul>

</form>

<div id="limbs"></div>

<dialog class="modal" id="limb-detail">
    <div class="modal-content"></div>

    <div id="favorite-list">
        <form id="favorite-form">
            <input type="text" placeholder="favorite item" name="todo" id="favorite-field"/>
            <input type="submit" value="Toevoegen als favoriet"/>
        </form>

    </div>

    <button class="modal-close">❌</button>
</dialog>

</body>
</html>