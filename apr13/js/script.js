items, photos, itemArray

var items = document.querySelector('#items');
var photos = document.querySelector('li');

var selectedArray = [];
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "Photo of a beach",
        title: "Unsplash Beach",
        cost: 100,
        desc: "Hoo boy the air quality at this beach looks like garbage. Kids roll up hoping for a fun day at the beach and BAM they in the hospital with Mesothilioma."
    }, 
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "206",
        title: "Field with Lens Flare",
        cost: 175,
        desc: "Goddamn we need to fire the photographer who keeps taking so many pictures with atrocious lens flare. This field would look pretty nice if we would fucking see it."
    },
    {
        img: "http://unsplash.it/256/256?image=101",
        alt: "Apartment Roof",
        title: "Unsplash Apartment Roof",
        cost: 125,
        desc: "This Apartment roof looks like it needs powerwashed or something. It looks like it's supposed to be white but it's all grimy and stuff. Gross as hell."
    },
    {
        img: "http://unsplash.it/256/256?image=102",
        alt: "RASPBERRIES",
        title: "Unsplash Raspberries",
        cost: 999,
        desc: "MOTHA. FUCKING. RASPBERRIES. LOOK AT THOSE PHOTOGENIC PINK BASTARDS, ALL TART AND TASTY ON THAT PIECE OF WOOD. IMA EAT THEY BITCH ASSES RIGHT NOW GODDAMN"
    },
    {
        img: "http://unsplash.it/256/256?image=103",
        alt: "Shoes in a field",
        title: "Unsplash Shoes in a Field",
        cost: 30,
        desc: "Look at this boi bout to fall asleep in a field. Got his blue jeans and his converse on an everything. He gonna itch like a mother when he wakes up."
    },
    {
        img: "http://unsplash.it/256/256?image=104",
        alt: "Dreamcatcher",
        title: "Unsplash Dreamcatcher",
        cost: 150,
        desc: "Look at this pretty goddamn sweet dreamcatcher photo, shit's got all sorts of lens flare and awkward framing. Still pretty tho."
    }
];

function displayItems(arr) {
    for(var i = 0; i < arr.length; i++) {
        var item = `
        <li data-sku="00${i + 1}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>
`;
        items.innerHTML += item;
    }
    
}

displayItems(itemArray);


function addListener(arr) {
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', function(evt){
            // console.log(this.firstElementChild.checked);
            this.classList.toggle("selected");
            //this.firstElementChild.checked = true;
            (this.firstElementChild.checked ==true) ? this.firstElementChild.checked = false: this.firstElementChild.checked = true;
        });
    }
    console.log(this);
    selectedArray.push(this);
    console.log(selectedArray);
}

addListener(items.children);