let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '800px';
container.style.width = '800px';

function createGradientSquare(startColor, endColor) {
let square = document.createElement('div');
square.style.display = 'flex';
square.style.flexWrap = 'wrap';
square.style.height = '12.5%';
square.style.width = '12.5%';
square.style.background = `linear-gradient(${startColor}, ${endColor})`;
container.appendChild(square);
document.body.appendChild(container);
}

for (let i = 0; i < 64; i++) {
  if ((Math.floor(i / 8) + i) % 2 === 0) {
    createGradientSquare('red', 'green');
  } else {
    createGradientSquare('black', 'blue');
  }
}