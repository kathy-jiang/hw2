function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);

}

function draw() {
  background(180);
   noStroke();
   
  //pink rectangle
  fill(255,192,203)
  rect(40, 40,300,300)
  rect(370,200,50,140)
  
  //blue rectangle
  fill(0,150,255)
  rect(0,340,40,80)
  rect(40,0,300,40)
  
  //yellow rectangle
  fill(255,255,0)
  rect(370,340,30,60)
  rect(0,100,40,240)
  
  //orange rectangle
  fill(255,190,100)
  rect(0,0,40,40)
  rect(340,340,30,60)
  
  //white rectangle
  fill(255,255,255)
  rect(340,40,30,300)
  rect(370,0,30,40)
  rect(40,340,300,60)
  
  
  
  //lines
  stroke(0);
  strokeWeight(10)
  line(40,0,40,400)//left line
  line(0,340,400,340)//middle horizontal line
  line(340,340,340,400)//right line
  line(370,0,370,400)
  line(340,0,340,400)
  line(0,40,400,40)
  
  strokeWeight(15)
  line(370,200,400,200)
  
  strokeWeight(10)
  line(0,100,40,100)
  
}
