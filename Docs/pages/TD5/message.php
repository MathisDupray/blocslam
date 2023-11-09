<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>msg</title>
</head>
<body>
    <?php
        extract($_GET);
        $msg??="Hello wrold";
        $color??="black";
        $size??="10"
        //$color=$_GET["color"]??"black";
        //$size=$_GET["size"]."px"??"10px";
        //echo $size;
        //  echo $color;
    ?>
        <!-- var_dump($_GET); -->
        <p style="color:<?=$color?>; font-size:<?=$size?>px;">
            <?=$msg?> 
        </p>
    <ul>
        <li>
            <a href="?msg=Texte en vert de taille 20&size=20&color=green">Vert</a>
        </li>
        <li>
            <a href="?msg=Texte en vert de taille 20&size=30&color=blue">Blue</a>
        </li>
        <li>
            <a href="?msg=Texte en vert de taille 20&size=40&color=gray">Gray</a>
        </li>
    </ul>
</body>
</html>