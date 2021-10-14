let img = document.getElementById('image');
let canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 200;
let ctx = canvas.getContext('2d');

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
  
img.addEventListener('load', e => {
    ctx.drawImage(img, 0, 0, 200, 200);

    let boxShadows = [];
    for(let y = 0; y < 200; y++) {
        for(let x = 0; x < 200; x++) {
            let pixelData = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
            boxShadows.push(`${x}px ${y}px 0px 1px ` + rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
        }
    }
    let imgCss = document.getElementById('css-img');
    imgCss.style.boxShadow = boxShadows.join(',');
});