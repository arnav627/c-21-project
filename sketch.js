var bullet,wall,thickness;
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed; 
  bullet.shapeColor="white"
  wall=createSprite(1100,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  wall.shapeColor="white";
  thickness=random(22,83);
  speed=random(233,321);
  weight=random(30,52);
  
  
}

function draw() {
  background(0);  
  if(hascollided(bullet,wall)){
var damage=0.5 * weight * speed * speed/(thickness,thickness,thickness);
  
 
 if(damage>10){

  wall.shapeColor=color(255,0,0);
}
if(damage<10){
wall.shapeColor=color(0,255,0);
}
  }
  bullet.collide(wall);
  drawSprites();

}

function hascollided(lbullet,lwall){

  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}