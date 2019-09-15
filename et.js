/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
class Et {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 80;
    this.y = 10;
    this.height = 120;
    this.width = 190;
    this.img = new Image();
    this.speedY = 0;
  }

  draw() {
    this.img.src = './images/spaceship2.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.y += this.speedY;
  }

  move(e) {
    switch (e) {
      case 38:
        this.speedY -= 2;
        break;
      case 40:
        this.speedY += 2;
        break;
    }
  }

  abduct(cow) {
    if (
      cow.x <= this.x + this.width / 3 &&
      cow.x >= this.x &&
      cow.y <= this.y + 200
    ) {
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
