function snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = []

	colorMode(HSB, 360);
	this.h = 0;
	this.s = 0;
	this.v = 360;
	this.colores = [];
	this.sat = [];
	this.c = 0;
	
	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.total++;
			
			this.h = this.h + 10;
			this.colores[this.total] = this.h;
			this.s = this.s + 50;
			this.sat[this.total] = this.s;
			
			return true;
		} else {
			return false;
		}
	}

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.death = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				this.total = 0;
				this.tail = [];
				
				this.colores = [];
				this.h = 0;
				this.sat = [];
				this.s =0;
				
			}
		}
	}

	this.update = function() {
		if (this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length - 1; i++) {
				this.tail[i] = this.tail[i + 1];
			}
		}
		this.tail[this.total - 1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;
  
    if(this.x < 0){
      this.x = width - scl;
    }
    if(this.x > width - scl){
      this.x = 0;
    }
    if(this.y < 0){
      this.y = height - scl;
    }
    if(this.y > height - scl){
      this.y = 0;
    }
		//this.x = constrain(this.x, 0, width - scl);
		//this.y = constrain(this.y, 0, height - scl);
	}

	this.show = function() {
		for (var i = 0; i < this.tail.length; i++) {
			colorMode(HSB, 360);
			this.c = color(this.colores[this.total - i] % 360, this.sat[this.total - i], this.v);
			fill(this.c)
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		
		colorMode(HSB, 360);
		this.c = color(0, 0, this.v);
		fill(this.c);
		rect(this.x, this.y, scl, scl);
	}

}