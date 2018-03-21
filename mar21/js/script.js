function welcome() {
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
}

//welcome();

function fireworks() {
    document.getElementById('h1').style.backgroundImage = "url('/img/tank.png')";
    document.getElementById('h1').style.color = "white";
    toggleColor();
}

function toggleColor() {
    document.body.classList.toggle('colorize');
}

function toggleSize() {
    document.getElementById('h1').classList.toggle('sizeAlter');
    // document.getElementById('nav').classList.add('flexStart');
}

function showHiddenContent() {
    document.getElementsByClassName('hidden' , 'nothidden').classList.toggle('nothidden' , 'hidden');
}