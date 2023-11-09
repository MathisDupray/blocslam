<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>msg</title>
</head>
<body>
    <?php
        extract($_POST); // POST -> Intercepter requete HTTP ------ GET -> URL -------- REQUEST -> Pas sécurisé
        $msg??="Hello wrold";
        $color??="black";
        $size??="10"
        //$color=$_GET["color"]??"black";
        //$size=$_GET["size"]."px"??"10px";
        //echo $size;
        //  echo $color;
    ?>
    <form action="<?=$_SERVER["PHP_SELF"]?>" method="post"> <!-- pour que l'action soit relié a la page elle emem -->
        <div>
            <label for="msg">message : </label>
            <textarea id="msg" name="msg" placeholder="Tapez votre msg"></textarea>
        </div>
        <div>
            <label for="color">color</label>
            <input type="color" id="color" value="<?=$color?>" name="color">Couleur</input>
        </div>
        <div>
            <label for="size">size</label>
            <input type="number" id="size" name="size" value="<?=$size?>"></input>
        </div>
        <button type="submit">Valider</button>
    </form>
        <p style="color:<?=$color?>; font-size:<?=$size?>px;">
            <?=$msg?> 
        </p>
</body>
</html>