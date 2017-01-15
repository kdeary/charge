var stop = false;
var usermove = "";
var moves = ["charging","blocking","attacking"];
var userCharge = 0;
var CPUCharge = 0;
var userLives = 3;
var clientuser = "Hydrosaur";
var CPULives = 3;
var turns = 0;
var cpumove = moves[Math.floor((Math.random() * 3) + 0)];
var fakeusers = "Gigastrength Deadlyinx TreeEater PackManBrainlure Carnalpleasure Sharpcharm Snarelure Skullbone Burnblaze Emberburn Emberfire Evilember Firespawn Flameblow SniperGod TalkBomber SniperWish RavySnake WebTool TurtleCat BlogWobbles LuckyDusty CouchChiller VisualMaster DeathDog ZeroReborn TechHater eGremlin BinaryMan FastChef JunkTop PurpleCharger CodeBuns BunnyJinx GoogleCat StrangeWizard Fuzzy_Logic New_Cliche Nojokur Illusionz Spazyfool Supergrass Dreamworx Fried_Sushi Need_TLC Raving_Cute Lunatick Garbage Harmless_Venom Lord_Tryzalot Sir_Gallonhead MPmaster King_Martha Spamalot Soft_member Evil_kitten SomethingNew takes2long askme Bidwell".split(" ");
var foe = fakeusers[Math.floor((Math.random() * fakeusers.length) + 0)];
function start() {
  gui();
}

function gui(){
  $(".gui").replaceWith("<h4>What move are you going to use? <button onclick='charge();' style='color: yellow;'>Charge</button><button onclick='attack();' style='color: red;'>Attack</button><button onclick='block();' style='color: lightgray;'>Block</button><button onclick='endgame();'>End Game</button></h4><br class='end'>");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function turnWrapup() {
  $(".wrapup").remove();
  $("body").append("<table class='wrapup'><tr><th>Turns:</th><th>"+ turns +"</th></tr><tr><th>"+ clientuser +" Lives:</td><td>"+ userLives +"</td></tr><tr><th>"+ clientuser +" Charge:</th><td>"+ userCharge +"</td></tr><tr><th>"+ foe +" Lives:</td><td>"+ CPULives +"</td></tr><tr><th>"+ foe +" Charge:</th><td>"+ CPUCharge +"</td></tr></table>")
  console.log("table appended");
  turns++;
}

function charge() {
  usermove = "charging";
  resumeGame();
}
function attack() {
  usermove = "attacking";
  resumeGame();
}
function block() {
  usermove = "blocking";
  resumeGame();
}
function endgame() {
  usermove = "stop";
  resumeGame();
}

function resumeGame(){
    cpumove = moves[Math.floor((Math.random() * 3) + 0)];
    $("#comment").remove();
    $("body").append("<div id='comment'><h4>"+ foe +" was "+ cpumove +" while you were "+ usermove +"</h4><br class='end'></div>");
    console.log("Text Replaced");
    if(usermove == "charging"){
        userCharge++;
    }
    if(usermove == "attacking" && userCharge > 0){
        userCharge--;
        if(cpumove != "blocking"){
            CPULives--;
        }
    }
    if(cpumove == "charging"){
        CPUCharge++;
    }
    if(cpumove == "attacking" && CPUCharge > 0){
        CPUCharge--;
        if(usermove != "blocking"){
            userLives--;
        }
    }
    turnWrapup();
    if(usermove == "stop"){
        $("h4,table,.end").remove();
    } else {
        if(userLives < 1){
             $("h4,table,.end").remove();
             $("body").append("<h4>"+ foe + " wins!</h4>");
        } else if(CPULives < 1){
             $("h4,table,.end").remove();
             $("body").append("<h3 style='font-family: Verdana;'><b>"+ clientuser + " wins!</b></h3>");
        } else {
            gui();
            $(".end").remove();
        }
    }
}

function reloadConsole() {
  var container = document.getElementById("console");
  var content = container.innerHTML;
  container.innerHTML= content;
}