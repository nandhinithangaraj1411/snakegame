var snake;
//var food=[]
var scl=20;
var food;
var score=0;
function setup() {
  createCanvas(400, 400);
  snake=new Snake();
  frameRate(5);
  pickLocation();
 
}
function pickLocation(){
  var cols=floor(width/scl);
  var rows=floor(height/scl)
  food=createVector(floor(random(cols)),floor(random(rows)))
  food.mult(scl)
}

function draw() {
background("orange");
 fill("purple")
 rect(food.x,food.y,scl,scl)
 textSize(22) 
 text(score,20,20)
 if(score>=3){
   text("!GREAT JOB!",100,20)
 }
snake.display();
snake.update();
  snake.gone();
if(snake.eat(food)){
   pickLocation();
}
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  }
}
  

