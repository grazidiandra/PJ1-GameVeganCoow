const canvas = document.getElementById('saveCow');
const ctx = canvas.getContext('2d');

const et = new Et(ctx);
let frame = 0;
const myCows = [];
const myObstacles = [];
let gameOver = false;
et.draw();

document.onkeydown = function(e) {
  et.move(e.keyCode);
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
  if (frame % 100 === 0) {
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
    et.update();
    et.draw();
    createCow();
    moveCows();
    creatObstacles();
    moveObstacles();
    requestAnimationFrame(render);
    frame += 1;
  }
};

render();
