
// search option js code for main search options to embend in map

for (i = 0; i < 9; i++) {
    var cseandece2 = document.getElementsByClassName('arnav_search')[`${i}`]
    cseandece2.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/cseandece/cseandece2/cseandece2.html";
    })
}
for (i = 9; i < 16; i++) {
    var academic1 = document.getElementsByClassName('arnav_search')[`${i}`]
    academic1.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/new-academic/new-academic1/new-academic1.html";
    })
}
for (i = 16; i < 22; i++) {
    var cseandece1 = document.getElementsByClassName('arnav_search')[`${i}`]
    cseandece1.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/cseandece/cseandece1/cseandece1.html";
    })
}
for (i = 22; i < 29; i++) {
    var playground1 = document.getElementsByClassName('arnav_search')[`${i}`]
    playground1.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/playground/playground.html";
    })
}
for (i = 29; i < 38; i++) {
    var academic0 = document.getElementsByClassName('arnav_search')[`${i}`]
    academic0.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/new-academic/new-academic0/new-academic0.html";
    })
}

for (i = 29; i < 38; i++) {
    var academic0 = document.getElementsByClassName('arnav_search')[`${i}`]
    academic0.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/new-academic/new-academic0/new-academic0.html";
    })
}

for (i = 38; i < 43; i++) {
    var mech1 = document.getElementsByClassName('arnav_search')[`${i}`]
    mech1.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/mech/mech1/mech1.html";
    })
}

for (i = 43; i < 45; i++) {
    var mech0 = document.getElementsByClassName('arnav_search')[`${i}`]
    mech0.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/mech/mech0/mech0.html";
    })
}

for (i = 45; i < 56; i++) {
    var cseandece0 = document.getElementsByClassName('arnav_search')[`${i}`]
    cseandece0.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/cseandece/cseandece0/cseandece0.html";
    })
}
for (i=56;i<66;i++){
    var oldacademic0 = document.getElementsByClassName('arnav_search')[`${i}`]
    oldacademic0.addEventListener('click', () => {
        console.log("Clicked")
        let map = document.getElementsByClassName('map')[0];
        map.src = "maps/old-academic/old-academic0/old-academic0.html";
    })
}
    for (i=66;i<73;i++){
        var oldacademic1 = document.getElementsByClassName('arnav_search')[`${i}`]
        oldacademic1.addEventListener('click', () => {
            console.log("Clicked")
            let map = document.getElementsByClassName('map')[0];
            map.src = "maps/old-academic/old-academic1/old-academic1.html";
        })
}
// codes of embending in map ends here

function draw(){
let c = 45;
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
