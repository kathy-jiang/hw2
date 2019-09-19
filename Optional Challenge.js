var x1 = 300;
var y1 = 200;


var x2 = 250;
var y2 = 300;

var y3 = 50
var x3 = 100

var speedX = 5;
var speedY = 5;

var speedX2 = 2;
var speedY2 = 2;

var speedX3 = 3;
var speedY3 = 3;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  ellipse(x1, y1, 30, 30);
  ellipse(x2, y2, 50, 50);
  ellipse(x3, y3, 80, 80);

  if (x1 > width - 10 || x1 < 10) {
    speedX =speedX* -1;
   
  } else if (y1 > height - 10 || y1 < 10) {
    speedY= speedY* -1;
 
  }

  if (x2 > width - 10 || x2 < 10) {
    speedX2=speedX2 *-1;
 
  } else if (y2 > height - 10 || y2 < 10) {
    speedY2=speedY2 * -1;
 
  }
  
    if (x3 > width - 10 || x3 < 10) {
    speedX3= speedX3 * -1;
 
  } else if (y3 > height - 10 || y3 < 10) {
    speedY3=speedY3 * -1;
 
  }

  x1=x1 + speedX;
  y1=y1 + speedY;

  x2=x2 + speedX2;
  y2=y2 + speedY2;
  
  x3=x3 + speedX3;
  y3=y3 + speedY3;

}
