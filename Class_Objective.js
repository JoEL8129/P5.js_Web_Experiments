class Objective {
  constructor( _isAlive){
    this.pos = createVector(0,0);
    this.isAlive = _isAlive;
    }
  init(_xPos,_yPos){
    this.setPosition(_xPos,_yPos);
    this.visualize();
    }

  update(_xPos,_yPos){
    if(this.isAlive > 0){
      this.setPosition(_xPos,_yPos);
    }
    this.visualize(); 
    }

// Setter Functions
  setPosition(_xPos,_yPos){
    this.pos = createVector(_xPos,_yPos);
    }

// Getter Functions
  getPosition(){
    return this.pos;
    }
  getPositionX(){
    return this.pos.x;
    }
  getPositionY(){
    return this.pos.y;
    }


// visual

  visualize(){
    rect(this.pos.x,this.pos.y,40,40);
    }
  }