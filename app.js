
let colors = ["red" , "yellow" , "pink" , "blue"];
let h2 = document.querySelector("h2");
let level = 0;
let gameSeq = [];
let userSeq = [];

 let startBtn = document.querySelector("button");

    startBtn.addEventListener("click" , function(){
        if(level == 0){
            levelUp();
        }
        else{
            h2.innerText = `Your score was ${level-1} .Press Restart to start new game`;
            level = 0;
            gameSeq = [];
            userSeq = [];
        }
       startBtn.innerText = "Restart";
        
    })


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() *4);
    let randColor = colors[randIdx];
    let randomBtn = document.querySelector(`.${randColor}`);
    fleshBtn(randomBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function check(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 2000);  
        }
    }
    else{
        console.log("game over");
        h2.innerText = `Incorrect. Game over!! Your score is ${level} . Press Retart to restart`;
         level = 0;
         gameSeq = [];
         userSeq = [];
        
       
    }
}
function fleshBtn(btn){
    btn.classList.add("flesh");
   setTimeout(function() {
    btn.classList.remove("flesh");
  }, 250);
}

let Allbtns = document.querySelectorAll(".btn");
for(btn of Allbtns){
    btn.addEventListener("click", function(){
     fleshBtn(this);
     let userColor = this.getAttribute("id");
     userSeq.push(userColor);
     console.log(userSeq);
     let idx  = userSeq.length-1;
     check(idx);
    });
}





