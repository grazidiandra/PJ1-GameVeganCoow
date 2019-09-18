class Airplan {
  constructor(ctx, y) {
    this.ctx = ctx;
    this.x = 1500;
    this.y = y;
    this.width = 500;
    this.height = 100;
    this.img = new Image();
  }

  draw() {
    this.img.src = './images/aviao.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= 12;
  }

  left() {
    return this.x + 30;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y + 10;
  }

  bottom() {
    return this.y + this.height - 10;
  }
}
