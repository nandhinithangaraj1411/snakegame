class Apple{
  constructor(x,y,width,height){
  this.x=x;
  this.y=y;
  this.width=20;
  this.height=20;
  }

  display()
  { 
    fill("red")
    ellipse(this.x,this.y,20,20)
  }
}