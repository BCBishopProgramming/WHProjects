// this - context based. Look to the left of the dot 99% of the time.

// var btns = document.querySelectorAll('button');

// for(var i = 0; i < btns.length; i++){
//     btns[i].addEventListener('click', function(evt){
//         console.log(evt.target);
//         console.log(this);
//     });
// }


// window.addEventListener('click', function(evt){
//     console.log(evt.target.nodeName);
//     if(evt.target.nodeName == "BUTTON"){
//         console.log(evt.target);
//         console.log(this)
//     }
// });


// var cars = ['jeep', 'honda', 'jeep', 'subaru'];
// //console.log(cars);

// //objects

// var car = {
//     type: 'jeep',
//     model: 'wrangler',
//     color: 'black',
//     offroad: true,
//     trim: ['sunroof', 'hardtop', '4 wheel drive']
// };
// //console.log(car.trim);

// var brandon = {
//     firstName: 'Brandon',
//     lastName: 'Bishop', 
//     age: 21,
//     height: '6 foot 3 inches',
//     hair: true,
//     hairColor: 'red',
//     facialHair: true,
//     facialHairColor: 'red',
//     greeting: function(msg){
//         console.log(msg + this.firstName);
//     }
// }

// var types = ['string', true, 5, [1, 2, 3], brandon];
// //console.log(types);

// //console.log(brandon.haircolor);
// brandon.middleName = 'Christopher';

// //console.log(brandon);
// brandon.greeting("Howdy ");

// brandon.firstName = "Bruce";
// brandon.greeting("I'm now ");



// function Person(first, last, age, eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.eyecolor = eye;
//     this.greeting = function(msg){
//         console.log(msg + this.firstname);
//     };
// }

// var myDad = new Person('James', 'Bishop', 53, 'brown');
// console.log(myDad);

// var myMom = new Person('Dawn', 'Cook', 50, 'brown');
// console.log(myMom);

// var mySister = new Person('Cierra', 'Bishop', 18, 'brown');
// console.log(mySister);

// mySister.greeting("Hello ")

/*
    username
    email
    password

*/
var form = document.querySelector('form');
console.log(form.elements.value);
for(var i = 0; i < form.elements.length; i++){
    console.log(form.elements.value);
}

var users = [];
// var user = 0;
console.log(user);


function UserAcc(email, username, password){
    this.email = email;
    this.username = username;
    this.password = password;
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push( new UserAcc(
    form.elements[0].value,
    form.elements[1].value,
    form.elements[2].value)
    );
    // user++;
    console.log(users);

    for(var i = 0; i < form.elements.length - 1; i++){
        
        console.log(form.elements[i].value);
    }


});
