
function setup() {
  createCanvas(400, 400);
}

var ballX = 30;
var ballSpeed = 10;

var ballX2 = 370;
var ballSpeed2 = 30;

function draw() {
  background(220);


  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  if (ballX >= 400) {
    ballSpeed = -1;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -3;
  }
  
 
  
  if (ballX <= 0) {
    
    ballSpeed = 10;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 3;
  }
  
 if(ballSpeed>=0){
    fill(255, 0, 0);
    ellipse(ballX, 100, 30);
  }
  
  if(ballSpeed<=0){
    fill(0, 0, 255);
  rect(ballX,85,30,30)
  }
  
  if(ballSpeed2>=0){
    fill(255, 0, 0);
   ellipse(ballX2, 200, 30);
  }
  
  if(ballSpeed2<=0){
    fill(0, 0, 255);
  rect(ballX2,185,30,30)
  }
}
