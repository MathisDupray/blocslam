<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
        extract($_POST); // POST -> Intercepter requete HTTP ------ GET -> URL -------- REQUEST -> Pas sécurisé ------------ $POST s'occupe de récuperer ckItalic
        $msg??="Hello wrold";
        $color??="black";
        $size??="10";
        $isItalic=isset($ckItalic)?";font-style: italic":"";
        $italicStyle=$isItalic?";font-style: italic":"";
        $italicCk=$isItalic?"checked":"";
       
        $isBold=isset($ckBold)?";font-weight: bold":"";
        $boldStyle=$isItalic?";font-weight: bold":"";
        $boldCk=$isBold?"checked":"";
        //$color=$_GET["color"]??"black";
        //$size=$_GET["size"]."px"??"10px";
        //echo $size;
        //  echo $color;
    ?>
        <input type="checkbox" id="ckBold" name="ckBold" <?=$boldCk?>>
        <label for="ckBold">Gras</label>
    <input type="checkbox" id="italic_check" name="ckItalic" checked/>
    <label for="ckItalic">Italic</label>
        <input type="checkbox" id="under_check" name="Souligné" checked>
        <label for="under_check">Souligné</label>
    <input type="checkbox" id="barred_check" name="Barré" checked/>
    <label for="barred_check">Barré</label>
        <input type="color" id="color" name="color">
        <input type="number" id="number_select" name="font-size">
    <select name="font" id="font_select">
        <option value="Cursive">Cursive</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Verdana">Verdana</option>
        <option value="Monospace">Monospace</option>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Serif">Serif</option>
    </select>
    <button type="submit" method="post">Valider</button>
    <p style="color:<?=$color ?>; font-size: <?=$size?>px;<?=$italicStyle?> <?=$boldStyle?>">gfdgfdgfdgfdgfdgfdgfd</p>
</body>
</html>