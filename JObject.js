//JObject is the base class for an Object that can be placed or spawned in a level.

class JObject {
  constructor(){
  	this.pos = createVector(0,0);
    this.ID= 0; 
  }
//Setter Functions
  setPosition(_position){
    this.pos = _position;
  }

  setID(_newID){
    this.ID = _newID;
  }
//Getter Functions
  getPosition(){
    return this.pos;
  }

  getID(){
    return this.ID;
  }

}

