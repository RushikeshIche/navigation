
let campus = document.getElementsByClassName('campus')[0];
campus.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/campus/campus.html";
})

let playground = document.getElementsByClassName('playground')[0];
playground.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/playground/playground.html";
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
let srkh = document.getElementsByClassName('srkh')[0];
srkh.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/srkh/srkh.html";
})
let delhi = document.getElementsByClassName('delhi')[0];
delhi.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/delhi/delhi.html";
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
let mvhr = document.getElementsByClassName('mvhr')[0];
mvhr.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/mvhr/mvhr.html";
})
let kchor = document.getElementsByClassName('kchor')[0];
kchor.addEventListener('click', ()=>{
    console.log("Clicked")
    let map = document.getElementsByClassName('map')[0];
    map.src = "maps/kchor/kchor.html";
})

let c = 45;

function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
