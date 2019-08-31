
const canvasColor = document.getElementsByClassName('pixel');
const paintedClass = document.getElementsByClassName('painted');
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

function init(){

    canvasRepeat();

    Array.from(canvasColor).forEach(mousedown => mousedown.addEventListener('mousedown', function xdxd(){
        mouseDown = 1;
        mousedown.classList.replace('pixel', 'painted');
    }));

    Array.from(canvasColor).forEach(mouseup => mouseup.addEventListener('mouseup', function xd(){
        mouseDown = 0;
    }));

    Array.from(canvasColor).forEach(move => move.addEventListener('mouseover', function hue(){
        if(mouseDown === 1)move.classList.replace('pixel', 'painted');
    }))
}

init();

function clearPainted() {
    let x = prompt('Canvas size. Max 100px', 16);
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
}

