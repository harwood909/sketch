/* const pixelNodeList = document.querySelectorAll(`div.pixel`)
const pixelNode = document.querySelector(`div.pixel`)
console.log(pixelNodeList)
pixelNodeArray = Array.from(pixelNodeList)
console.log(pixelNodeArray)
pixelNodeArray.forEach((pixelNode) => {
    pixelNode.setAttribute(`style`, `height: 10px, width: 10px, background: black, color: blue`)
    
}); */
let gridXYValue = 0;
let gridCount = 0;
const r = document.querySelector(`:root`);
const btn = document.querySelector(`.btn-grid-size-popup`);
const pixel = document.createElement(`div`);
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
}

function gridSizeModal(){
gridXYValue = prompt(`Enter a number, 1 to 50`,20);
console.log(gridXYValue);
}
