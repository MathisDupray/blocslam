<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ipsum</title>
</head>
<body>
    <?php
        const LOREM_ARRAY = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus, aliquid nam eos inventore cupiditate delectus ea natus dolor commodi libero adipisci exercitationem debitis ullam, reiciendis ratione doloremque incidunt animi."
        ,"Doloremque perferendis tempore corrupti dolore quis doloribus recusandae, repellendus animi vel cum minima numquam excepturi soluta aliquam nobis enim sequi vero error dolores officia neque nostrum suscipit! Assumenda, pariatur corporis?"
        ,"Labore explicabo illo facilis adipisci, repellat excepturi maiores laudantium pariatur facere voluptatibus, cupiditate eligendi. Iusto quaerat reprehenderit soluta facilis quia obcaecati perferendis maiores amet tempora, mollitia nemo! Ut, non iure!"
        ,"Labore explicabo illo facilis adipisci, repellat excepturi maiores laudantium pariatur facere voluptatibus, cupiditate eligendi. Iusto quaerat reprehenderit soluta facilis quia obcaecati perferendis maiores amet tempora, mollitia nemo! Ut, non iure!"
        ,"Unde debitis id reprehenderit quisquam labore quidem veniam sequi voluptatum et tempora nobis, suscipit placeat perspiciatis ab. Veniam nam quasi et facere repudiandae. Ab sed neque officia inventore qui mollitia?"
    ];
        include 'function.php';
        $count = $_POST["count"];
        $j=0;
        $loremSize = count(LOREM_ARRAY);
        for($i=0; $i<$count; $i++){
            $j=rand(0,$loremSize-1);
            titre("Para $i",'',6);
            echo "<div>".LOREM_ARRAY[$j]."</div>";
        }
    ?>
    <form method="post">
        <label for="nb">Nb paragraphes</label>
        <input type="number" name="count" id="nb" value="<?=$count?>">
    </form>
</body>
</html>