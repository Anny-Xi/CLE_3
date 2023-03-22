<?php
    require_once "includes/sport-centre-action.php";

    $data = getBuilding();

    header("Content-Type: application/json");
    echo json_encode($data);
    exit;
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Filtered-buildings</title>
    <link rel="stylesheet" type="text/css" href="css-sport-centre/filtered-buildings.css">
    <script type="text/javascript" src="js-sport-centre/sport-centre-main.js" defer></script>
</head>
<body>
    <nav></nav>
    <header></header>

    <main>
        <section class="filtered-result">


        </section>
    </main>

    <footer>
    </footer>
</body>
</html>
