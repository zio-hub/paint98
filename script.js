const canvasColor = document.getElementsByClassName('pixel');
const paintedClass = document.getElementsByClassName('painted');
const redPainted = document.getElementsByClassName('redColor');
const pickcolorRed = document.getElementById('redcolor');
const colorSel = document.getElementById('colorselector');

let toggleBlack = true;
let toggleRed = false;
let toggleWhite = false;
let mouseDown = 0;

function grids(){
    let gridDiv = document.createElement("div");
    gridDiv.classList.add('pixel');
    gridDiv.setAttribute('onmousedown', 'return false')
    document.getElementById('canvas').appendChild(gridDiv);
};

function canvasRepeat(){
    for(let i = 0; i < 10000; i++){
       grids();
    }
};

function mouseOver(){
    Array.from(canvasColor).forEach(move => move.addEventListener('mouseover', function mmove(){
        if(mouseDown === 1 && toggleBlack === true){
            move.classList.replace('pixel', 'painted');
            move.classList.replace('redColor', 'painted');
        }
    }))
};

function init(){
    canvasRepeat();

    Array.from(canvasColor).forEach(mousedown => mousedown.addEventListener('mousedown', function mdown(){
        mouseDown = 1;
        toggleWhite = false;
        if(toggleBlack === true && toggleWhite === false) {
            mousedown.classList.replace('pixel', 'painted');
            mousedown.classList.replace('redColor', 'painted');
        }
    }));

    Array.from(canvasColor).forEach(mouseup => mouseup.addEventListener('mouseup', function mup(){
        mouseDown = 0;
    }));

    mouseOver();
};

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
};

function colorPickBlack(){
    toggleBlack = true;
    colorSel.style.backgroundColor = '#000'
};

function colorPickWhite(){
    toggleWhite = true;
    toggleRed = false;
    toggleBlack = false;
    colorSel.style.backgroundColor = '#ffffff';

    Array.from(paintedClass).forEach(whitemove => whitemove.addEventListener('mouseover', function whitecolor(){
        if(mouseDown === 1 && toggleBlack === false && toggleRed === false){
        whitemove.classList.replace('painted', 'pixel');
    }}));

    Array.from(redPainted).forEach(whiteredmove => whiteredmove.addEventListener('mouseover', function whiteredcolor(){
        if(mouseDown === 1 && toggleBlack === false && toggleRed === false){
        whiteredmove.classList.replace('redColor', 'pixel');
    }}));

    Array.from(paintedClass).forEach(mousedownblack => mousedownblack.addEventListener('mousedown', 
    function mdownblack(){
        if(toggleRed === false && toggleBlack === false){
            mousedownblack.classList.replace('painted', 'pixel');
    }}));

    Array.from(redPainted).forEach(mousedownred => mousedownred.addEventListener('mousedown', function mdownred(){
        if(toggleRed === false && toggleBlack === false){
        mousedownred.classList.replace('redColor', 'pixel');
    }}));
};

function colorPickRed(){
    toggleRed = true;
    toggleBlack = false;
    toggleWhite = false;
    colorSel.style.backgroundColor = '#ff0000';

    Array.from(canvasColor).forEach(red => red.addEventListener('mouseover', function redcolor(){
        if(mouseDown === 1 && toggleRed === true && toggleBlack === false && toggleWhite === false){
            red.classList.replace('pixel', 'redColor');
    }}));

    Array.from(paintedClass).forEach(redmove => redmove.addEventListener('mouseover', function redcolor(){
        if(mouseDown === 1 && toggleRed === true && toggleBlack === false && toggleWhite === false){
        redmove.classList.replace('painted', 'redColor');
    }}));

    Array.from(canvasColor).forEach(redclick => redclick.addEventListener('mousedown', function redcolor(){
        if(toggleRed === true && toggleBlack === false && toggleWhite === false){
            redclick.classList.replace('pixel', 'redColor');
    }}));

    Array.from(paintedClass).forEach(mousedown => mousedown.addEventListener('mousedown', function mdown(){
        if(toggleRed === true && toggleBlack === false && toggleWhite === false){
            mousedown.classList.replace('painted', 'redColor');
    }}));

};

function startUp(){
    document.getElementById('startdrop').classList.toggle('showstartcontent');
    document.getElementById('windowsstart').classList.toggle('active')
};

window.onclick = function(e){
    if(!e.target.matches('#windowsstart')){
        var startups = document.getElementsByClassName('startdropcontent');
        var i;
        for(i = 0; i < startups.length; i++){
            var openStartup = startups[i];
            if(openStartup.classList.contains('showstartcontent')){
                openStartup.classList.remove('showstartcontent');
                document.getElementById('windowsstart').classList.toggle('active')
            }
        }
    }
}

function shutDown(){
    var myWindow = window.open("", "_self");
    var x=confirm('Shut Down?');
    if(x) { 
        myWindow.document.write("");
        setTimeout (function() {myWindow.close();},1000)}
};

