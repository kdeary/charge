var stop = false;
var usermove = "";
var moves = ["Charg","Block","Attack"];
var userCharge = 0;
var CPUCharge = 0;
var userLives = 3;
var clientuser = null;
var CPULives = 3;
var turns = 0;
var cpumove = moves[Math.floor((Math.random() * 3) + 0)];
var foe = 'ARealPerson';
var blockingsize = '230';
var attackingsize = '600';
var chargingsize = '130';
var staysize = '120';
var hitsize = '330';

$(".bar").css("display", "none");
$(".headers").css("display", "none");
$("#leftbar").css("width", (userLives * 33 + 1) + '%');
$("#rightbar").css("width", (CPULives * 33 + 1) + '%');
$("#chargeleftbar").css("width", (userCharge * 25) + '%');
$("#chargerightbar").css("width", (CPUCharge * 25) + '%');

function start() {
  clientuser = prompt("Username:");
  gui();
  $("#startbtn").css("display", "none");
}

function gui(){
  $("#leftplayer").attr("src", "./img/stay.PNG").attr("width", staysize);
  $("#rightplayer").attr("src", "./img/stay.PNG").attr("width", staysize);
  $(".gui").append("<div id='movepick'><h3>What move are you going to use?<br></h3><button onclick='charge();'><img src='../charge/img/electric.png' class='icon'></button><button onclick='attack();'><img src='../charge/img/dualsword.png' class='icon'></button><button onclick='block();'><img src='../charge/img/shield.png' class='icon'></button><br><button onclick='endgame();'>End Game</button></div><br class='end'>");
  $(".bar").css("display", "block");
  $(".headers").css("display", "block");
}

function turnWrapup() {
  $("#leftbar").css("width", (userLives * 33 + 1) + '%');
  $("#rightbar").css("width", (CPULives * 33 + 1) + '%');
  $("#chargeleftbar").css("width", (userCharge * 25) + '%');
  $("#chargerightbar").css("width", (CPUCharge * 25) + '%');
  turns++;
}

function charge() {
  usermove = "Charg";
  resumeGame();
}
function attack() {
  usermove = "Attack";
  resumeGame();
}
function block() {
  usermove = "Block";
  resumeGame();
}
function endgame() {
  usermove = "stop";
  resumeGame();
}

