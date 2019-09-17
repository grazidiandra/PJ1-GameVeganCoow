/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
class Et {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 80;
    this.y = 100;
    this.height = 120;
    this.width = 190;
    this.img = new Image();
    this.speedY = 0;
    this.img2 = new Image();
  }

  draw() {
    this.img.src = './images/spaceship2.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  newPos() {
    if (this.y >= 0 && this.y <= 450) {
      this.y += this.speedY;
    } else if (this.y < 0) {
      this.y += 1;
    } else if (this.y > 450) {
      this.y -= 1;
    }
  }

  drawLight() {
    if (this.y >= 400) {
      this.ctx.fillStyle = 'white';
      this.ctx.globalAlpha = 0.4;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x + 70, this.y + 90);
      this.ctx.lineTo(this.x + 120, this.y + 90);
      this.ctx.lineTo(this.x + 200, this.y + 300);
      this.ctx.lineTo(this.x - 20, this.y + 300);
      this.ctx.lineTo(this.x + 70, this.y + 90);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.globalAlpha = 0.6;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x + 80, this.y + 90);
      this.ctx.lineTo(this.x + 110, this.y + 90);
      this.ctx.lineTo(this.x + 190, this.y + 300);
      this.ctx.lineTo(this.x - 10, this.y + 300);
      this.ctx.lineTo(this.x + 80, this.y + 90);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.globalAlpha = 1.0;
    }
  }

  move(e) {
    switch (e) {
      case 38:
        this.speedY -= 3;
        break;
      case 40:
        this.speedY += 3;
        break;
    }
  }

  abduct(cow) {
    if (cow.x <= this.x + 70 && cow.x >= this.x && cow.y <= this.y + 250) {
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

  crashVertical(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() - 90 < obstacle.left() ||
      this.left() + 70 > obstacle.right()
    );
  }

  crashHorizontal(obstacle) {
    return !(
      this.bottom() - 60 < obstacle.top() ||
      this.top() + 60 > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

  pow() {
    this.img2.src = './images/pow.png';
    this.img2.onload = () => this.ctx.drawImage(this.img2, 60, 300, 50, 80);
  }
}
