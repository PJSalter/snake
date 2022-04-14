//creating coordinates for as an object that will define the length of the snake.
// x and y coordinates.
// creating the snake in middle of canvas.

// let mySnakeGrowth = [
//   { x: 200, y: 200 },
//   { x: 190, y: 200 },
//   { x: 180, y: 200 },
//   { x: 170, y: 200 },
//   { x: 160, y: 200 },
// ];

/*
The y - y-coordinate for all parts is always 200. The x
x-coordinate is at decrements of 10 to represent 
different parts of the snake’s body. The very first 
coordinate represents the snake’s head.
*/

// function to show the snake on the game board itself.
// with each paired coordinates.

// const snakeDesign = (snakeBody) => {
//   displayBoardEffect.fillStyle = "white";
//   displayBoardEffect.strokestyle = "yellow";
//   displayBoardEffect.fillRect(snakeBody.x, snakeBody.y, 10, 10);
//   displayBoardEffect.strokeRect(snakeBody.x, snakeBody.y, 10, 10);
// };

// // function that will show the snake on board with a for each iteration.
// const drawSnake = () => mySnakeGrowth.forEach(snakeDesign);

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

let boardForTheSnake; // the variable for the board of the snake game I'm making

let displayBoardEffect; // this is the drawing object.

// designing the snake
// starting with creating the snakes head.
// the x coordinate
// equalling with the block sizing and times that by seven.
// so initially what I am creating is coordinates for the snake to start on block 7 by 7
// multiplying the x and y coordinates by the block sizing.
// so that the snake reaches the correct pixel region within the page.
let xCorSnake = blockSizing * 7;
// y coordinate
let yCorSnake = blockSizing * 7;

// so when the page loads then I will create an event handler which will load up the game board this will equal the function.
window.addEventListener(
  "DOMContentLoaded",
  function () {
    // picking out the board.
    // DOM for picking up the board for the snake game.
    boardForTheSnake = document.getElementById("game-board");
    // setting the height to the board rows times by the blocksizing of the board.
    boardForTheSnake.height = boardRows * blockSizing;
    // then a width that will be board coloumns times the block sizing.
    boardForTheSnake.width = boardColumns * blockSizing;
    // making the canvas
    // getting the canvas 2d content, which means that it will be drawn into a 2D space.
    displayBoardEffect = boardForTheSnake.getContext("2d");

    // now I will create a function that will update the board and the HTML is going to draw
    reformToUpdate();
  },
  false
);

const reformToUpdate = () => {
  // this will change the color with the fill style to purple.
  displayBoardEffect.fillStyle = "#b19cd9";

  // starting from the corner of the canvas.
  // then filling a width and height of 500. because 25 times 25 equals 100.
  // this will make the whole area purple.
  displayBoardEffect.fillRect(
    0,
    0,
    boardForTheSnake.width,
    boardForTheSnake.height
  );

  // creating the colour of the snake. with a dark pastel green hex code.
  // and using a neon pastel pink also to trend with a fade.
  // styling in JavaScript of linear Gradient for the beginning snake head
  let snakeBlend = displayBoardEffect.createLinearGradient(65, 16, 5, 100);
  snakeBlend.addColorStop(0, "#03c03c");
  snakeBlend.addColorStop(1, "#FF44CC");

  // fill the style with the linear gradient
  displayBoardEffect.fillStyle = snakeBlend;
  /* The fillRect() method draws a filled rectangle whose starting point is 
  at (x, y) and whose size is specified by width and height. The fill style 
  is determined by the current fillStyle attribute.
  */
  // x and y coordinates, also the width and the height.
  displayBoardEffect.fillRect(xCorSnake, yCorSnake, blockSizing, blockSizing);
};