function resumeGame(){
    if(CPUCharge > 0){
      cpumove = moves[Math.floor((Math.random() * 3) + 0)];
    } else {
      cpumove = 'Charg';
    }
    $("#comment").html("<h3 id='comment'>"+ foe +" was "+ cpumove +"ing while you were "+ usermove +"ing</h3><br class='end'>");
    console.log("Text Replaced");
    waittime = 3500;
    if(usermove == "Charg"){
        $("#leftplayer").attr("src", "").attr("width", "0");
        $("#leftplayer").attr("src", "../charge/img/charging.gif").attr("width", chargingsize);
        if(userCharge < 4) {
          userCharge++;
        }
    }
    if(cpumove == "Charg"){
        $("#rightplayer").attr("src", "").attr("width", "0");
        $("#rightplayer").attr("src", "../charge/img/charging.gif").attr("width", chargingsize);
        if(CPUCharge < 4) {
          CPUCharge++;
        }
    }
    if (usermove == "Block") {
      $("#leftplayer").attr("src", "").attr("width", "0");
      $("#leftplayer").attr("src", "../charge/img/blocking.gif").attr("width", blockingsize);
    }
    if (cpumove == "Block") {
      $("#rightplayer").attr("src", "").attr("width", "0");
      $("#rightplayer").attr("src", "../charge/img/blocking.gif").attr("width", blockingsize);
    }
    if (usermove == "Attack") {
      if(userCharge > 0){
        $("#rightplayer").attr("src", "").attr("width", "0");
        $("#rightplayer").attr("src", "../charge/img/hit.gif").attr("width", hitsize);
        $("#leftplayer").attr("src", "").attr("width", "0");
        $("#leftplayer").attr("src", "../charge/img/attacking.gif").attr("width", attackingsize);
      } else {
        gametip();
        setTimeout(gametip, 3000)
      }
    }
    if (cpumove == "Attack") {
      $("#rightplayer").attr("src", "").attr("width", "0");
      $("#rightplayer").attr("src", "../charge/img/attacking.gif").attr("width", attackingsize);
      $("#leftplayer").attr("src", "").attr("width", "0");
      $("#leftplayer").attr("src", "../charge/img/hit.gif").attr("width", hitsize);
    }
    if(usermove == "Attack"){
        if(userCharge > 0) {
          userCharge--;
          if(cpumove != "Block"){
              CPULives--;
          } else {
            $("#rightplayer").attr("src", "").attr("width", "0");
            $("#rightplayer").attr("src", "../charge/img/blocking.gif").attr("width", blockingsize);
          }
        }
    }
    if(cpumove == "Attack"){
        if(CPUCharge > 0){
          CPUCharge--;
          if(usermove != "Block"){
              userLives--;
          } else {
            $("#leftplayer").attr("src", "").attr("width", "0");
            $("#leftplayer").attr("src", "../charge/img/blocking.gif").attr("width", blockingsize);
          }
        }
    }
    if(cpumove == "Attack" && usermove == "Attack"){
      if(userCharge > 0) {
        $("#leftplayer").attr("src", "").attr("width", "0");
        $("#leftplayer").attr("src", "../charge/img/attacking.gif").attr("width", blockingsize);
        $("#rightplayer").attr("src", "").attr("width", "0");
        $("#rightplayer").attr("src", "../charge/img/attacking.gif").attr("width", blockingsize);
        waittime = 5000;
        setTimeout(doubleKill, 1500);
      }
    }
    turnWrapup();
    if(usermove == "stop"){
        $("h4,table,.end").remove();
    } else if(userLives < 1 && CPULives < 1){
      $("h4,table,.end").remove();
      $("body").append("<h1>It's A Tie!</h1>");
    } else {
        if(userLives < 1){
             $("h4,table,.end").remove();
             $("body").append("<h1>"+ foe + " wins!</h1>");
             setTimeout(opWin, waittime);
             $("#leftplayer").attr("src", "").attr("width", "0");
             $("#leftplayer").attr("src", "../charge/img/dead.PNG").attr("width", "300");
        } else if(CPULives < 1){
             $("h4,table,.end").remove();
             $("body").append("<h1><b>"+ clientuser + " wins!</b></h1>");
             setTimeout(userWin, waittime);
             $("#rightplayer").attr("src", "").attr("width", "0");
             $("#rightplayer").attr("src", "../charge/img/dead.PNG").attr("width", "300");
        } else {
            $("#movepick").remove();
            setTimeout(gui, waittime);
            $(".end").remove();
        }
    }
}

function doubleKill(){
  $("#leftplayer").attr("src", "").attr("width", "0");
  $("#leftplayer").attr("src", "../charge/img/hit.gif").attr("width", hitsize);
  $("#rightplayer").attr("src", "").attr("width", "0");
  $("#rightplayer").attr("src", "../charge/img/hit.gif").attr("width", hitsize);
}

function gametip() {
  var popup = document.getElementById('gametips');
  popup.classList.toggle('show');
}

function userWin(){
  $("#leftplayer").attr("src", "").attr("width", "0");
  $("#leftplayer").attr("src", "../charge/img/win.gif").attr("width", "300");
}

function opWin(){
  $("#rightplayer").attr("src", "").attr("width", "0");
  $("#rightplayer").attr("src", "../charge/img/win.gif").attr("width", "300");
}

function reloadConsole() {
  var container = document.getElementById("console");
  var content = container.innerHTML;
  container.innerHTML= content;
}
