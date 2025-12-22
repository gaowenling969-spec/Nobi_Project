var sandy = 0;
var donald = 450;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(173, mouseY, 230);

  stroke(255, 255, 127);
  fill(255, 255, 127, 150);
  ellipse(mouseX, 250, sandy + 60, mouseY);

  stroke(189, 109, 183);
  strokeWeight(5);
  rect(50, 50, sandy, sandy);

  line(50, donald, 450, sandy);

  fill(109, 189, 113, 225);
  ellipse(250, 250, 50, 50);

  fill(247, 209, 54);
  textFont("Impact");
  textSize(75);
  text("Partytime!!!!", 100, 250);

  fill(54, mouseX, 247);
  strokeWeight(0);
  ellipse(mouseX, mouseY, 50, mouseY);
}

function mousePressed() {
  if (sandy >= 255) {
    sandy = 0;
  } else {
    sandy = sandy + 5;
  }

  if (donald <= 0) {
    donald = 450;
  } else {
    donald = donald - 5;
  }
}
