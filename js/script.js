window.addEventListener("load", function(event) {
    createSheep();
  });


var speed = 3000;
var progress = 10;
var timeCh = null;
function changeTime(){
    
    var time = document.getElementById("time");
   var timeInt =parseInt(time.textContent);
   timeCh = setInterval(function(){
    time.textContent = timeInt++;
   if(timeInt%100==0){
    if(progress<30){
        progress+=5;
    }
   
   }

   }, 100);
   
   
}

function startGame(){
    changeTime();
    var t=null;
    t=setInterval(function(){
    var temp = document.getElementById("progressbar");
    temp.value+=progress;   
    if(temp.value==100){

        alert("YOU LOOSE!");
        clearInterval(t);
        clearInterval(timeCh);
        afterEndGame();
    }
   

},speed);
function afterEndGame(){
    var prog = document.getElementById("prog");
prog.style.visibility = "hidden";
var progressBar = document.getElementById("progressbar");
progressBar.value = 1;
progress = 10;

var sheep = document.getElementById("sheep");
sheep.style.visibility = "hidden";

var sleep = document.getElementById("sleep");
sleep.style.visibility = "hidden";
var menu = document.getElementById("menu");
menu.style.visibility = "visible";
var timeScore = document.getElementById("time");
timeScore.textContent = "1";
}
var prog = document.getElementById("prog");
prog.style.visibility = "visible";
var sheep = document.getElementById("sheep");
sheep.style.visibility = "visible";

var sleep = document.getElementById("sleep");
sleep.style.visibility = "visible";
var menu = document.getElementById("menu");
menu.style.visibility = "hidden";

}

function check(){   
  
    var sheep = document.getElementById("sheep");
    sheep.style.display = "none";
    createSheep();
 var prog = document.getElementById("progressbar");
 prog.value-=10;
 
 
}


function minusProgress(){
    var temp = document.getElementById("progressbar");
    temp.value++;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function createSheep(){
    

    if(document.getElementById("sheep").style.display=="none"){
        var sheep = document.getElementById("sheep");
        var x_position = Math.floor(Math.random() *  document.documentElement.clientWidth);
        var y_position = Math.floor(Math.random() * document.documentElement.clientHeight);
        
        if(x_position>=document.documentElement.getBoundingClientRect().right-100||y_position>=document.documentElement.getBoundingClientRect().bottom-200){
            createSheep();
        }
        else{
            sheep.style.marginTop = y_position;
            sheep.style.marginLeft = x_position;
            sheep.style.display = "block";       
            
              
        }  

    }
    

}

function voiceMan(){
    var audio = new Audio('source/fail.mp3');
    audio.play();
}
