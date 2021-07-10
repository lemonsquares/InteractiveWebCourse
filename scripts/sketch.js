var canvas;
let boxes = []; // array of Jitter objects
var randomColour;
function setup() {
  
  // canvas set up
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.position('relative');
  canvas.style('z-index','-1');
  
  // loop for new boxes
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(10,60);
    let b = new Box(x, y, w);
    boxes.push(b);
  }

}
//If mousePressed, run clicked()
function mousePressed(){
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].clicked(mouseX, mouseY);
  }
}
function draw() {
  background('#003C8A');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].move();
    boxes[i].display();
    boxes[i].collision();
  }
  randomColour = color(random(255),random(255),random(255));
}
// Movement class
class Box {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.speed = 0.5;
    this.colour = 255;
    
  }

  clicked(px,py){
    let d = dist(px, py, this.x, this.y);
    if (d < this.w){
      this.colour = randomColour;
    }
  }
  move() {
    this.x = this.x + 1;
    this.y = this.y * 1;
  }

  display() {
    rect(this.x, this.y, this.w);
    stroke(0);
    fill(this.colour,255);
  }
  collision() {
    if (this.x > width){
        this.x = 0;
      }
    }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}