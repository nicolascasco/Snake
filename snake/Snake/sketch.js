var s;
var scl = 20;
var direction = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);

	//ai = new ai();

	s = new snake();
	frameRate(10);
	pickLocation();
}

function pickLocation() {
	var cols = floor(width / scl);
	var rows = floor(height / scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);

	s.death();
	s.update();
	s.show();
	if (s.eat(food)) {
		pickLocation();
	}

	colorMode(HSB, 360);
	fill(360, 360, 360);
	rect(food.x, food.y, scl, scl);

	//ai.move(s,food);
}

function keyPressed() {
	if (keyCode === UP_ARROW && direction != 2) {
		direction = 3;
		s.dir(0, -1);
	}
	if (keyCode === DOWN_ARROW && direction != 3) {
		direction = 2;
		s.dir(0, 1);
	}
	if (keyCode === RIGHT_ARROW && direction !== 0) {
		direction = 1;
		s.dir(1, 0);
	}
	if (keyCode === LEFT_ARROW && direction != 1) {
		direction = 0;
		s.dir(-1, 0);
	}
}