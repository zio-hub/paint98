
const canvasColor = document.getElementsByClassName('pixel');
const paintedClass = document.getElementsByClassName('painted');
const pickcolorRed = document.getElementById('redcolor');
const redPainted = document.getElementsByClassName('redColor');

let toggle = true;
let mouseDown = 0;

function grids(){
    let gridDiv = document.createElement("div");
    gridDiv.classList.add('pixel');
    gridDiv.setAttribute('onmousedown', 'return false')
    document.getElementById('canvas').appendChild(gridDiv);
}

function canvasRepeat(){
    for(let i = 0; i < 10000; i++){
       grids();
    }
}

function mouseOver(){
    Array.from(canvasColor).forEach(move => move.addEventListener('mouseover', function mmove(){
        if(mouseDown === 1 && toggle === true){
            move.classList.replace('pixel', 'painted');
            move.classList.replace('redColor', 'painted');
        }
    }))
};

function init(){

    canvasRepeat();

    Array.from(canvasColor).forEach(mousedown => mousedown.addEventListener('mousedown', function mdown(){
        mouseDown = 1;
        if(toggle === true) {
            mousedown.classList.replace('pixel', 'painted');
            mousedown.classList.replace('redColor', 'painted');
        }
    }));

    Array.from(canvasColor).forEach(mouseup => mouseup.addEventListener('mouseup', function mup(){
        mouseDown = 0;
    }));

    mouseOver();
}

init();

function clearPainted() {
    let x = prompt('Choose canvas size (1-100):', 16);
    if(x > 100){
        alert('Max value is 100');
    }
    else if(x === null){
        return;
    }

    else if(x <= 100){
        document.getElementById('canvas').style.gridTemplateColumns = `repeat(${x}, 2fr)`;
        document.getElementById('canvas').style.gridTemplateRows = `repeat(${x}, 2fr)`;
        document.getElementById('canvas').style.gridTemplateAreas = 'none';
        Array.from(canvasColor).forEach(element => element.style.width = 'auto');
        Array.from(paintedClass).forEach(element => element.style.width = 'auto');
    }
    Array.from(paintedClass).forEach(element => element.classList.replace('painted', 'pixel'));
    Array.from(redPainted).forEach(element => element.classList.replace('redColor', 'pixel'));
}

function colorPickBlack(){
    toggle = true;
}

function colorPickRed(){
    toggle = false;

    Array.from(canvasColor).forEach(red => red.addEventListener('mouseover', function redcolor(){
        if(mouseDown === 1 && toggle === false){
            red.classList.replace('pixel', 'redColor');
    }}))

    Array.from(paintedClass).forEach(redmove => redmove.addEventListener('mouseover', function redcolor(){
        if(mouseDown === 1 && toggle === false){
        redmove.classList.replace('painted', 'redColor');
    }}))

    Array.from(paintedClass).forEach(mousedown => mousedown.addEventListener('mousedown', function mdown(){
        if(toggle === false)mousedown.classList.replace('painted', 'redColor');
    }));

    Array.from(canvasColor).forEach(redclick => redclick.addEventListener('mousedown', function redcolor(){
        if(toggle === false){
        redclick.classList.replace('pixel', 'redColor');
    }}))
}

