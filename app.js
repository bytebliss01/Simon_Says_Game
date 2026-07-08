

let gameseq=[];
let userseq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false){
        console.log("game has started");
        started=true;

        levelUp();
    }
}
)

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function checkAns(INdx){

    if(userseq[INdx]===gameseq[INdx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML =`Game over! Your Score was <b> ${level} </b> <br>press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function levelUp(){
    userseq=[];
    level++;

    h2.innerText=`Level ${level}`; 

    let randIdx = Math.floor(Math.random()*4); 
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);
    //random button choose
    gameFlash(randbtn);


}

 function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for (const btn of allBtns){
    btn.addEventListener("click", btnPress);  
 }

 function reset(){
    started =false;
    gameseq=[];
    userseq=[];
    level =0;
 }

