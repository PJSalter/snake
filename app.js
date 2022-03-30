// DOM for picking up the board for the snake game.
const BoardForTheSnake = document.querySelector('#game-board');
// making the canvas
//getting the canvas 2d content, which means that it will be drawn into a 2D space.
const displayBoardEffect = gameCanvas.getContext("2d");

//creating coordinates for as an object that will define the length of the snake.
// x and y coordinates.
// creating the snake in middle of canvas.

let mySnakeGrowth = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
];

