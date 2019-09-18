function setup() {
  createCanvas(400, 400);
}

var ballX = 30;
var ballSpeed = 100;

var ballX2 = 370;
var ballSpeed2 = 300;

function draw() {
  background(220);

  fill(255, 0, 0);
  ellipse(ballX, 100, 30);
  
  fill(0, 0, 255);
  ellipse(ballX2, 200, 30);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  if (ballX >= 400) {
    ballSpeed = -100;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -30;
  }

  if (ballX <= 0) {
    ballSpeed = 100;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 30;
  }

}
