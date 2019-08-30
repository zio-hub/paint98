const canvasColor = document.getElementsByClassName('grid');
const paintedClass = document.getElementsByClassName('painted');

function grids(){
    let gridDiv = document.createElement("div");
    gridDiv.classList.add('grid');
    gridDiv.setAttribute('onmousedown', 'return false')
    document.getElementById('canvas').appendChild(gridDiv);
}

function canvasRepeat(){
    for(let i = 0; i < 256; i++){
       grids();
    }
}

function getArray(){
    Array.from(canvasColor).forEach(element => element.addEventListener('click', changeColor));
};

function changeColor() {
        Array.from(canvasColor).forEach(element => element.addEventListener('click', function() {
            element.classList.replace('grid', 'painted');
        })
)}

function clearPainted() {
    Array.from(paintedClass).forEach(element => element.classList.replace('painted', 'grid'));
}


canvasRepeat();
getArray();


