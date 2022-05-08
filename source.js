
let gridXYValue = 0;
let gridCount = 0;
let pixelStyle = `random`;
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
    if(pixelStyle===`random`){ 
        e.target.style.backgroundColor=randomHSL();
    }
    else{
        let darkPixel = pixelHSLLightness-10;
        e.target.style.backgroundColor=`hsl(0,0%,${darkPixel}%)`;
    } 
}

function randomHSL(){
    let hue = randomHSLHue();
    let sat = Math.round(Math.random()*100)
    let light = Math.round(Math.random()*100)
    let randomHSL = `hsl(${hue},${sat}%,${light}%)`
    return randomHSL;
}

function randomHSLHue(){
    let hue = 361
    while(hue>360){
        hue = Math.round(Math.random()*100)
    }
    return hue;
}