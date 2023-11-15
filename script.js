let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '800px';
container.style.width = '800px';

function createFlashingSquare() {
let square = document.createElement('div');
square.style.display = 'flex';
square.style.flexWrap = 'wrap';
square.style.height = '12.5%';
square.style.width = '12.5%';
container.appendChild(square);
document.body.appendChild(container);

function setRandomColor() {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    square.style.background = randomColor;
}
setRandomColor;
setInterval(setRandomColor, 2000);
}

for (let i = 0; i < 64; i++) {
  createFlashingSquare();
}