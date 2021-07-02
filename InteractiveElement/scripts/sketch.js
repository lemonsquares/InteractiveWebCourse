
// preload img and font
function preload(){

}


function setup(){

createCanvas(windowWidth, 400);

}
function draw(){
background(0); // white grey bg


  // xm is just the mouseX, while
  // xc is the mouseX, but constrained
  // between the leftWall and rightWall!
  let sideWalls = constrain(mouseX, 0, width);
  let topWalls = constrain(mouseY, 0, height);
  
  // Draw the walls.
  strokeWeight(4);
  //stroke(255,0,0);
  //fill(0);
  //rect(0,0,windowWidth,height);
 

  //line(0, 0, 0, height);
  //line(0, 0, width, 0);

 stroke(255,255,0);
  //line(0, 0, 0, height);
  
  //top line
  line(0, 0, 0, height-1);
  //left line
	line(0, 0, width-1, 0);
	// right line
  line(width-1, 0, width, height-1);
  // Draw xm and xc as circles.
 // noStroke();
  stroke(255, 153, 0);
  rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
  //circle(50,50,20);
 
}
function windowResized() {
  resizeCanvas(windowWidth, height);
}