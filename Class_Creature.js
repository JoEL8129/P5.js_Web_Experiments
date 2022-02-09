class Creature {
  constructor(_xPosInit,_yPosInit){
    this.pos = createVector(_xPosInit,_yPosInit);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.target = createVector(0,0);
    this.dir = createVector(0,0);
    this.gravity = createVector(0,1);
    
    
  }

// Birth
  init(_dna){

  }
  
// Life
  update(_TargetVector,_TurningRate,_maxSpeed,_dirOffset){
    this.visualize(60,50,35);
    this.updateDirection(_TargetVector,_dirOffset);
    this.applyForce(this.dir);
    this.move(_maxSpeed,_TurningRate);
    this.checkBorders(0,0,windowWidth,windowHeight);
  }
  updateDirection(_targetVector,_dirOffset){
    this.dir = _targetVector.sub(this.pos);
    this.dir.add(_dirOffset);
    this.dir.normalize();
  }
  
  // getter 
  getDistance(_Target){
   return this.pos.dist(_Target);
  }
  
  applyForce(_forceVector){
    this.acc.add(_forceVector);
    
  }
    
  move(_maxSpeed,_turningRate){
    this.acc.mult(_turningRate);
    this.vel.add(this.acc);
    this.vel.limit(_maxSpeed);
    this.pos.add(this.vel);
  }
  
  visualize(r1,r2,r3){
    circle(this.pos.x,this.pos.y,r1);
    circle(this.pos.x,this.pos.y,r2);
    circle(this.pos.x,this.pos.y,r3);

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