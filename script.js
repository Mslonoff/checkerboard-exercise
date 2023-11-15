// create new div element called container
let container = document.createElement('div');
// style the container (div element)
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '800px';
container.style.width = '800px';

function createFlashingSquare() {
    // create a new div element called square
    let square = document.createElement('div');
    // style the square (new div element)
    square.style.display = 'flex';
    square.style.flexWrap = 'wrap';
    square.style.height = '12.5%';
    square.style.width = '12.5%';
    // add the square to the container as a child of the container (making square a child node of container??)
    container.appendChild(square);
    // add the container to the document as a child of the document (making the container a child node of the document?? Is document the root node? or is <html> the root node?)
    document.body.appendChild(container);

function setRandomColor() {
    // create a random variable color that generates a random color from red, green, and blue (16,777,216 possible colors!)
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    // set the square background color to the random color created
    square.style.background = randomColor;
}
// invoke the setRandomColor function inside of this create flashing square function
setRandomColor;
// invoke the built-in function to set an interval for the random color function to run once every 2 seconds
setInterval(setRandomColor, 2000);
}

// iterate to invoke the createFlashingSquare function 64 times
for (let i = 0; i < 64; i++) {
  createFlashingSquare();
}