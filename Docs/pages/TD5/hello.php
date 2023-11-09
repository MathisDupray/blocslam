<?php 
    $content = "hello world";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello php</title>
</head>
<body>
    <?php
        echo "Hello world";
    ?>
    <h1><?=$content?></h1>
    <p>
        <?="PHP est cappable de parser les variables dans une chaine : $content"?>
        <p><?="pour éviter la concaténation ".$content . " des chaines"?></p>
    </p>
</body>
</html>