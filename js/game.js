var stop = false;
var usermove = "";
var moves = ["Charg","Block","Attack"];
var userCharge = 0;
var CPUCharge = 0;
var userLives = 3;
var clientuser = "Hydrosaur";
var CPULives = 3;
var turns = 0;
var cpumove = moves[Math.floor((Math.random() * 3) + 0)];
var foe = 'ARealPerson';
var blockingsize = '230';
var attackingsize = '600';
var chargingsize = '130';
var staysize = '230';
var hitsize = '330';
function start() {
  gui();
}

function gui(){
  $("#leftplayer").attr("src", "./img/stay.PNG").attr("width", "130");
  $("#rightplayer").attr("src", "./img/stay.PNG").attr("width", "130");
  $(".gui").append("<h4 id='movepick'>What move are you going to use? <button onclick='charge();' style='color: yellow;'>Charge</button><button onclick='attack();' style='color: red;'>Attack</button><button onclick='block();' style='color: lightgray;'>Block</button><button onclick='endgame();'>End Game</button></h4><br class='end'>");
}

function turnWrapup() {
  $(".wrapup").remove();
  $("body").append("<table class='wrapup'><tr><th>Turns:</th><th>"+ turns +"</th></tr><tr><th>"+ clientuser +" Lives:</td><td>"+ userLives +"</td></tr><tr><th>"+ clientuser +" Charge:</th><td>"+ userCharge +"</td></tr><tr><th>"+ foe +" Lives:</td><td>"+ CPULives +"</td></tr><tr><th>"+ foe +" Charge:</th><td>"+ CPUCharge +"</td></tr></table>")
  console.log("table appended");
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
    $("#comment").remove();
    $("body").append("<div id='comment'><h4>"+ foe +" was "+ cpumove +"ing while you were "+ usermove +"ing</h4><br class='end'></div>");
    console.log("Text Replaced");
    if(usermove == "Charg"){
        $("#leftplayer").attr("src", "").attr("width", "0");
        $("#leftplayer").attr("src", "../charge/img/charging.gif").attr("width", chargingsize);
        userCharge++;
    }
    if(cpumove == "Charg"){
        $("#rightplayer").attr("src", "").attr("width", "0");
        $("#rightplayer").attr("src", "../charge/img/charging.gif").attr("width", chargingsize);
        CPUCharge++;
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
      $("#rightplayer").attr("src", "").attr("width", "0");
      $("#rightplayer").attr("src", "../charge/img/hit.gif").attr("width", hitsize);
      $("#leftplayer").attr("src", "").attr("width", "0");
      $("#leftplayer").attr("src", "../charge/img/attacking.gif").attr("width", attackingsize);
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
          }
        }
    }
    if(cpumove == "Attack"){
        if(CPUCharge > 0){
          CPUCharge--;
          if(usermove != "Block"){
              userLives--;
          }
        }
    }
    turnWrapup();
    if(usermove == "stop"){
        $("h4,table,.end").remove();
    } else {
        if(userLives < 1){
             $("h4,table,.end").remove();
             $("body").append("<h4>"+ foe + " wins!</h4>");
             $("#leftplayer").attr("src", "").attr("width", "0");
             $("#leftplayer").attr("src", "../charge/img/dead.PNG").attr("width", "300");
        } else if(CPULives < 1){
             $("h4,table,.end").remove();
             $("body").append("<h3 style='font-family: Verdana;'><b>"+ clientuser + " wins!</b></h3>");
             $("#rightplayer").attr("src", "").attr("width", "0");
             $("#rightplayer").attr("src", "../charge/img/dead.PNG").attr("width", "300");
        } else {
            $("#movepick").remove();
            setTimeout(gui, 3500);
            $(".end").remove();
        }
    }
}

function reloadConsole() {
  var container = document.getElementById("console");
  var content = container.innerHTML;
  container.innerHTML= content;
}
