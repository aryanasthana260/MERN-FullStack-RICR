function Start()
{
console.log("game started");

document.getElementById("rolldice1").disabled=false;
document.getElementById("restart").disabled=false;
document.getElementById("start").disabled=true;

}

function Restart()
{
window.location.reload();

}

function p1play()
{
console.log("player1 playing");


let Score=Number(document.getElementById("PL1").innerText);
const DF =Math.floor(Math.random()*6)+1;

// FIXED switch-case (your images now load correctly)
switch(DF)
{
    case 1: document.getElementById("p1dice").src = "images1.png";
    break;
    case 2: document.getElementById("p1dice").src = "images2.png";
    break;
    case 3: document.getElementById("p1dice").src = "images3.png";
    break;
    case 4: document.getElementById("p1dice").src = "images4.png";
    break;
    case 5: document.getElementById("p1dice").src = "images5.png";
    break;
    case 6: document.getElementById("p1dice").src = "images6.png";
    break;
}


if(DF==6)
{
    document.getElementById("rolldice1").disabled=true;
    document.getElementById("rolldice2").disabled=false;
} 
else
{
    Score=Score+DF;
document.getElementById("PL1").innerText=Score;
}

}

function p2play()
{
console.log("player 2 playing");


let Score=Number(document.getElementById("PL2").innerText);
const DF =Math.floor(Math.random()*6)+1;


// FIXED shortcut template literal
document.getElementById("p2dice").src= `images${DF}.png`;


if(DF==6)
{
    document.getElementById("rolldice1").disabled=false;
    document.getElementById("rolldice2").disabled=true;
} 
else
{
    Score=Score+DF;
document.getElementById("PL2").innerText=Score;
}

}
