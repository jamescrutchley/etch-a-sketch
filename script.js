const sketchContainer = document.querySelector('.container');

const draw = (e) => {
    let target = e.target;
    target.style.backgroundColor === 'red' ? 
        target.style.backgroundColor = 'blue' :
        target.style.backgroundColor = 'red';
}

const createSketchPad = () => {
    
    pageWidth = window.innerWidth;
    pageHeight = window.innerHeight;
    sketchContainer.style.width = pageWidth/2;
    sketchContainer.style.height = pageHeight/2;

    //create sketchpad
    for (i = 0; i < 16; i++) {
        let cell = document.createElement(`div`);
        cell.classList.add(`cell`)
        cell.classList.add(`${i}`)
        cell.style = `width: ${pageWidth/9}; height: ${pageWidth/9}; background-color: blue; border: solid white 2px;`;
        sketchContainer.appendChild(cell);
    
        cell.addEventListener('mouseover',draw)
    }    
}

const refresh = () => {
    let cells = document.querySelectorAll('.cell');
    pageWidth = window.innerWidth;
    pageHeight = window.innerHeight;
    sketchContainer.style.width = pageWidth/2;
    sketchContainer.style.height = pageHeight/2;

    cells.forEach(cell => {
        cell.style.width = pageWidth/9;
        cell.style.height = pageWidth/9;
    });
    
}


createSketchPad()
window.addEventListener('resize', refresh)
