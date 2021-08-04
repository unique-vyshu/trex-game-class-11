
var trex ,trex_running;
var ground;
var ground_image;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(50,150,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale =0.5;

ground = createSprite(200,180,400,20);
ground.velocityX = -5;
ground.addImage(ground_image);
  
 
}

function draw(){
  background("white")
 if(keyDown("space")){
   trex.velocityY =-4;
 }

 trex.velocityY=trex.velocityY+0.8;

 trex.collide(ground);

 if(ground.x<0){
   ground.x = ground.width/2;
 }





  drawSprites();
  

}
