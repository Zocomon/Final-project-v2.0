class Asteroid{
constructor(){

}
spawn(){
    if(frameCount%60 === 0){
        this.asteroid = createSprite(random(0,windowWidth),20)
this.asteroid.velocityY=4;
    if(this.asteroid.x>windowWidth/2){
        this.asteroid.velocityX = random(-1,-5)
    }
    else if(this.asteroid.x<windowWidth/2){
        this.asteroid.velocityX= random(1,5)
    }
    else {this.asteroid.velocityX=0;}
    
    this.asteroid.lifetime=300;
    asteroidGroup.add(this.asteroid)
}
}













}