var car, wall;
var weight,speed;
function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 20, 20);
  car.shapeColor = "blue"

  wall = createSprite(750,200,60,height/2)
  wall.shapeColor = "white"


  weight = Math.round(random (400,15000))
  speed = Math.round(random (55,90))
  
}

function draw() {
 

  background("black");
  
Fill = "white"

  car.velocityX = speed /5;

if(is_touching(car,wall)){
 car.velocityX = 0
var deformation = 0.5 * weight * speed * speed/22500;
  if (deformation>180){
    car.shapeColor = "red"
  }
  if (deformation<180 && deformation > 100){
    car.shapeColor = "yellow"
  }
  if (deformation<100){
    car.shapeColor = "green"

  }

}
textSize (15)
  text ("deformation is  " + deformation,300,300)

 
  drawSprites();
}


