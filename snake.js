class Snake{
  constructor()
  { 
  this.x=0;
  this.y=0;
  this.xspeed=1;
  this.yspeed=0;
  this.total=0;
  this.body=[]
}
  gone() {
    for (let i = 0; i < this.body.length; i++) {
      let pos = this.body[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      
      if (d < 1) {
        console.log('oops');
        this.total = 0;
        this.body = [];
        score=score-1
        snake.x=200;
        snake.y=200;
        
      }
    }
  }
  eat(pos){
    var d=dist(this.x,this.y,pos.x,pos.y)
    if (d<1){
      this.total++
      score=score+1
      return true;
      }
    else{
      return false;
    }
  }
  
  setDir(x, y) {
  	this.xspeed = x;
    this.yspeed = y;
  }  
update(){
    for (let i = 0; i < this.body.length - 1; i++) {
      this.body[i] = this.body[i + 1];
    }
    if (this.total >= 1) {
      this.body[this.total - 1] = createVector(this.x, this.y);
    }
      
  this.x=this.x+this.xspeed*scl;
  this.y=this.y+this.yspeed*scl;
  this.x = constrain(this.x, 0, width - scl);
  this.y = constrain(this.y, 0, height - scl);
}
display()
  { 
    for (var i = 0;i<this.body.length;i++){
       fill("white");

      rect(this.body[i].x, this.body[i].y, scl, scl);
    
    }
  fill("green")
    rect(this.x,this.y,scl,scl)
  }
  
}