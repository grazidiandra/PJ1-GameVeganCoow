class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img2 = new Image();
    this.x = 0;
    this.y = 0;
    this.speed = -2;
    this.width = 1430;
    this.height = 750;
    this.points = 0;
  }

  move() {
    this.x += this.speed;
    this.x %= this.width;
  }

  points() {
    return this.points;
  }

  drawPoints() {
    this.ctx.font = '20px Verdana';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText('VEGAN POINTS: ' + this.points, 50, 50);
  }

  draw() {
    this.img.src = './images/background.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    if (this.speed < 0) {
      this.ctx.drawImage(
        this.img,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    } else {
      this.ctx.drawImage(
        this.img,
        this.x - this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }

  gameover() {
    this.img2.src = './images/gameover.png';
    this.img2.onload = () => this.ctx.drawImage(this.img2, 460, 300, 500, 80);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
