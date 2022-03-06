class Particle extends Objective {
	constructor(){
    super()

	

    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.noiseScale = 0.03; 
    this.noiseMult = 1; 
    
}

	update(_allParticles){
		point(this.pos.x,this.pos.y);
		this.computeForces();
		this.move();
		
	} // Update End 

	setNoiseMult(_Mult){
		this.noiseMult = _Mult;
	}

	getNoiseMult(){
		return this.noiseMult;
	}

	computeNoiseForce(){
		angleMode(RADIANS);
		let n = noise(this.pos.x*this.noiseScale,this.pos.y*this.noiseScale);
		let a = TAU * n * 1;
		this.pos = createVector(this.pos.x + cos(a)* this.noiseMult,this.pos.y + sin(a)* this.noiseMult);
		//this.pos.add(cos(a),sin(a));
		//let noiseForce = createVector(float(cos(a)),float(sin(a)));
		//return noiseForce;
	}

	

	computeForces(){
		this.computeNoiseForce(); // adds directly on this.pos
		//this.applyForce(this.computeNoiseForce());
	}

	

	applyForce(_Force){
		this.acc.add(_Force);
	}

	move(){
		this.acc.mult(0.3);
    	this.vel.add(this.acc);
    	this.vel.limit(1.5);
    	this.pos.add(this.vel);
	}

	drawLines(_target){
		push();
        strokeWeight(0.1);
        line(this.pos.x,this.pos.y,_target.x,_target.y);
      	pop();
	} // Draw Lines End

	

}