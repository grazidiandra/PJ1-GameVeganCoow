class Obstacles {
  constructor(ctx, y) {
    this.ctx = ctx;
    this.x = 1500;
    this.y = y;
    this.width = 90;
    this.height = 60;
    this.img = new Image();
  }

  draw() {
    this.img.src = './images/drone.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(this.x, this.y, this.width, this.width);
  }

  hitBox() {
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= 2;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
}
