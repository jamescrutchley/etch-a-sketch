const sketchContainer = document.querySelector('.container');
const controls = document.querySelector('.controls');
let gridSize = 16;


const draw = (e) => {
    let target = e.target;
    target.style.backgroundColor === 'white' ? 
        target.style.backgroundColor = 'black' :
        target.style.backgroundColor = 'white';
}

const createSketchPad = () => {
    
    pageWidth = window.innerWidth;
    pageHeight = window.innerHeight;
    sketchContainer.style.width = '600px';
    sketchContainer.style.height = '600px';

    // create slider
    const slider = document.createElement('input');
    controls.appendChild(slider);
    slider.addEventListener('change', newGrid)
    slider.type = 'range';
    slider.min = '4';
    slider.max = '100';

    //create sketchpad
    for (i = 0; i < 256; i++) {
        let cell = document.createElement(`div`);
        cell.classList.add(`cell`)
        cell.classList.add(`${i}`)
        cell.style = `width: ${600/gridSize}px; height: ${600/gridSize}px; background-color: white; border: solid black 1px;`;
        sketchContainer.appendChild(cell);
    
        cell.addEventListener('mouseover',draw)
    }    
}

const newGrid = (e) => {
    sketchContainer.innerHTML='';
    let gridSize = e.target.value;

    for (i = 0; i < gridSize*gridSize; i++) {
        let cell = document.createElement(`div`);
        cell.classList.add(`cell`)
        cell.classList.add(`${i}`)
        cell.style = `width: ${600/gridSize}px; height: ${600/gridSize}px; background-color: white; border: solid black 1px;`;
        sketchContainer.appendChild(cell);
    
        cell.addEventListener('mouseover',draw)
    }    
}

createSketchPad()
