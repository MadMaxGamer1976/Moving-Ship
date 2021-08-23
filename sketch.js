var shipMovement;
var ship;
var seaImage;
var sea;

function preload(){
seaImage = loadImage("sea.png");
shipMovement = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale = 0.5;
  sea.velocityX = -3;

  ship = createSprite(130,200,50,10);
  ship.addAnimation("movingShip",shipMovement);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
 if (sea.x < 0){
   sea.x = sea.width/4;
  }
  drawSprites();
}