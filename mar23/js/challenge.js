var menu = document.getElementById("menu"); //button
var username = document.getElementById("username"); //button
var userstyle = document.getElementById("userstyle"); //button

var nav = document.getElementById("nav"); //navigation
var main = document.getElementById("main"); //main
var user = document.getElementById("user"); //span
var a1 = document.getElementById("a1"); //a
var a2 = document.getElementById("a2"); //a 

menu.addEventListener("click", vertMenu);
username.addEventListener("click", getUsername);
userstyle.addEventListener("click", styleUsername);
a1.addEventListener("click", colorText1);
a2.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);
}); //anonymous function


function changeBody() {
    document.body.style.backgroundColor = "teal";
}
changeBody();


function vertMenu() {
    nav.classList.toggle("vertical");
    main.classList.toggle("vertical");
}

function getUsername() {
    var username = prompt("What is your name?");
    user.innerHTML = username;
}

function styleUsername() {
    user.classList.toggle("mega");
}

function colorText1() {
    a1.style.color = "red"
}

function colorText2() {
    a2.style.color = "green"
}