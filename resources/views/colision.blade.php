<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Colision</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <canvas id="canvas" width="500px" height="500px" style="border: 1px solid black;"> </canvas>
        <script type="text/javascript" src="{{ URL::to('colision/js/colision.js') }}"></script>
        <h3>Mover con las flechas del teclado para mover el rectangulo negro. Una vez choque con el rectangulo verde saldrá un alert de que se chocaron. </h3>
    </body>
</html>