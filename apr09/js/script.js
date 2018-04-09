/* 
function welcomeMsg(str){
    return "Welcome " + str;
}


//consoleInfo('Brandon');
console.log( welcomeMsg('Brandon'));

function calcNums(x, y) {
    return x + y;
}

console.log( calcNums(3, 2) );



var h3 = document.querySelector('h3');
var user = document.querySelector('#user');

function concatStrings(str1, str2){
    return str1 + " " + str2;
}

function getFirstname() {
    return prompt('What is your first name?');
}

function getLastname() {
    return prompt('What is your last name?');
}



user.textContent = concatStrings( getFirstname(), getLastname());
// function welcomeUser() {
//     h3.innerHTML = concatStrings( getFirstname(), getLastname() );
// }

// welcomeUser();

*/


var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plurals = ['fishes', 'monkeys', 'shoes', 'cacti'];
var adjectives = ['green', 'angsty', 'edgy', 'bored', 'spinning'];
var verbs = ['run', 'dance', 'sleep', 'excercise', 'fighting', 'weebing out'];
var liquids = ['water', 'vodka', 'THE SAUCE'];
var theFamous = ['Hitler', 'The Rock', 'Superman', 'Goku', 'Brian Kibler'];
var places = ['Hell', 'Faerun', 'Jurassic Park', 'My Closet', 'Wonderland Ranch', 'The Batcave'];
var nouns = ['war', 'famine', 'death', 'pestilence', 'strife', 'humanity', 'A Set of Unlucky Happenings'];
var nationalities = ['Ugandan', 'Chinese', 'Orcish', 'Atlantean', 'Pirate Queen', 'Horrifically Overweight'];
var celebrities = ['Vana White', 'Betty White', 'Mrs. Claus', 'Cortana', 'Mewtwo', 'An Onahole'];
var friends = ['Alice', 'Betty', 'Sammy', 'Vicky', 'Bartholomew'];

for(var i = 0; i < spans.length; i++) {
    //console.log(spans[i].className);
    // if(spans[i].className == 'plural'){
    //     spans[i].style.color = 'red';
    // }

    switch(spans[i].className){
        case 'occupation':
            spans[i].textContent = occupations[getRandNum( occupations.length )];
            break;
        case 'plural':
            spans[i].textContent = plurals[getRandNum( plurals.length )];
            break;
        case 'adjective':
            spans[i].textContent = adjectives[getRandNum(adjectives.length)];
            break;
        case 'verb':
            spans[i].textContent = verbs[getRandNum(verbs.length)];
            break;
        case 'liquid':
            spans[i].textContent = liquids[getRandNum(liquids.length)];
            break;
        case 'famous':
            spans[i].textContent = theFamous[getRandNum(theFamous.length)];
            break;        
        case 'place':
            spans[i].textContent = places[getRandNum(places.length)];
            break;
        case 'noun':
            spans[i].textContent = nouns[getRandNum(nouns.length)];
            break;
        case 'nationality':
            spans[i].textContent = nationalities[getRandNum(nationalities.length)];
            break;
        case 'celebrity':
            spans[i].textContent = celebrities[getRandNum(celebrities.length)];
            break;
        case 'friend':
            spans[i].textContent = friends[getRandNum(friends.length)];
            break;
        case 'number': 
            spans[i].textContent = getRandNum(getRandNum(27));
            break;
        default: 
            spans[i].style.color = 'red';    
    }
}

function getRandNum(num) {
    return Math.floor(Math.random() * num);
}