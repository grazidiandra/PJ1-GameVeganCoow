const canvas = document.getElementById('saveCow');
const startGame = document.getElementById('startGame');
const ctx = canvas.getContext('2d');
let frame = 0;
const myCows = [];
const myObstacles = [];
let gameOver = false;

const et = new Et(ctx);
const board = new Board(ctx);

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

const clear = (cow, idx) => {
  if (cow.height <= 0 && cow.width <= 0) {
    myCows.splice(idx, 1);
  }
};

const moveCows = () => {
  myCows.forEach((cow, idx) => {
    et.abduct(cow);
    clear(cow, idx);
    cow.move();
    cow.draw();
  });
};

const creatObstacles = () => {
  if (frame % 120 === 0) {
    const randomY = Math.floor(Math.random() * (550 - 10) + 10);
    myObstacles.push(new Obstacles(ctx, randomY));
  }
};

const moveObstacles = () => {
  myObstacles.forEach(obs => {
    if (et.crashWith(obs)) {
      gameOver = true;
    }
    obs.move();
    obs.draw();
  });
};

const render = () => {
  if (gameOver) {
    cancelAnimationFrame(render);
  } else {
    board.update();
    board.draw();
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
