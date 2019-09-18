const canvas = document.getElementById('saveCow');
const startGame = document.getElementById('startGame');
const ctx = canvas.getContext('2d');
let frame = 0;
const myCows = [];
const myObstacles = [];
let gameOver = false;

const et = new Et(ctx);
const board = new Board(ctx);
//AUDIO ABDUCT
const audio = new Audio();
audio.src = './images/SOMabduct.mp3';
audio.volume = 0.2;
//AUDIO GAME
const audio2 = new Audio();
audio2.src = './images/somfundo.mp3';
audio2.volume = 0.1;

document.getElementById('start-game-button').onclick = function() {
  canvas.style.display = 'initial';
  startGame.style.display = 'none';
  render();
};

document.onkeydown = function(e) {
  et.move(e.keyCode);
};

document.onkeyup = function(e) {
  et.speedY = 0;
};

const createCow = () => {
  if (frame % 300 === 0) {
    myCows.push(new Cow(ctx));
  }
};

const addPoint = (cow, idx) => {
  if (cow.height <= 0 || cow.width <= 0) {
    myCows.splice(idx, 1);
    board.points += 1;
    audio.play();
  }
};

const moveCows = () => {
  myCows.forEach((cow, idx) => {
    et.abduct(cow);
    addPoint(cow, idx);
    cow.move();
    cow.draw();
  });
};

const creatObstacles = () => {
  if (frame % 100 === 0) {
    const randomY = Math.floor(Math.random() * (550 - 10) + 10);
    myObstacles.push(new Obstacles(ctx, randomY));
  }
};

const moveObstacles = () => {
  myObstacles.forEach(obs => {
    if (et.crashVertical(obs) || et.crashHorizontal(obs)) {
      et.pow();
      gameOver = true;
    }
    obs.move();
    obs.draw();
  });
};

const render = () => {
  if (gameOver) {
    board.gameover();
    cancelAnimationFrame(render);
    audio2.pause();
    setInterval(() => {
      window.location.reload();
    }, 1500);
  } else {
    audio2.play();
    board.update();
    board.draw();
    board.drawPoints();
    board.move();
    et.drawLight();
    et.newPos();
    et.draw();
    createCow();
    moveCows();
    creatObstacles();
    moveObstacles();
    requestAnimationFrame(render);
    frame += 1;
  }
};
