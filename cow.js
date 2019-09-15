class Cow {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1500;
    this.y = 600;
    this.width = 260;
    this.height = 130;
    this.direction = false;
    this.img = new Image();
  }

  draw() {
    this.img.src = './images/cow1.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // this.ctx.fillStyle = 'brown';
    // this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  move() {
    if (this.direction) {
      if (this.height > 0 && this.width > 0) {
        this.height -= 5;
        this.width -= 5;
        this.y -= 2;
      }
    } else {
      this.x -= 3;
    }
  }
}
