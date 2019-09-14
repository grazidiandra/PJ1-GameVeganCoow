class Obstacles {
  constructor(ctx, y) {
    this.ctx = ctx;
    this.x = 1500;
    this.y = y;
    this.height = 30;
    this.width = 30;
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
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
