
//HTML Element variables
var narrator = document.getElementById("narrator");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");

//Character choice variables
var room;
var item;

//Start the page
pageOne();
function pageOne() {
    narrator.innerHTML = "You are a hero that has been captured by the evil Demon King! You know that if you do not find a way to stop him, he's going to destroy the world! Fortunately, in the night a spy has snuck into your prison and given you a parcel with a key to your cell and a magic item. What is that item?";
    opt1.innerHTML = "An Enchanted Sword";
    opt2.innerHTML = "A Cloak of Invisibility";
    opt3.innerHTML = "A Set of Flying Shoes";
    //Add Decision functions
    opt1.addEventListener('click', pickSword);
    opt2.addEventListener('click', pickCloak);
    opt3.addEventListener('click', pickShoes);
}

function pageTwo(){
    opt2.removeEventListener('click', pageTwo);
    if(item == "sword") {
        narrator.innerHTML = "As you begin to leave your cell, the door squeaks in protest as the rusty hinges swing open. A guard nearby notices the sound and comes to investigate, but you quickly dispatch him with your new sword. At the end of the row of jail cells you find a door that leads to a small stairwell. You also find another door behind you that seems to lead deeper into the castle. Where do you go?";
        opt1.innerHTML = "Go up the stairway";
        opt2.innerHTML = "Go down the stairway";
        opt3.innerHTML = "Go through the door";
        
        //Add Event Listeners
        opt1.addEventListener('click', pickUpStairs);
        opt2.addEventListener('click', pickDownStairs);
        opt3.addEventListener('click', pickDoor);
    }
    else if(item =="cloak"){
        narrator.innerHTML = "As you begin to leave your cell, the door squeaks in protest as the rusty hinges swing open. A guard nearby notices the sound and comes to investigate, but you quickly turn invisible and avoid his attention. Continuing from that point, at the end of the row of jail cells you find a door that leads to a small spiral stairwell. You also find another door behind you that seems to lead deeper into the castle. Where do you go?";
        opt1.innerHTML = "Go up the stairway";
        opt2.innerHTML = "Go down the stairway";
        opt3.innerHTML = "Go through the door";
        
        //Add Event Listeners
        opt1.addEventListener('click', pickUpStairs);
        opt2.addEventListener('click', pickDownStairs);
        opt3.addEventListener('click', pickDoor);
    }
    else if(item == "shoes"){
        narrator.innerHTML = "As you begin to leave your cell, the door squeaks in protest as the rusty hinges swing open. A guard nearby notices the sound and comes to investigate, but you quickly take to the air and avoid his grasp. He begins to shout behind for other guards to assist him. Quickly flying away, you find a door that leads to a small spiral stairwell. Do you go up or down the stairs?";
        opt1.innerHTML = "Go up the stairway";
        opt2.innerHTML = "----------";
        opt3.innerHTML = "Go down the stairway";
        
        //Add Event Listeners
        opt1.addEventListener('click', pickUpStairs);
        opt3.addEventListener('click', pickDownStairs);
    }
}

function pageThree(){
    narrator.innerHTML = "To Be Continued..."
}












//Character choice options
function pickSword() {
    //set item variable
    item = "sword";
    //Describe item to user
    narrator.innerHTML = "A beautiful sword is wrapped inside the cloth parcel, with the key strung around the hilt. Upon drawing it from its scabbard you notice that the blade glows faintly in the dim light.";
    opt1.innerHTML = "---------";
    opt2.innerHTML = "Continue";
    opt3.innerHTML = "---------";
    opt1.removeEventListener('click', pickSword);
    opt2.removeEventListener('click', pickCloak);
    opt3.removeEventListener('click', pickShoes);
    opt2.addEventListener('click', pageTwo);
}
function pickCloak() {
    //set item variable
    item = "cloak";
    //Describe item to user
    narrator.innerHTML = "The parcel is a shimmering silver cloak wrapped around the brass key meant for your cell door. When you don the cloak and grasp the silver brooch at its collar, it renders you invisible while you hold onto it.";
    opt1.innerHTML = "---------";
    opt2.innerHTML = "Continue";
    opt3.innerHTML = "---------";
    opt1.removeEventListener('click', pickSword);
    opt2.removeEventListener('click', pickCloak);
    opt3.removeEventListener('click', pickShoes);
    opt2.addEventListener('click', pageTwo);
}
function pickShoes() {
    //set item variable
    item = "shoes";
    //Describe item to user
    narrator.innerHTML = "The small box contains the brass key meant for your cell door, along with a pair of silk slippers with wings embroidered on the sides. Putting them on your feet, the wings begin flapping and you gently begin to float off of the ground.";
    opt1.innerHTML = "---------";
    opt2.innerHTML = "Continue";
    opt3.innerHTML = "---------";
    opt1.removeEventListener('click', pickSword);
    opt2.removeEventListener('click', pickCloak);
    opt3.removeEventListener('click', pickShoes);
    opt2.addEventListener('click', pageTwo);
}

