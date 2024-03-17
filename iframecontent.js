
let playground = document.getElementsByClassName('playground')[0];
playground.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/playground/playground.html";
})
let campus = document.getElementsByClassName('campus')[0];
campus.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/campus/campus.html";
})
let cseandece = document.getElementsByClassName('cseandece')[0];
cseandece.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];    
    map.src = "maps/cseandece/cseandece.html";
})
let mech = document.getElementsByClassName('mech')[0];
mech.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/mech/mech.html";
})
let newacademic = document.getElementsByClassName('new-academic')[0];
newacademic.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/new-academic/new-academic.html";
})
let oldacademic = document.getElementsByClassName('old-academic')[0];
oldacademic.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/old-academic/old-academic.html";
})
let srkh = document.getElementsByClassName('srkh')[0];
srkh.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/srkh/srkh.html";
})
let kchor = document.getElementsByClassName('kchor')[0];
kchor.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/kchor/kchor.html";
})
let mvhr = document.getElementsByClassName('mvhr')[0];
mvhr.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/mvhr/mvhr.html";
})
let delhi = document.getElementsByClassName('delhi')[0];
delhi.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/delhi/delhi.html";
})
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

// codes of embending in map ends here
let c = 45;

function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
