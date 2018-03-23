//Element ID variables

var nav = document.getElementById("nav");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var title = document.getElementById("title");
var placeUsername = document.getElementById("placeUsername");
var bodyText = document.getElementById("bodyText");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");

//Event Listeners for each listed element above
window.addEventListener("load", changeBGColor);

button1.addEventListener("click", navDirection);

button2.addEventListener("click", getUsername);

button3.addEventListener("click", colorUsername);

link1.addEventListener("click", changeLink1Color);

link2.addEventListener("click", changeLink2Color);



//Functions to edit page content

function changeBGColor() {
    document.body.classList.toggle("color");
}

function navDirection() {
    nav.classList.toggle("verticalNav");
   document.getElementById("main").classList.toggle("verticalAlign");
}


function getUsername() {

    var username = prompt("What is your name?");
    placeUsername.innerHTML = username;
}

function colorUsername() {
    placeUsername.classList.toggle("colorUsername");
}


function changeLink1Color() {
    link1.classList.toggle("colorLink1");
}

function changeLink2Color() {
    link2.classList.toggle("colorLink2");
}