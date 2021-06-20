var canvas, backgroundImage
var form
var distance = 0;
var gameState = "start" ;
var spaceBackground 
var spaceBackgroundImage
var spaceship
var asteroid
var lives = 4;
var score = 0;
var lazer = null;

function preload(){
  spaceBackgroundImage = loadAnimation("images/background1.png","images/background1.png","images/background2.png","images/background2.png",
  "images/background3.png","images/background3.png","images/background4.png","images/background4.png")
  healthbar0image = loadImage("images/0healthBar.png")
  healthbar1image = loadImage("images/1healthBar.png")
  healthbar2image = loadImage("images/2healthBars.png")
  healthbar3image = loadImage("images/3healthBars.png")
spaceshipImage = loadImage("images/spaceship.png")




}

function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
asteroidGroup = new Group()
   form = new Form();
 spaceBackground = createSprite(windowWidth/2,windowHeight/2);
 spaceBackground.addAnimation("background1image",spaceBackgroundImage);
 spaceBackground.visible=false;
 spaceBackground.scale=1.5;

 spaceship=createSprite(windowWidth/2,windowHeight-150);
 spaceship.addImage(spaceshipImage)
 spaceship.visible=false;
 spaceship.scale=0.5;

 healthbar =  createSprite(windowWidth-120,150);
 healthbar.addImage(healthbar3image);
 healthbar.visible=false;

}

 
 function draw(){
  if(gameState === "start"){
    if(mousePressedOver(form.play)){
      gameState="play"
      console.log("gameState changed to play")
    }
  }

  



if(gameState=== "play"){
  form.title.visibble=false;
  form.play.visible=false;
  spaceBackground.visible=true;
  spaceship.visible=true;
  healthbar.visible=true;


if(keyDown("right")){
 spaceship.x=spaceship.x+8;
}
if(keyDown("left")){
  spaceship.x= spaceship.x-8;
}
asteroid=new Asteroid()
asteroid.spawn();
if(lazer){
originX=lerp(originX,targetx,0.2)
originY=lerp(originY,targety,0.2)
lazer.x = originX;
lazer.y = originY;
if(lazer.isTouching(asteroidGroup)){
  console.log("asteroidsnapped")
  asteroidGroup.destroyEach()
  
score++
}
}
if(spaceship.isTouching(asteroidGroup)){
  gameState="lostlife"
  console.log("collision")
}
document.addEventListener("click",fire,true)
}
if(gameState === "lostlife"){
  asteroidGroup.destroyEach()
  lives=lives-1;
  switch(lives){
    case 2 : healthbar.addImage(healthbar2image);
    gameState = "play"
    break ;
    case 1: healthbar.addImage(healthbar1image);
    gameState="play"
    break;
    case 0 : healthbar.addImage(healthbar0image);
    gameState="end"
    break;
  }
  }
   if(gameState === "end"){
  background("black")
   }

else{
  drawSprites();
}
textSize(30)
fill("red")
text("score:" + score,windowWidth-120,75);

}
function fire(e){
  console.log(e)
  targetx = e.pageX ;
targety = e.pageY ;
lazer = createSprite(spaceship.x,spaceship.y);
lazer.lifetime=25;
lazer.shapeColor = "red";
originX=spaceship.x;
originY=spaceship.y;

}



 
