class Object {
	constructor(){
		this.x = 0;
		this.y = 0;
		this.ID= 0; 
	}

	setPosition(_x,_y){
		this.x = _x;
		this.y = _y;

	}

	setID(_newID){
		this.ID = _newID;
	}

	getID(){
		return this.ID;
	}


}