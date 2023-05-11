var sea ;
var ship, shipsailing ;
var seaImg;
function preload(){
  shipsailing = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  seaImg = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  sea.scale=0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movie",shipsailing);
  ship.scale=0.25;


}

function draw() {
  background("blue");
    drawSprites();
    if (sea.x<0){
      sea.x=sea.width/8
    }
  sea.velocityX=-3;
 
}