function pickUpStairs(){
    room = "tower";
    if(item == "shoes"){
        narrator.innerHTML = "With pursuit hot on your heels you decide to fly up the stairs, eventually reaching a small workroom at the top of the tower. You slam the door behind you and after a moment you can hear the guards behind you, attempting to break it down!";
        opt1.innerHTML = "----------";
        opt2.innerHTML = "Continue";
        opt3.innerHTML = "----------";


        opt1.removeEventListener('click', pickUpStairs);
        opt3.removeEventListener('click', pickDownStairs);
        opt2.addEventListener('click', pageThree);
    }
    else{
    narrator.innerHTML = "You quickly ascend the stairs and reach a small workshop. There doesn't seem to be any way to continue in this direction, but you see a few things that catch your attention."
    opt1.innerHTML = "----------";
    opt2.innerHTML = "Continue";
    opt3.innerHTML = "----------";

    opt1.removeEventListener('click', pickUpStairs);
    opt2.removeEventListener('click', pickDownStairs);
    opt3.removeEventListener('click', pickDoor);
    opt2.addEventListener('click', pageThree);
    }
}
function pickDownStairs(){
    room = "hall";
    if(item == "shoes"){
        narrator.innerHTML = "You decide to fly down the stairs to evade the guards, and reach the castle's entrance hall after a few moments. The ceiling is high enough to continue evading the pursuing guards, but the front gate is closed!"
        opt1.innerHTML = "----------";
        opt2.innerHTML = "Continue";
        opt3.innerHTML = "----------";


        opt1.removeEventListener('click', pickUpStairs);
        opt3.removeEventListener('click', pickDownStairs);
        opt2.addEventListener('click', pageThree);
    }
    else{
        narrator.innerHTML = "You descend the flight of stairs and arrive in what appears to be the entrance hall of the castle. While the front gates seem to be closed and barred, there don't seem to be any guards at the moment."
        opt1.innerHTML = "----------";
        opt2.innerHTML = "Continue";
        opt3.innerHTML = "----------";

        opt1.removeEventListener('click', pickUpStairs);
        opt2.removeEventListener('click', pickDownStairs);
        opt3.removeEventListener('click', pickDoor);
        opt2.addEventListener('click', pageThree);
    }
}
function pickDoor(){
    room = "throne";
    if(item == "sword"){
        narrator.innerHTML = "You pass through the door and see a posting of three guards watching the next door. It won't be long before they notice you after the noise you just made fighting in the last room."
        opt1.innerHTML = "----------";
        opt2.innerHTML = "Continue";
        opt3.innerHTML = "----------";
    }
    else if(item == "cloak"){
        narrator.innerHTML = "The door leads to a small corridor with a patrol of three guards watching the far door. They don't seem to notice anything amiss and are paying no attention to your direction."
        opt1.innerHTML = "----------";
        opt2.innerHTML = "Continue";
        opt3.innerHTML = "----------";
    }
    opt1.removeEventListener('click', pickUpStairs);
    opt2.removeEventListener('click', pickDownStairs);
    opt3.removeEventListener('click', pickDoor);
    opt2.addEventListener('click', pageThree);
}