<?php
   include('login/session.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-inverse">
    <a class="navbar-brand" href="#"></a>
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">How to Play</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> My Account</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><h4 style="color:white; margin-right: 25px;">Welcome, <?php echo $login_session; ?></h4></li>
          <li><h5><a href="logout.php">Sign Out</a></h5></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container text-center">
    <div class="row">
      <div class="col-sm-3 well">
        <div class="well">

        </div>
        <div class="well">
          <p><a href="#">Interests</a></p>
          <p>
            <span class="label label-default">News</span>
            <span class="label label-primary">W3Schools</span>
            <span class="label label-success">Labels</span>
            <span class="label label-info">Football</span>
            <span class="label label-warning">Gaming</span>
            <span class="label label-danger">Friends</span>
          </p>
        </div>
        <div class="well">
          <button class="btn-lg btn gamehover"><span>Singleplayer </span></button>
          <button class="btn-lg btn playbutton gamehover"><span>Multiplayer </span></button>
        </div>
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
      </div>
      <div class="col-sm-7">
        <div class="row">
          <div class="col-sm-12">
            <div class="well">
              <p><img src="img/logo.png" id="typograph"></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="well">
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-2 well">
        <div class="thumbnail">
          <p>Upcoming Events:</p>
          <img src="paris.jpg" alt="Paris" width="400" height="300">
          <p><strong>Paris</strong></p>
          <p>Fri. 27 November 2015</p>
          <button class="btn btn-primary">Info</button>
        </div>
        <div class="well">
          <p>ADS</p>
        </div>
        <div class="well">
          <p>ADS</p>
        </div>
      </div>
    </div>
  </div>

  <footer class="container-fluid text-center">
    <p>Footer Text</p>
  </footer>

</body>

</html>