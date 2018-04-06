//Javascript Math Objects

//Intergers - Whole Numbers
//Floats - Decimals

var wha = .1 * .2;
// Calculator answer: 0.03
var rounded = Math.round(.000000001);
//Rounds up after .5, rounds down below .49

//Always rounds up to the nearest whole number
var roundedUp = Math.ceil(.0000000001);


//Always rounds down to the nearest whole number
var roundedDown = Math.floor(.9999999);


//Can use the mathematical value of Pi
var pi = Math.PI;

//How to calculate exponential numbers
//console.log( Math.pow(8, 2));

//How to calculate square roots
//console.log(Math.sqrt(64));

//How to get random numbers (between 0 and 1)
//console.log(Math.random());



//console.log(rounded, roundedUp, roundedDown, pi);



//----Random Number Generator-----

// var rand = Math.random();
// rand = Math.floor(rand * 11);
// console.log(rand);

// function pickNum() {
//     var userNum = prompt("Guess any number between 0 and 10");
//     checkNum(userNum);
// }
// pickNum();


// function pickAnotherNum() {
//     var userNum = prompt("Guess again");
//     checkNum(userNum);
// }

// function checkNum(userNum) {
//     if(userNum < rand) {
//         alert(num + " is too low, Pick again");
//         pickAnotherNum();
//     }
//     else if(userNum > rand) {
//         alert(num + " is too high, Pick again");
//         pickAnotherNum();
//     }
//     else {
//         alert(userNum + " is the correct number, you win");
//         pickAnotherNum();
//     }
// }


var userPick = document.getElementById('userPick');
var submitBtn = document.getElementById('submitBtn');
var startBtn = document.getElementById('startBtn');
var userPickRes = document.querySelector('h1');

submitBtn.addEventListener('click', getUserPick);
startBtn.addEventListener('click', getRandNum);

var rand;
var userLives = 3;
//getRandNum();
// var rand = Math.random();
// rand = Math.floor(rand * 11);

function getUserPick() {
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = "";
}
function getRandNum() {
    rand = Math.random();
    rand = Math.floor(rand * 11);
    var bgColor = "hsl(" + rand * 25 +", 50%, 50%)";
    userLives = 3;
    console.log(rand + " is the random number");
    function changeBGColor() {
        document.body.style.backgroundColor = bgColor;
    }
    changeBGColor();
}

function checkUserPick(x) {
    // function checkNum(userNum) {
    
    if(x < rand && userLives >= 1) {
        userLives--;
        printUserRes(x + " is too low, you have " + userLives + " lives left");
        console.log(userLives + " lives left");
    }
    else if(x > rand && userLives >= 1) {
        userLives--;
        printUserRes(x + " is too high, you have " + userLives + " lives left");
        console.log(userLives + " lives left");
    }    
    else if(x == rand && userLives >= 0){
        printUserRes(x + " is the correct number, you win!");
        console.log(userLives + " lives left");
    }   
    else {
    printUserRes("You are out of guesses, GAME OVER")
    }

}

console.log(window);
window.addEventListener('mousemove', function(e) {
    var width =  Math.round((e.x / window.innerWidth * 100));
    var height = Math.round((e.y / window.innerHeight * 100));
    console.log('x-axis: ' + Math.round((e.x / window.innerWidth * 100)), 'y-axis: ' + Math.round((e.y / window.innerHeight * 100)));
    document.body.style.backgroundColor = 'hsl(' + (Math.random() * 360) + ',' + width + "%," + height + "%,";
});

function printUserRes(userRes) {
    userPickRes.innerHTML = userRes;
}