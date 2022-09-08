window.addEventListener("load", function(event) {
    createSheep();
  });


var speed = 3000;

function startGame(){
    
    var t=null;
    t=setInterval(function(){
    var temp = document.getElementById("progressbar");
    temp.value++;
    if(temp.value==10){
        alert("YOU LOOSE!");
        clearInterval(t);

    }
   

},speed);

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
 prog.value--;
 
 
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
        console.log(x_position);
        console.log(document.documentElement.getBoundingClientRect().right-100);
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
