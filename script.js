var bubbles = ""

function bubbleMake(){
    bubbles = ""
for(var i=1;i<=184;i++){
    var bubblenum = Math.floor(Math.random()*10);
    bubbles += ` <div id="bubble">${bubblenum}</div>`
    
    
}

document.querySelector("#bottom").innerHTML = bubbles;
}

timer = 60;
function setTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector(".timer-box").textContent = timer;
    }else{
        clearInterval(timerInt)
        document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1>`
        
    }
    },1000)
}
 var hitchng =0;
function hitChange(){
     hitchng = Math.floor(Math.random()*10)
    document.querySelector(".hit").textContent = hitchng;
}

score =0;
function scoreChange(){
    score +=10;
    document.querySelector(".score").textContent = score
}

document.querySelector("#bottom").addEventListener("click",(e) =>{
    var clicknum = (Number(e.target.textContent));
    if(clicknum === hitchng){
        scoreChange()
        hitChange()
        bubbleMake()
    }
});





setTimer()
bubbleMake()
hitChange()

