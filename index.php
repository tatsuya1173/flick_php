<?php


if($_POST['green']){

    header('Location: flic.php');

}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="css/style.css">
   
</head>
<body>

<h3>ここにダーツの画像入るよ！</h3>


<form method="post" name="darts">
<button type="submit" name="green" value="1">緑色のボール</burron>
<button type="submit" name="yellow" value="2">黄色のボール</burron>
<button type="submit" name="blue" value="3">青色のボール</burron>
</form>


</body>
</html>