class Obstacles {
  constructor(ctx, y) {
    this.ctx = ctx;
    this.x = 1500;
    this.y = y;
    this.width = 70;
    this.height = 40;
    this.img = new Image();
  }

  draw() {
    this.img.src = './images/drone.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= 7;
  }

  left() {
    return this.x + 15;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height - 5;
  }
}
