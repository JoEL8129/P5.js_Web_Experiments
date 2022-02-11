// Class for low computational interactive Objects
class JObject {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.ID= 0; 
  }

  setPosition(_x,_y){
    this.x = _x;
    this.y = _y;

  }

  getPosition(){
    return createVector(this.x,this.y);;
  }

  setID(_newID){
    this.ID = _newID;
  }

  getID(){
    return this.ID;
  }

  getPositionX(){
    return this.x;
    }
  getPositionY(){
    return this.y;
    }

}

class Objective extends JObject{
  constructor(_isDynamic){
   super()
    
    this.isDynamic = _isDynamic;
    this.isTarget= 0;
    }


  update(_xPos,_yPos){
    if(this.isDynamic > 0){
      this.setPosition(_xPos,_yPos);
    }
    }

    setIsTarget(_BoolValue){
      this.isTarget = _BoolValue;
    }

    getIsTarget(){
      return this.isTarget;
    }

// visual

    visualize(){
    rect(this.x,this.y,40,40);
    }
  }