<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Function php</title>
</head>
<body>
    <?php
        function titre(string $content, string $subTitle, int $level=1): void{ /* level = 1 -> valeur par défaut si pas précisé */
            echo "<h$level>$content</h$level>";
            if($subTitle!=NULL){
                echo "<p class='sub-title'>$subTitle</p>";
            }
        }

        function guette(string $key,$defaultValue=null): mixed{ /* null par défaut */
            return $_GET[$key]??$defaultValue;
        }

        function shufflePara(string $paragraphe): string{
            $words=explode(" ",strtolower($paragraphe));
            shuffle($words);
            return ucfirst(implode(" ",$words));
        }

        function post(string $key, mixed $defaultValue=null): mixed{
            return $_POST[$key]??$defaultValue;
        }

        function generateTable(int $rows, int $cols,$defaultValue=' '): mixed {
            $html = '<table>';
            for($i= 0;$i<$rows;$i++){
                $html.='<tr>';
                $html = str_repeat("<td>$defaultValue</td>", $cols);
                $html .= "</tr>";
            }
        }
    ?>
</body>
</html>