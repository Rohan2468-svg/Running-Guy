var runner, runnerRunning, path, pathImage;



function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runnerRunning = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
    createCanvas(400,400);

    //creating path
    path = createSprite(200,200);
    path.addImage(pathImage);
    path.velocityY= 4;
    path.scale= 1.2;

  

    invisibleRight= createSprite(372,200,20,400);
    invisibleLeft= createSprite(34,200,20,400);
    
    invisibleLeft.visible=false;
    invisibleRight.visible=false;
  
    //creating runner
    runner= createSprite(200,200);
    runner.addAnimation("running", runnerRunning);
  
    //adding scale and the position
    runner.scale= 0.07;
    runner.velocityY = runner.velocityY + 0.30; 
      

    edges = createEdgeSprites();
}



function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

  runner.x=World.mouseX;

  runner.collide(invisibleLeft);
  runner.collide(invisibleRight);

  drawSprites();
}
