class Cow {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1500;
    this.y = 600;
    this.height = 300;
    this.width = 150;
    this.direction = false;
    this.cowImageX = 0;
    this.cowImageY = 0;
    this.img = new Image();
  }

  draw() {
    this.img.src = './images/cow1.jpeg';
    this.ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    // this.ctx.fillStyle = 'brown';
    // this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  move() {
    if (this.direction) {
      if (this.height > 0 && this.width > 0) {
        this.height -= 0.5;
        this.width -= 0.5;
        this.y -= 1;
      }
    } else {
      this.x -= 3;
    }
  }
}
