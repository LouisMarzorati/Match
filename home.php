<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Match</title>
    <link rel="stylesheet" type="text/css" href="matchstyle.css">
    <link rel="stylesheet" type="text/css" href="bounce.css">
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js">
    </script>

    <script src="match.js"></script>

  </head>

  <body id="body">

   <div class="container">
      <div class="jumbotron center-text" id="banner-color">
        <h1>MATCH</h1>
        <div class="row">
          <button id = "startButton" class = "btn btn-default col-sm-2" onclick="scoreTimer();hideButton()">START</button>
          <div class = "col-sm-2 scoreDiv" id = "time">100</div>
          <div class="col-sm-2 scoreDiv"> Score: </div>
          <div class="col-sm-2 scoreDiv" id = "score"></div>
        </div>
      </div>
      
      <div class="row"> 
<!--       <?php
        for ($i=0; $i <12 ; $i++) { 
          echo "<div class=\"col-sm-2\">";
          $place = rand(0,12);
        }
      ?> -->
        <div class="col-sm-2">
            <span id='red'><button class = "animation-target " id="tilebuttonRed" onclick="clickedTile('red','#e74c3c')"></button></span>
        </div>

        <div class="col-sm-2">
            <span id='purple'><button class = "animation-target" id="tilebuttonPurple" onclick="clickedTile('purple','#9b59b6')"></button></span>
        </div>

        <div class="col-sm-2">
            <span id='yellow'><button class = "animation-target" id="tilebuttonYellow" onclick="clickedTile('yellow','#f1c40f')"></button></span>
        </div>

        <div class="col-sm-2">
            <span id='orange'><button class = "animation-target" id="tilebuttonOrange" onclick="clickedTile('orange','#e67e22')"></button></span>
        </div>

      </div>

      <div class="row" style="margin-top:20px">
          
          <div class="col-sm-2">
            <span id ='green1'><button class = "animation-target2" id="tilebuttonGreen1" onclick="clickedTile('green1','#2ecc71')"></button></span>
          </div>

        <div class="col-sm-2">
            <span id ='blue1'><button class = "animation-target2 " id="tilebuttonBlue1" onclick="clickedTile('blue1','#3498db')"></button></span>
          </div>
          
        <div class="col-sm-2">
            <span id='red1'><button class = "animation-target2" id="tilebuttonRed1" onclick="clickedTile('red1','#e74c3c')"></button></span>
        </div>

        <div class="col-sm-2">
            <span id='yellow1'><button class = "animation-target2" id="tilebuttonYellow1" onclick="clickedTile('yellow1','#f1c40f')"></button></span>
        </div>

      </div>

      <div class="row" style="margin-top:20px">

        <div class="col-sm-2">
            <span id='orange1'><button class = "animation-target3" id="tilebuttonOrange1" onclick="clickedTile('orange1','#e67e22')"></button></span>
        </div>
        
        <div class="col-sm-2">
            <span id ='blue'><button class = "animation-target3" id="tilebuttonBlue" onclick="clickedTile('blue','#3498db')"></button></span>
          </div>

        <div class="col-sm-2">
            <span id='purple1'><button class = "animation-target3" id="tilebuttonPurple1" onclick="clickedTile('purple1','#9b59b6')"></button></span>
        </div>

        <div class="col-sm-2">
            <span id ='green'><button class = "animation-target3" id="tilebuttonGreen" onclick="clickedTile('green','#2ecc71')"></button></span>
        </div>
      </div>

    </div>
  </body>
</html>