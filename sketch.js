var car,wall;
var speed, weight;



function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700, 200, 50, height/2);
  wall.shapeColor = 'brown'
  speed = (55,90);
  weight = random(400,1500)
  car.velocityX = speed;
}

function draw() {
  background('lightblue');  


  if (wall.x-car.x < (wall.width+car.width)/2){

car. velocityX =0;
var deformation =0.5*weight*speed*speed/22500
if(deformation <100)
{
  car.shapeColor= 'green';

}
if(deformation <180 && deformation >100 )
{
  car.shapeColor= 'yellow';

}

if(deformation >180)
{
  car.shapeColor= 'red';

}


  }
  drawSprites();
}