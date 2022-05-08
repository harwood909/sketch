
let gridXYValue = 0;
let gridCount = 0;
const pixel = document.createElement(`div`);
const r = document.querySelector(`:root`);
const pixelHSLLightness = 100;
console.log(pixelHSLLightness);
const btn = document.querySelector(`.btn-grid-size-popup`);
const grid = document.querySelector(`#sketch-space`);

btn.addEventListener(`click`,()=> changeGridSize());

function changeGridSize(){
    gridSizeModal();
    gridCount = Math.pow(gridXYValue,2);
    r.style.setProperty(`--grid-column-row-count`, gridXYValue);
    pixel.classList.add(`pixel`);
    for(i=0;i<gridCount;i++){
        grid.appendChild(pixel.cloneNode(true));
    }
    //const pixelElement = document.querySelector(`.pixel`);
    grid.addEventListener(`mouseover`,(e)=>changePixelAttribute(e));
}

function gridSizeModal(){
    gridXYValue = prompt(`Enter a number, 1 to 50`,20);
    if(gridCount!=0){
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
    }
}

function changePixelAttribute(e){    
    let darkPixel = pixelHSLLightness-10;
    console.log(darkPixel);
    e.target.style.backgroundColor=`hsl(0,0%,${darkPixel}%)`;
    
}