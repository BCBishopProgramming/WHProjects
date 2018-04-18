var paras = document.querySelectorAll('p');
// paras.classList.contains('classname');


// ! == not
// for(var i = 0; i < paras.length; i++) {
//     //console.log(paras[i].classList.contains('para'));
//     if(!paras[i].classList.contains('para')){
//         console.log('thats not true');
//     }
// }

// console.log(3 === '3');

// console.log(typeof(3));
// console.log(typeof('3'));
// // == loose comparison
// // === strict comparison

// var usernum = parseInt(prompt('pick a number'));


// if(!usernum){
//     console.log(3 + usernum);
// }
// else {
//     console.log('please enter something');
// }

//XMLHttp Requests
//console.log(new XMLHttpRequest());
var weatherKey = 'a3099368637522be6641fb7fdcda0406';
var myUl = document.querySelector('ul');


var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a3099368637522be6641fb7fdcda0406');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log( JSON.parse(req.responseText)  );
        processData(apiData);
    }
}
req.send(null);
//console.log(req.responseText);

function processData(data) {
    for(var i = 0; i < data.list.length; i++) {
        console.log(data.list[i].weather[0].description);
        var weatherDesc = data.list[i].dt;
        var myLi = `
                    <li>
                        <p>
                            ${weatherDesc}
                        </p>
                    </li>
                    `
        
        myUl.innerHTML += myLi;
    }
}