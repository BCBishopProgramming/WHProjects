
//HTML Element variables
var narrator = document.getElementById("narrator");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var reset = document.getElementById("reset"); //Remove Later

//character stat variables
// var pageCounter = 0;
// var userRace;
// var userClass;

// //Game Page Functions
// pageOne();
// function pageOne() {
//     pageCounter++;
//     console.log(pageCounter);
//     //Set page text 
//     narrator.innerHTML = "Welcome to the Game! Click the buttion below to get started!";
//     opt1.innerHTML = "";
//     opt2.innerHTML = "Click here";
//     opt3.innerHTML = "";

//     //Add new button eventListener
//     opt2.addEventListener('click', pageTwo);
// }

// function pageTwo() {
//     pageCounter++;
//     console.log(pageCounter);
//     //Page text display
//     narrator.innerHTML = "Today you will go on a quest to save the world from the Demon King! But first, tell me more about yourself. Which race were you born to?";
//     opt1.innerHTML = "The Dwarves";
//     opt2.innerHTML = "The Elves";
//     opt3.innerHTML = "The Humans"; 

//     //Reset button eventListener
//     opt2.removeEventListener('click', pageTwo);

//     //Add new button eventListener
//     opt1.addEventListener('click', choseDwarves);
//     opt2.addEventListener('click', choseElves);
//     opt3.addEventListener('click', choseHumans);
//     reset.addEventListener('click', resetPage);
// }

// function pageThree() {
//     pageCounter++;
//     console.log(pageCounter);
//     //Set page text
//     if(userRace == 'dwarf') {
//         narrator.innerHTML = "Ah, so you're one of the stout folk who make their homes deep within the mountains. Well, what kind of adventurer did you grow up to become?";
//         opt1.innerHTML = "A Fighter";
//         opt2.innerHTML = "A Wizard";
//         opt3.innerHTML = "A Cleric";
        
//         //Add new options
//         opt1.addEventListener('click', choseFighter);
//         opt2.addEventListener('click', choseWizard);
//         opt3.addEventListener('click', choseCleric);
//     }
//     else if(userRace == 'elf') {
//         narrator.innerHTML = "Splendid, so a member of the fair folk has left their realm of nature and eternal youth to help us. As a champion of your people, what class are you?"
//         opt1.innerHTML = "A Fighter";
//         opt2.innerHTML = "A Wizard";
//         opt3.innerHTML = "A Ranger";

//         //Add new options
//         opt1.addEventListener('click', choseFighter);
//         opt2.addEventListener('click', choseWizard);
//         opt3.addEventListener('click', choseRanger);
//     }
//     else if(userRace == 'human') {
//         narrator.innerHTML = "I see, you're one of the short-lived men of the Western Kingdoms. Your kind walk many different paths, so tell me which one you follow."
//         opt1.innerHTML = "A Fighter";
//         opt2.innerHTML = "A Ranger";
//         opt3.innerHTML = "A Cleric";

//         //add new options
//         opt1.addEventListener('click', choseFighter);
//         opt2.addEventListener('click', choseRanger);
//         opt3.addEventListener('click', choseCleric);
//     }
// }


// function pageFour() {
//     pageCounter++;
//     console.log(pageCounter);
//     //Set page text
//     narrator.innerHTML = "";
//     opt1.innerHTML = "";
//     opt2.innerHTML = "";
//     opt3.innerHTML = "";
// }

// //Variable set functions


// //Race functions
// function choseDwarves() {
//     userRace = 'dwarf';
//     opt1.removeEventListener('click', choseDwarves);
//     opt2.removeEventListener('click', choseElves);
//     opt3.removeEventListener('click', choseHumans);
//     console.log(userRace);
//     pageThree();
    
// }
// function choseElves() {
//     userRace = 'elf';
//     opt1.removeEventListener('click', choseDwarves);
//     opt2.removeEventListener('click', choseElves);
//     opt3.removeEventListener('click', choseHumans);
//     console.log(userRace);
//     pageThree();
// }
// function choseHumans() {
//     userRace = 'human';
//     opt1.removeEventListener('click', choseDwarves);
//     opt2.removeEventListener('click', choseElves);
//     opt3.removeEventListener('click', choseHumans);
//     console.log(userRace);
//     pageThree();
// }

// //Class set functions

// function choseFighter() {
//     userClass = 'fighter';
//     if(userRace == 'dwarf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     else if(userRace == 'elf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseRanger);
//     }
//     else if(userRace == 'human') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseRanger);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     console.log(userClass);
//     pageFour();
// }

// function choseWizard() {
//     userClass = 'wizard';
//     if(userRace == 'dwarf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     else if(userRace == 'elf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseRanger);
//     }
//     else if(userRace == 'human') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseRanger);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     console.log(userClass);
//     pageFour();
// }

// function choseCleric() {
//     userClass = 'cleric';
//     if(userRace == 'dwarf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     else if(userRace == 'elf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseRanger);
//     }
//     else if(userRace == 'human') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseRanger);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     console.log(userClass);
//     pageFour();
// }

// function choseRanger() {
//     userClass = 'ranger';
//     if(userRace == 'dwarf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     else if(userRace == 'elf') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseWizard);
//         opt3.removeEventListener('click', choseRanger);
//     }
//     else if(userRace == 'human') {
//         opt1.removeEventListener('click', choseFighter);
//         opt2.removeEventListener('click', choseRanger);
//         opt3.removeEventListener('click', choseCleric);
//     }
//     console.log(userClass);
//     pageFour();
// }


// //Page Reset
// function resetPage() {
//     pageCounter--;
//     if(pageCounter == 1) {
//         opt1.removeEventListener('click', choseDwarves);
//         opt2.removeEventListener('click', choseElves);
//         opt3.removeEventListener('click', choseHumans);
//         pageOne();
//     }
//     else if(pageCounter == 2) {
//         if(userRace == 'dwarf') {
//             opt1.removeEventListener('click', choseFighter);
//             opt2.removeEventListener('click', choseWizard);
//             opt3.removeEventListener('click', choseCleric);
//             pageTwo();
//         }
//         else if(userRace == 'elf') {
//             opt1.removeEventListener('click', choseFighter);
//             opt2.removeEventListener('click', choseWizard);
//             opt3.removeEventListener('click', choseRanger);
//             pageTwo();
//         }
//         else if(userRace == 'human') {
//             opt1.removeEventListener('click', choseFighter);
//             opt2.removeEventListener('click', choseRanger);
//             opt3.removeEventListener('click', choseCleric);
//             pageTwo();
//         }
//     }
// }





//Try using array to set page number instead of functions
var pageNum = [1, 2, 3, 4, 5, 6, 7, 8];

function runGame(){
    
        console.log(i);
        if(i = 0){
            narrator.innerHTML = "Welcome to the Game! Click the buttion below to get started!";
            opt1.innerHTML = "";
            opt2.innerHTML = "Click here";
            opt3.innerHTML = "";
        }


    
}

runGame();