class Cow {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1500;
    this.y = 650;
    this.width = 150;
    this.height = 80;
    this.direction = false;
    this.img = new Image();
  }

  draw() {
    this.img.src = './images/cow1.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.direction) {
      if (this.height > 0 && this.width > 0) {
        this.height -= 5;
        this.width -= 8;
        this.y -= 2;
      }
    } else {
      this.x -= 2;
    }
  }
}

// var a = new Audio()
// a.src()
// a.play()
