function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameOb1 = createSprite(100,300,80,50);
  gameOb1.shapeColor = "green";
  gameOb1.debug = true;
  gameOb2 = createSprite(300,100,80,50);
  gameOb2.shapeColor = "green";
  gameOb2.debug = true;

}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(isTouching(gameOb1,movingRect)){
    
    gameOb1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameOb1.shapeColor = "green";
  }

  if(isTouching(gameOb2,movingRect)){
    gameOb2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameOb2.shapeColor = "green";
  }

 
  drawSprites();
}

function isTouching(ob1,ob2){
  if (ob2.x - ob1.x < ob1.width/2 + ob2.width/2
    && ob1.x - ob2.x < ob1.width/2 + ob2.width/2
    && ob2.y - ob1.y < ob1.height/2 + ob2.height/2
    && ob1.y - ob2.y < ob1.height/2 + ob2.height/2) {
     return true;
  }
  else {
    return false;
  }
}