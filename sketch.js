var wall,thickness;
var bullet,speed,weight;
function setup(){
  createCanvas(1600,400);
  bullet=createSprite(100,200,10,10);
  bullet.shapeColor="green";
  var thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";
  var speed=random(223,321);
  var weight=random(30,52);
  bullet.velocityX=speed;
}

function draw(){
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   bullet.velocityX=0;
   if(damage>10) {
    wall.shapeColor="green";
    
    }
    
    if(damage<10){
      wall.shapeColor="red";
    
    }
    
  }
  drawSprites();
}
