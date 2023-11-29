<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Function php</title>
</head>
<body>
    <?php
        include 'function.php';
        titre("Titre de niveau 1",1);
        titre("Titre de niveau 2",'avec sub',2); /* ou préciser level:2 sans la chaine de characteres "" */
        titre("Test de niveau fdfdsf","Big sous titre",2);
        echo guette('page',true);
    ?>
</body>
</html>