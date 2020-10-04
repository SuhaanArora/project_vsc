function is_touching (object1,object2){
  if (wall.x-car.x < (car.width+wall.width)/2
  && car.x-wall.x< (car.width+wall.width)/2 
  && wall.y-car.y < (car.height+wall.height)/2
  && car.y-wall.y< (car.height+wall.height)/2){
  return true  
  
 } 
 else {

return false 
 } 

}