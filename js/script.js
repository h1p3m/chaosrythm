window.addEventListener("load", function(event) {
    createSheep();
    createBulb();
    
  });


var speed = 3000;
var progress = 10;
var timeCh = null;
var porgMinus = 10;
function changeTime(){
    
    var time = document.getElementById("time");
    var timeInt = parseInt(time.textContent);
    timeCh = setInterval(function(){
    time.textContent = timeInt++;
    if(timeInt%100==0){
    if(progress<25){
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
    if(temp.value>=100){

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
 prog.value-=porgMinus;
 
 
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

var numberBulb = 100;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function createBulb(){
   
    for(i=0;i<numberBulb;i++){

        var bulb = document.createElement("img");
        bulb.src = "source/bulb.png";
        bulb.setAttribute("width", "4%");
        bulb.style.zIndex = -7;
        bulb.style.position = "fixed";
        

        bulb.style.bottom = getRandomInt(80)+"%";
        bulb.style.left = getRandomInt(97)+"%";
        bulb.id = "1" + i;
        
       bulb.animate([
        // keyframes
        { transform: 'translate3D(0, 0, 0)' },
        { transform: 'translate3D(0, -200%, 0)' },
        { transform: 'translate3D(0, -400%, 0)', opacity: '0.1' }
      ], {
        // timing options
        duration: getRandomArbitrary(4000, 8000),
        iterations: Infinity
        
      })
    
        document.body.append(bulb);
    }  
 
   
}
