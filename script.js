
let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '800px';
container.style.width = '800px';


function createRedSquare() {
let square = document.createElement('div');
square.style.display = 'flex';
square.style.flexWrap = 'wrap';
square.style.height = '12.5%';
square.style.width = '12.5%';
square.style.background = 'red';
container.appendChild(square);
document.body.appendChild(container);
}

function createBlackSquare() {
let square = document.createElement('div');
square.style.display = 'flex';
square.style.flexWrap = 'wrap';
square.style.height = '12.5%';
square.style.width = '12.5%';
square.style.background = 'black';
container.appendChild(square);
document.body.appendChild(container);
}
for (let i = 0; i < 64; i++) {
if ((Math.floor(i / 8) + i) % 2 === 0) {
    createRedSquare();
} else {
    createBlackSquare();
}
}



// Create a container for your tiles with the following styles:
// display = "flex"
// flexWrap = "wrap"
// width = "800px"
// height = "800px"
// Each tile should have the following styles:
// width = "12.5%"
// height = "12.5%"