function setup() {
  createCanvas(400, 400);
}

var ballX = 30;
var ballSpeed = 3;
var a=3

var ballX2 = 370;
var ballSpeed2 = 5;
var b=3

function draw() {
  background(220);
 
  fill(255, 0, 0);
  ellipse(ballX, 100,a);
     fill(0, 0, 255);
  ellipse(ballX2, 200, b);
 
  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  a= a+0.5
  
  
  if (ballX >= 400) {
   a=100
    ballSpeed = -3;
  }

  if (ballX2 >= 400) { 
      b=10
    ballSpeed2 = -5;
  }

  
  
  if (ballX <= 0) {
    a=10
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
   b=b-100
    ballSpeed2 = 5;
  }

}
