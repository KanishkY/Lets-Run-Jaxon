var boy, ground, boundary1, boundary2;
var ground_image, boy_running, boy_colliding, Runner1png, Runner2png;

function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  ground_image = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here 

  ground = createSprite(200,200,100,400);
  ground.addImage("path",ground_image);
  ground.velocityY=10;
  
  boy = createSprite(200,330,10,10);
  boy.addAnimation("running",boy_running);
  boy.scale=0.1;

  boundary1 = createSprite(60,200,20,400);
  boundary1.visible=false;

  boundary2 = createSprite(340,200,20,400);
  boundary2.visible=false;
}

function draw() {
  background(0);

  if(ground.y > 400){
    ground.y = height/2;
  }
  
  boy.x=World.mouseX;

  boy.collide(boundary1);
  boy.collide(boundary2);
  createEdgeSprites();
  drawSprites();
}
