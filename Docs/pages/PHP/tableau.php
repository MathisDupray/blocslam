<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau</title>
</head>
<body>
    <form method="post" action="tableau.php">
        <label for="nbrow">Nb lignes</label>
        <input type="number" name="nbrow" id="nbrow" value="<?=$row?>">
        <label for="nbcol">Nb col</label>
        <input type="number" name="nbcol" id="nbcol" value="<?=$col?>">
        <input type="submit"  value ="Envoyer">
    </form>
    <?php
    include 'function.php';
    $nbcol = post("nbcol");
    $nbrow = post("nbrow");
    echo generateTable($nbrow,$nbcol);
    ?>
</body>
</html>
<table>
    <thead>
        <th></th>
    </thead>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>