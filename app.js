// query selectors to pick up the id attributes for each button on direction.

const upThisWaySnake = document.querySelector("#upMove");

const snakeMoveThatLeft = document.querySelector("#leftMove");

const rightOverThereSnake = document.querySelector("#rightMove");

const foodIsDown = document.querySelector("#downMove");

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

let slitherPaceX = 0;
let slitherPaceY = 0;

// the snakes body growth will appear as an empty array at first.
// there will be multiple segments for x and y as the body grows larger.
let mySnakeGrowth = [];

// x and y coordinates for creating the food, similar to creating the snake head.
// let yumYumX = blockSizing * 12;
// // y coordinate of food
// let foodYumY = blockSizing * 12;

let yumYumX;
let foodYumY;

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

    // once page is refreshed the food will be located in a different position each and every time.
    yummyFoodPosition();

    // now I am going to make the snake move by creating an event handler for keyup on move on activation.
    // its going to activate a function called moveThatSnake
    document.addEventListener("keyup", moveThatSnake);

    // event handlers for each clicked direction from button pad.

    upThisWaySnake.addEventListener("click", snakeGoesUp);

    snakeMoveThatLeft.addEventListener("click", snakeGoesLeft);

    rightOverThereSnake.addEventListener("click", snakeGoesRight);

    foodIsDown.addEventListener("click", snakeGoesDown);

    // now I will create a function that will update the board and the HTML is going to draw
    setInterval(reformToUpdate, 2000 / 10);
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

  // snake food styling.
  // linear gradient styling for food using two different colours.
  let snakeFoodMix = displayBoardEffect.createLinearGradient(85, 5, 20, 65);
  snakeFoodMix.addColorStop(0, "#035bff");
  snakeFoodMix.addColorStop(1, "#FFFF00");

  // fill the style with the linear gradient to make the food look yummy.
  displayBoardEffect.fillStyle = snakeFoodMix;

  displayBoardEffect.fillRect(yumYumX, foodYumY, blockSizing, blockSizing);

  // to check if the snake eats the food.
  // x cor for snake equals food cor x and y coe snake equals food cor y, then simply eat that food hungry snake.
  if (xCorSnake == yumYumX && yCorSnake == foodYumY) {
    // now its going to grow the snake in length from where the food location was eaten.
    mySnakeGrowth.push([yumYumX, foodYumY]);
    // then eat that yummy food snake.
    yummyFoodPosition();
  }

  // moving the growth of the snake body.
  // decrement for loop.
  for (let i = mySnakeGrowth.length - 1; i > 0; i--) {
    // starting at the very end of the snake body, the tail of the snake.
    mySnakeGrowth[i] = mySnakeGrowth[i - 1];
    // I need the tail to gain the past x and y coordinates.
  }
  // so if there are body parts in snake array.
  // finding the length.
  if (mySnakeGrowth.length) {
    // then I will set the body of my snake to the snaked head.
    mySnakeGrowth[0] = [xCorSnake, yCorSnake];
  }

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
  // this will make it move one square at a time.
  xCorSnake += slitherPaceX * blockSizing;
  yCorSnake += slitherPaceY * blockSizing;
  // x and y coordinates, also the width and the height.
  displayBoardEffect.fillRect(xCorSnake, yCorSnake, blockSizing, blockSizing);
  // the snake is on coordinates 7 by 7 within the block.

  // now I will draw the different segments for each growth of the snake.
  for (let i = 0; i < mySnakeGrowth.length; i++) {
    displayBoardEffect.fillRect(
      mySnakeGrowth[i][0],
      mySnakeGrowth[i][1],
      blockSizing,
      blockSizing
    );
  }
};

// creating a function to make the snake move.
// this function will pass on a key event
const moveThatSnake = (event) => {
  // the key up will wait for the user to press on an arrow key.
  // up, down, left or right.
  // soon as the user lets go of the key then it will actiavte this function to move the direction.
  if (event.code == "ArrowUp" && slitherPaceY != 1) {
    slitherPaceX = 0;
    slitherPaceY = -1;
  } else if (event.code == "ArrowDown" && slitherPaceY != -1) {
    slitherPaceX = 0;
    slitherPaceY = 1;
  } else if (event.code == "ArrowLeft" && slitherPaceY != 1) {
    slitherPaceX = -1;
    slitherPaceY = 0;
  } else if (event.code == "ArrowRight" && slitherPaceY != -1) {
    slitherPaceX = 1;
    slitherPaceY = 0;
  }
};

// A function to randomise the food in x and y coordinates.
// placing the food in any loacation.
const yummyFoodPosition = () => {
  // Math.random() method brings up a number between 0-1 and then multiplying this by the number of coloumns and rows from 0-19.9999 then multiplying by the blocksizing which is 25.
  // Math.floor() method brings its to the highest or lowest whole integer place.
  // setting the yumyum x to methods of Math.floor() and Math.random.
  // to randomise the x coordinates. times its coloumns and the sizing of the block.
  yumYumX = Math.floor(Math.random() * boardColumns) * blockSizing;
  // creating a similar line of code for the y coordinate for the food.
  // however multiplying the rows instead.
  foodYumY = Math.floor(Math.random() * boardRows) * blockSizing;
};

// const snakeGoesUp = (e) => {
//   if (e.code == "ArrowUp" && slitherPaceY != 1) {
//     slitherPaceX = 0;
//     slitherPaceY = -1;
//   }
// };

// const snakeGoesLeft = (e) => {
//   if (e.code == "ArrowLeft" && slitherPaceY != 1) {
//     slitherPaceX = -1;
//     slitherPaceY = 0;
//   }
// };

// const snakeGoesRight = (e) => {
//   if (e.code == "ArrowRight" && slitherPaceY != -1) {
//     slitherPaceX = 1;
//     slitherPaceY = 0;
//   }
// };

// const snakeGoesDown = (e) => {
//   if (e.code == "ArrowDown" && slitherPaceY != -1) {
//     slitherPaceX = 0;
//     slitherPaceY = 1;
//   }
// };
