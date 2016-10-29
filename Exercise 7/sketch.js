var rawbacon;
var x = 80;
var y = 80;
var a = 800;
var b = 800;

function preload() {
 rawbacon = loadImage("photo/Raw Bacon.png");
 fryingpan = loadImage("photo/Frying Pan.png")
 fridge = loadImage("photo/Fridge.png")
}

function setup() {
 createCanvas(1000, 1000);
}

function draw() {
 background(255);
 image(fridge, 0, 0);
 //scale(0.04);

 push();
 image(fryingpan, a - (fryingpan.width / 2), b - (fryingpan.height / 2));
 pop();

 image(rawbacon, x - (rawbacon.width / 2), y - (rawbacon.height / 2));

 if (mouseIsPressed) {
  x = mouseX;
  y = mouseY;
 }
 if (y >= 500 && y <= 1000) {
  if (x <= 1000 && x >= 700) {
   b += 10;
   y += 10;
   if (b>= 1000 && y >= 1000) {
    b = 700;
    y = 700;
   }
  }
 }
}



