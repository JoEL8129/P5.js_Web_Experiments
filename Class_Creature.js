

class Creature {
  constructor(_xPosInit,_yPosInit){
    this.pos = createVector(_xPosInit,_yPosInit);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.target = createVector(0,0);
    this.dir = createVector(0,0);

    this.maxSpeed = 0.5;
    this.maxForce = 0.2;

  }

// Life
  update(_AllObjectives){
    
    this.computeTarget(_AllObjectives);
    this.updateDirection();
    this.applyForce(this.dir);
    this.move();
    this.checkBorders(0,0,windowWidth,windowHeight);
    this.visualize(60,50,35);
  }
  updateDirection(){
    this.dir = this.target.sub(this.pos);
  //  this.dir.normalize(); 
  }
  
  computeTarget(_ObjectivesList){
    for( let i = 0; i< _ObjectivesList.length; i++){
        if (_ObjectivesList[i].getIsTarget() == true) {
          this.target = _ObjectivesList[i].getPosition();
        }
      }
  }
//  seek(_target){
//    _target.sub(this.pos);
//    _target.setMag(0.5);
//    _target.sub(this.vel);
//    _target.limit(0.5);
//    return _target; 
//  }

  applyForce(_forceVector){
    this.acc.add(_forceVector);
  }
    
  move(){
    this.acc.mult(this.maxForce);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }
  
  visualize(r1,r2,r3){

    push();

    //circle(this.pos.x,this.pos.y,r2);
    //circle(this.pos.x,this.pos.y,r3);
    translate(this.pos.x,this.pos.y);
    rotate(this.vel.heading());
    scale(0.2);
    triangle(50,-50,50,50,100,0);
    circle(0,0,r1);

    pop();
  }
  checkBorders(borderX0,borderY0,borderX1,borderY1){
    if ((this.pos.x > borderX1)||(this.pos.x < borderX0)) {
      this.vel.x = this.vel.x * -1;
    }
    if ((this.pos.y > borderY1) || (this.pos.y < borderY0)) {
      this.vel.y = this.vel.y * -1;
    }    
  }
  
  
  
 
  
}