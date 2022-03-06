//Inherits from "JObject.js"

class Creature extends JObject {
  constructor(){
    super()
    //vectors
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.target = createVector(0,0);
    this.dir = createVector(0,0);
    //floats
    this.maxSpeed = 0.5;
    this.maxForce = 0.2;
    this.scale = 1;
    this.radius = 0.2;

   

  }

//Birth

  setup(_xPosInit,_yPosInit){
    this.setPosition(createVector(_xPosInit,_yPosInit));
  }

// Life

  update(){
    
    
    this.updateDirection();
    this.applyForce(this.dir);
    this.move();
    this.checkBorders(0,0,windowWidth,windowHeight);
    this.visualize(60,50,35);
  }


  //Functions


  updateDirection(){
    this.dir = this.target.sub(this.pos);
    this.dir.normalize(); 
  }
  
  computeTarget(_ObjectivesList){
    for( let i = 0; i< _ObjectivesList.length; i++){
        if (_ObjectivesList[i].getIsTarget() == 1) {
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
  setTarget(_xT,_yT){
    this.target = createVector(_xT,_yT);
  }


  applyForce(_forceVector){
    this.acc.add(_forceVector.mult(deltaTime/50));
   // this.acc.mult());


  }
    
  move(){
    this.acc.mult(this.maxForce);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }
  
  visualize(){

    push();


    translate(this.pos.x,this.pos.y);
    rotate(this.vel.heading());
    scale(this.scale);
    triangle(-15,-15,-15,15,0,0);
    circle(0,0,this.radius);
    pop();
  }

  aimTarget(){
      push();
      angleMode(DEGREES);
      stroke(250-dist(this.pos.x,this.pos.y,this.target.x,this.target.y));
      strokeWeight(1);
      line(this.pos.x,this.pos.y,this.target.x,this.target.y);
       for(let i = 0; i<5;i++){
    stroke(map(i,0,5,255,0));

      arc(this.target.x,this.target.y,5+5*i,5+5*i,frameCount*i*dist(this.pos.x,this.pos.y,this.target.x,this.target.y)*0.005%-360,map(sin(frameCount*0.2%180),-1,1,-50,50)*i*5+5);
      }
      pop();

  }

  connectCreatures(_creatures) {
      _creatures.forEach(element =>{
      let dis = dist(this.pos.x,this.pos.y,element.x,element.y);
      if(dis<35) {
      push();
      angleMode(DEGREES);
      stroke(25,25,25);
      strokeWeight(1);
      line(this.pos.x,this.pos.y,element.x,element.y);
      for(let i = 0; i<5;i++){
      arc(element.x,element.y,5+5*i,5+5*i,random(180),random(180,360));
      }
      pop();
      }
      });
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