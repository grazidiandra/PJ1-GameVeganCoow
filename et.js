/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
class Et {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 70;
    this.y = 10;
    this.height = 100;
    this.width = 120;
    this.img = new Image();
  }

  draw() {
    this.img.src = './images/spaceship2.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // this.ctx.fillStyle = 'blue';
    // this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  hitBox() {
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  }

  move(e) {
    switch (e) {
      case 38:
        this.y -= 15;
        break;
      case 40:
        this.y += 15;
        break;
    }
  }

  update() {
    this.ctx.clearRect(0, 0, 1400, 750);
  }

  abduct(cow) {
    if (cow.x <= this.x + 80 && cow.x >= this.x && cow.y <= this.y + 250) {
      cow.direction = true;
    }
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

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}
