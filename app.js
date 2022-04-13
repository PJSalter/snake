//creating coordinates for as an object that will define the length of the snake.
// x and y coordinates.
// creating the snake in middle of canvas.

let mySnakeGrowth = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];

/*
The y - y-coordinate for all parts is always 200. The x
x-coordinate is at decrements of 10 to represent 
different parts of the snake’s body. The very first 
coordinate represents the snake’s head.
*/

// function to show the snake on the game board itself.
// with each paired coordinates.

const snakeDesign = (snakeBody) => {
  displayBoardEffect.fillStyle = "white";
  displayBoardEffect.strokestyle = "yellow";
  displayBoardEffect.fillRect(snakeBody.x, snakeBody.y, 10, 10);
  displayBoardEffect.strokeRect(snakeBody.x, snakeBody.y, 10, 10);
};

// function that will show the snake on board with a for each iteration.
const drawSnake = () => mySnakeGrowth.forEach(snakeDesign);

// now I will create the board for my snake game
// I will be multiplying the coordinates by the box size.
// there will be a block size of 25
let blockSizing = 25;
// rows and coloumns 20 x 20
// I will need a particular set of rows
let boardRows = 20;
// I will need a particular set of coloumn
let boardColumns = 20;

// then creating variable for the board and one variable for the context.

let BoardForTheSnake; // the variable for the board of the snake game I'm making

let displayBoardEffect; // this is the drawing object.

// so when the page loads then I will create an event handler which will load up the game board this will equal the function.
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // picking out the board.
    // DOM for picking up the board for the snake game.
    BoardForTheSnake = document.querySelector("#game-board");
    // setting the height to the board rows times by the blocksizing of the board.
    BoardForTheSnake.height = rows * blockSizing;
    // then a width that will be board coloumns times the block sizing.
    BoardForTheSnake.width = boardColumns * blockSizing;
    // making the canvas
    // getting the canvas 2d content, which means that it will be drawn into a 2D space.
    displayBoardEffect = BoardForTheSnake.getContext("2d");

    // now I will create a function that will update the board and the HTML is going to draw
    reformToUpdate();
  },
  false
);
