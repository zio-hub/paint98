const canvasColor = document.getElementsByClassName('pixel');
const paintedClass = document.getElementsByClassName('painted');

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

function getArray(){
    Array.from(canvasColor).forEach(element => element.addEventListener('click', changeColor));
    
};

function changeColor() {
        Array.from(canvasColor).forEach(element => element.addEventListener('mouseover', function() {
            element.classList.replace('pixel', 'painted')
        })
)};

function clearPainted() {
    let x = prompt('Choose canvas size. Max 100px', 16);
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

canvasRepeat();
getArray();


