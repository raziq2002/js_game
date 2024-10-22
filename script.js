const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('game');

let score = 0;
let ballFallInterval;
let ballSpeed = 2;
let ballPositionX = Math.random() * (gameArea.clientWidth - 20);
let paddlePositionX = gameArea.clientWidth / 2 - 40;

function startGame() {
    ball.style.left = `${ballPositionX}px`;
    ball.style.top = '0px';
    ballFallInterval = setInterval(dropBall, 20);
}

function dropBall() {
    let ballTop = parseInt(ball.style.top);
    ball.style.top = `${ballTop + ballSpeed}px`;

    if (ballTop > gameArea.clientHeight - 40) {
        if (ballPositionX >= paddlePositionX && ballPositionX <= paddlePositionX + 80) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            resetBall();
        } else {
            clearInterval(ballFallInterval);
            alert('Game Over! Your score: ' + score);
            document.location.reload();
        }
    }
}

function resetBall() {
    ballPositionX = Math.random() * (gameArea.clientWidth - 20);
    ball.style.left = `${ballPositionX}px`;
    ball.style.top = '0px';
}

function movePaddle(event) {
    if (event.key === 'ArrowLeft' && paddlePositionX > 0) {
        paddlePositionX -= 20;
    } else if (event.key === 'ArrowRight' && paddlePositionX < gameArea.clientWidth - 80) {
        paddlePositionX += 20;
    }
    paddle.style.left = `${paddlePositionX}px`;
}

document.addEventListener('keydown', movePaddle);
startGame();
