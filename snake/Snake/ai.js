function ai() {

  this.move = function(s, f) {
    this.snakeX = s.x;
    this.snakeY = s.y;
    this.foodX = f.x;
    this.foodY = f.y;

    this.x = this.snakeX - this.foodX;
    this.y = this.snakeY - this.foodY;
    //console.log(this.x);

    if (this.x == 0) {
      //console.log("es 0");
      s.dir(0, 1);
    }
    if (this.y == 0) {
      s.dir(1, 0);
    }
  }
}