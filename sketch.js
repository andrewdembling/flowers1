var flower1;
var flower2;
var flower3;

function setup() {
  createCanvas(800, 600);
  flower1 = new Flower(200, 50, 10, 9, 50);
  flower2 = new Flower(400, 550, 10, .05, 9);
  flower3 = new Flower(600, 550, 100, .05, 9);

}

function draw() {
  background(0,0,255)
  flower1.renderflower();
  flower1.rotateFlower(.01);
  flower1.followMouse();
  flower1.petalSize();

  flower2.renderflower();
  flower2.rotateFlower(.05);
  flower2.followMouse();
  flower2.petalSize();
  
  flower3.renderflower();
  flower3.rotateFlower(0.1);
  flower3.followMouse();
  flower3.petalSize();
}

// constructor, its like template for our flowers

function Flower(x, y, petals, rotation, petalsize) {
  this.x = x;
  this.y = y;
  this.petals = petals;
  this.rotation = rotation;
  this.petalsize = petalsize;
  var stemheight;

  this.renderflower = function() {
    stemheight= constrain(mouseY, 100, 500);
    fill(0,255,0);
    triangle(this.x-50, height, this.x+50, height, this.x, stemheight);
  }
  
  this.followMouse = function() {
  this.y= constrain(mouseY, 100, 500);
  }
  
  this.rotateFlower = function(rot) {
    push();
    translate(this.x, this.y);
    fill(255, 0, 0);
    for(var i=0; i<=this.petals; i++){
      rect(0, 0, this.petalsize, this.petalsize);
      rotate(this.rotation);
    }
    pop();
    this.rotation = this.rotation + rot
  }
  
 this.petalSize = function(){
    this.petalsize= map(mouseY, 0, 500, 200, 50);
    fill(255,255,0);
    ellipse(this.x, stemheight, this.petalsize);
    //this.petalsize = height-mouseY;
  }

}