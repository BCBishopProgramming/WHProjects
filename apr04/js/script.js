// // function getUsername() {
// //     var username = prompt('What is your full name').split(" ");
// //     outputUsername(username);
// // }

// // function outputUsername(nameArray) {
// //     // document.getElementById('firstname').innerHTML = nameArray[0];
// //     // !IMPORTANT!
// //     // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];
   
// //     // OR 
   
// //     for(var i = 0; i < nameArray.length; i++){
// //         if(i == 0 || i == nameArray.length -1){
// //             document.getElementById('firstname').innerHTML += nameArray[i] + " ";
// //         }
// //     }

// // }

// // getUsername();







// // ARRAYS

// var stuff = ["jeep", "subaru", "honda"];
// console.log(stuff[1]);
// console.log(stuff.length);

// stuff.push("bmw"); //add to array
// console.log(stuff);

// stuff.pop(); //remove final item
// console.log(stuff);

// var removedCar = stuff.pop();
// console.log(removedCar);
// console.log(stuff);


// // Unshift Method, add to front of array 
// stuff.unshift("chevy", "chrysler");
// console.log(stuff);


// // Shift Method, remove from front of array
// stuff.shift();
// console.log(stuff);

// //Splice Method, adds/removes items to array at specified locations
// stuff.splice(1, 1, "red", "green");
// console.log(stuff);


// stuff.splice(1, 1, "grape", "kiwi", "apple", "carrot");
// console.log(stuff);

// stuff.splice(2, 1);
// console.log(stuff);

// //Slice Method, Non-destructive selection of items in array
// stuff.slice(4);
// var removed = stuff.slice(4, 5);
// console.log(removed);




// var movies = ["Goodfellas", "Scarface", "Avengers", "Oldboy", "Zootopia"];
// console.log(movies);


// movies.unshift("Die Hard");
// console.log(movies);

// movies.splice(2, 2, "Godfather 1", "Godfather 2", "Godfather 3");
// console.log(movies);

// movies.push("Guardians of the Galaxy");
// console.log(movies);

// var movieSubList = movies.slice(2 , 5);
// console.log(movieSubList);

// movies.shift();
// console.log(movies);

// movies.splice(0, 99, "Jurassic Park");
// console.log(movies);

//ELSE IF

// function getUserAge() {
//     var userAge = parseInt(prompt("how old are you?"));
//     if(userAge < 21) {
//         console.log('not old enough');
//     }
//     else if(userAge == 21) {
//         console.log('good to go');
//     }
//     else {
//         console.log('plenty old');
//     }
// }

// getUserAge();

// //Ternary Operator
// function getAge() {
//     var age = prompt('whats my age again?');
// (age >= 21) ? console.log('true') : console.log('false');

// }

// getAge();



function pageOne() {
    document.getElementById("displayText").innerHTML = "You are an adventurer born for greatness. Prophecy has decided that you will save the world from the Demon King!";
    document.getElementById("questionText").innerHTML = "But first, to what people were you born? The Elves, the Dwarves, or the Humans?";
    var race = prompt("Choose a race:");
    pageTwo();  
}

function pageTwo() {
    if(race == "The Elves") {
        document.getElementById("displayText").innerHTML = "Ah yes, that's right, you were born amongst the fair folk in their woodland homes.";
        document.getElementById("questionText").innerHTML = "So, in what way does your heroic power manifest? As a fighter, a wizard, or a cleric?" 
    }
    else if(race == "The Dwarves") {
        document.getElementById("displayText").innerHTML = "That's right, one of the stout folk raised in their great halls of stone!";
        document.getElementById("questionText").innerHTML = "So, in what way does your heroic power manifest? As a fighter, a wizard, or a cleric?"
    }
    else if(race == "The Humans") {
        document.getElementById("displayText").innerHTML = "Okay, so you're one of the humans, a young race with great potential for good and evil.";
        document.getElementById("questionText").innerHTML = "So, in what way does your heroic power manifest? As a fighter, a wizard, or a cleric?"
    }
    else {
        alert = "You seem to have entered a race other than what I've listed. Let's go back and look at the choices";
        pageOne();
    }
}

