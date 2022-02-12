class Objective extends JObject{
  constructor(){
   super()   
    this.isTarget= 0;
    }

    setIsTarget(_BoolValue){
      this.isTarget = _BoolValue;
    }

    getIsTarget(){
      return this.isTarget;
    }

    visualize(){
    rect(this.pos.x,this.pos.y,40,40);
    }

    update(_position){
      this.pos = _position;
    }

  }