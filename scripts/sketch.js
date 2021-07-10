var canvas;
let boxy = []; // array of Jitter objects

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.position('relative');
  canvas.style('z-index','-1');
  
  // loop for new boxes
  for (let i = 0; i < 30; i++) {
    boxy.push(new Movement());
  }
}
function draw() {
  background('#003C8A');
  for (let i = 0; i < boxy.length; i++) {
    boxy[i].move();
    boxy[i].display();
    boxy[i].collision();
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
// Jitter class
class Movement {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(100);
    this.speed = .5;
  }

  move() {
    this.x += 1;
    this.y += 0;
  }

  display() {
    rect(this.x, this.y, this.size, this.size);
    fill('#ABD406');
  }
  collision() {
    if (this.x > width){
        this.x = 0;
      }
    }
}

