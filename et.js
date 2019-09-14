/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
class Et {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 150;
    this.y = 10;
    this.height = 150;
    this.width = 150;
  }

  draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
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
    if (cow.x <= this.x + 50 && cow.x >= this.x && cow.y <= this.y + 350) {
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
