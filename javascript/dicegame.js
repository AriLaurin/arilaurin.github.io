
var dice = document.querySelectorAll(".actualdice");
var title = document.querySelector("h2");

function refreshPage(){
    window.location.reload();
} 

function dicesystem(){

let RandomNumber1 = Math.floor(Math.random() * 6) + 1;

let RandomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(RandomNumber2);

console.log(RandomNumber1);


dice[0].setAttribute("src", "../img/dice" + RandomNumber1 + ".png");

dice[1].setAttribute("src", "../img/dice" + RandomNumber2 + ".png");


if (RandomNumber1 > RandomNumber2){
    title.innerHTML = "PLAYER 1 WINS";
}

if (RandomNumber1 < RandomNumber2){
    title.innerHTML = "PLAYER 2 WINS";
}

else if(RandomNumber1 == RandomNumber2){
    title.innerHTML = "DRAW";
}

}
