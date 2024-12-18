const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
function goBack(){
    window.history.back();
}
// Game Variables
const box = 20; // Size of each grid box
let snake = [{ x: 9 * box, y: 10 * box }];
let direction = "RIGHT";
let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};
let score = 0;
let gameSpeed = 100; // Default speed
let isGameRunning = true;
let game;

const playPauseButton = document.getElementById("playPauseButton");
const difficultySelect = document.getElementById("difficulty");

// Listen for arrow key inputs
document.addEventListener("keydown", changeDirection);
function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction !== "RIGHT") direction = "LEFT";
    else if (key === 38 && direction !== "DOWN") direction = "UP";
    else if (key === 39 && direction !== "LEFT") direction = "RIGHT";
    else if (key === 40 && direction !== "UP") direction = "DOWN";
}

// Pause/Play Functionality
playPauseButton.addEventListener("click", () => {
    if (isGameRunning) {
        clearInterval(game);
        playPauseButton.textContent = "Play";
    } else {
        game = setInterval(draw, gameSpeed);
        playPauseButton.textContent = "Pause";
    }
    isGameRunning = !isGameRunning;
});

// Change Difficulty
difficultySelect.addEventListener("change", () => {
    gameSpeed = parseInt(difficultySelect.value);
    if (isGameRunning) {
        clearInterval(game);
        game = setInterval(draw, gameSpeed);
    }
});

// Collision Detection
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Draw the Game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Draw snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "lime" : "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Snake head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Move snake in the current direction
    if (direction === "LEFT") snakeX -= box;
    if (direction === "UP") snakeY -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "DOWN") snakeY += box;

    // Snake eats the food
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        // Remove the tail
        snake.pop();
    }

    // New head position
    const newHead = { x: snakeX, y: snakeY };

    // Game over conditions
    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert("Game Over! Your score is: " + score);
        return;
    }

    // Add the new head to the snake
    snake.unshift(newHead);

    // Display score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
}

// Start the game
game = setInterval(draw, gameSpeed);
