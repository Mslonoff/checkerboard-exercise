
let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '800px';
container.style.width = '800px';

function createRandomColorSquare() {
let square = document.createElement('div');
square.style.display = 'flex';
square.style.flexWrap = 'wrap';
square.style.height = '12.5%';
square.style.width = '12.5%';
square.style.backgroundColor = createRandomColor();
container.appendChild(square);
document.body.appendChild(container);
}

function createRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

for (let i = 0; i < 64; i++) {
createRandomColorSquare();
}

// function createBlackSquare() {
// let square = document.createElement('div');
// square.style.display = 'flex';
// square.style.flexWrap = 'wrap';
// square.style.height = '12.5%';
// square.style.width = '12.5%';
// square.style.background = 'black';
// container.appendChild(square);
// document.body.appendChild(container);
// }

