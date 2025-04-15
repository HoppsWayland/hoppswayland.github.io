let outerRing, middleRing, innerDisk;
let rotation = [90, 900, 250];  // out mid in
function preload(){
  outerRing = loadImage("/assets/outerring.png");
  middleRing = loadImage("assets/middlering.png");
  innerDisk = loadImage("assets/innercircle.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  // background(220);
  innerDisk.resize(320, 320);
  middleRing.resize(415, 415);
  outerRing.resize(650, 650);

  let centerPoint = createVector(350, 350, 0);
  translate(350, 350);
  rotate(rotation[0]);
  image(outerRing, 0, 0);
  rotate(-rotation[0]);
  rotate(rotation[1]);
  image(middleRing, 0, 0);
  rotate(-rotation[1]);
  rotate(rotation[2]);
  image(innerDisk, 0, 0);
  rotate(-rotation[2]);
  translate(-350, -350);


  if(keyIsDown(81)){
    rotation[0]--;
  }
  if(keyIsDown(87)){
    rotation[0]++;
  }

  if(keyIsDown(65)){
    rotation[1]--;
  }
  if(keyIsDown(83)){
    rotation[1]++;
  }

  if(keyIsDown(90)){
    rotation[2]--;
  }
  if(keyIsDown(88)){
    rotation[2]++;
  }
}

