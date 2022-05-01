const pixelNodeList = document.querySelectorAll(`div.pixel`)
const pixelNode = document.querySelector(`div.pixel`)
console.log(pixelNodeList)
pixelNodeArray = Array.from(pixelNodeList)
console.log(pixelNodeArray)
pixelNodeArray.forEach((pixelNode) => {
    pixelNode.setAttribute(`style`, `height: 10px, width: 10px, background: black, color: blue`)
    
});
