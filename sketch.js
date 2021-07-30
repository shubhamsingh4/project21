
var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);

thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200, 200, thickness, 100);

 speed = random(55,90);
 weight = random(400,1500);
 
bullet.velocityX = speed;

}

function draw() {
  background("black");
  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500

  if (deformation>180) {
    bullet.shapeColor = (255,0,0)
  }

  if (deformation < 180 && deformation > 100) {
    bullet.shapeColor = (230,230,0);
  }

  if (deformation<100) {
    bullet.shapeColor = (0,225,0);
  }  
}
  
if(hasCollided(bullet,wall)){

bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness );

if(damage>10){
wall.shapeColor = color(225,0,0);
}

if(damage<10){
  wall.shapeColor = color(0,225,0);
  }

}
  drawSprites();
}

function hasCollided(Lbullet,Lwall){

  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
return false;

}