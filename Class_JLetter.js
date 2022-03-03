class JLetter {
	constructor(a){
		this.letter = a;
	
		this.scale = 1;
		this.pos = createVector(0,0);
		this.isHoveredOver = 0;
		

	}


	setPosition(x,y){
		this.pos.x = x; 
		this.pos.y = y; 
	}

	getPosition(){
		return this.pos;
	}

	setIsHoveredOver(a){
		this.isHoveredOver = 1;
	}
  
  getIsHoveredOver(){
    return this.isHoveredOver;
  }

	setOffset(x,y){
		var offset = createVector(x,y);
		this.pos.add(offset);
	}


	checkDistance2Actor(mX,mY){
		var mouse = createVector(mX,mY);
		var dist = this.pos.dist(mouse);
		if( dist<25){
			this.isHoveredOver = 1; 
			this.scale = 1.05;
		} else {
			this.scale = 1;
			this.isHoveredOver = 0; 
      

		}
	}

visualize(){
push();
fill(255,0,255);

//translate(this.offset.x,this.offset.y);

noFill();
stroke(255);
if(this.letter == 'J'){
push();
scale(this.scale);

noFill();
stroke(255);
strokeWeight(5);
arc(this.pos.x,this.pos.y,50,50,0,90);
strokeWeight(5);
arc(this.pos.x,this.pos.y,50,50,110,115);
strokeWeight(4);
arc(this.pos.x,this.pos.y,50,50,135,139);
strokeWeight(3);
arc(this.pos.x,this.pos.y,50,50,159,162);
strokeWeight(2);
arc(this.pos.x,this.pos.y,50,50,180,182);
strokeWeight(1);
arc(this.pos.x,this.pos.y,50,50,200,201);
pop();

push();
scale(this.scale);
noFill();
stroke(255);
strokeWeight(5);
beginShape();
vertex(this.pos.x-5,this.pos.y-65);
vertex(this.pos.x+25,this.pos.y-65);
vertex(this.pos.x+25,this.pos.y);
endShape();
strokeWeight(3);
beginShape();
vertex(this.pos.x,this.pos.y-70);
vertex(this.pos.x+20,this.pos.y-70);
endShape();
pop();
} else if (this.letter == 'O'){
push();
scale(this.scale);

noFill();
stroke(255);
strokeWeight(5);
arc(this.pos.x,this.pos.y,50,50,0,360);
strokeWeight(3);
arc(this.pos.x,this.pos.y,5,5,0,360);
pop();
} else if (this.letter == 'E'){
push();
scale(this.scale);

noFill();
stroke(255);
strokeWeight(5);
arc(this.pos.x,this.pos.y,50,50,70,360);
pop();
push();
scale(this.scale);

noFill();
stroke(255);
strokeWeight(5);
beginShape();
vertex(this.pos.x-22,this.pos.y);
vertex(this.pos.x+22,this.pos.y);
endShape();
strokeWeight(3);
beginShape();
vertex(this.pos.x-22,this.pos.y-5);
vertex(this.pos.x+22,this.pos.y-5);
endShape();
pop();
} else if (this.letter == 'L'){
push();
scale(this.scale);

noFill();
stroke(255);
strokeWeight(5);
beginShape();
vertex(this.pos.x-5,this.pos.y-60);
vertex(this.pos.x-5,this.pos.y+25);
endShape();
strokeWeight(3);

beginShape();
vertex(this.pos.x,this.pos.y-45);
vertex(this.pos.x,this.pos.y-20);
endShape();
pop();

} else if (this.letter == 'S'){
push();
scale(this.scale);

strokeWeight(5);
arc(this.pos.x,this.pos.y-40,50,50,90,290);
arc(this.pos.x,this.pos.y-40,50,50,310,312);
arc(this.pos.x-5,this.pos.y,50,50,270,85);
strokeWeight(5);
arc(this.pos.x-5,this.pos.y,50,50,103,109);
strokeWeight(4);
arc(this.pos.x-5,this.pos.y,50,50,129,134);
strokeWeight(3);
arc(this.pos.x-5,this.pos.y,50,50,150,153);
strokeWeight(2);
arc(this.pos.x-5,this.pos.y,50,50,170,172);
strokeWeight(1);
arc(this.pos.x-5,this.pos.y,50,50,190,191);
strokeWeight(3);
arc(this.pos.x,this.pos.y-40,60,60,175,190);
pop();
} else if (this.letter == 'C'){
push();
scale(this.scale);

strokeWeight(5);
arc(this.pos.x,this.pos.y,50,50,70,290);
strokeWeight(3);
arc(this.pos.x,this.pos.y,37,37,90,270);
pop();
} else if (this.letter == 'H'){
push();
scale(this.scale);

strokeWeight(5);
beginShape();
vertex(this.pos.x-25,this.pos.y-60);
vertex(this.pos.x-25,this.pos.y+25);
endShape();
arc(this.pos.x-5,this.pos.y,40,40,180,360);
beginShape();
vertex(this.pos.x+15,this.pos.y+2);
vertex(this.pos.x+15,this.pos.y+25);
endShape();
strokeWeight(3);
arc(this.pos.x-5,this.pos.y,30,30,280,360);
beginShape();
vertex(this.pos.x-30,this.pos.y-55);
vertex(this.pos.x-30,this.pos.y+20);
endShape();
pop();
} else if (this.letter == 'A'){
push();
scale(this.scale);

strokeWeight(5);
arc(this.pos.x,this.pos.y,50,50,35,325);
beginShape();
vertex(this.pos.x+22,this.pos.y-25);
vertex(this.pos.x+22,this.pos.y+25);
endShape();
strokeWeight(3);
arc(this.pos.x,this.pos.y,5,5,0,360);
pop();
} else if (this.letter == 'F'){
push();
scale(this.scale);

strokeWeight(5);
beginShape();
vertex(this.pos.x-10,this.pos.y-60);
vertex(this.pos.x-10,this.pos.y+25);
endShape();
arc(this.pos.x+15-10,this.pos.y-58,30,30,180,340);
beginShape();
vertex(this.pos.x-10,this.pos.y-15);
vertex(this.pos.x+10,this.pos.y-15);
endShape();
strokeWeight(3);
beginShape();
vertex(this.pos.x-10,this.pos.y-20);
vertex(this.pos.x+8,this.pos.y-20);
endShape();
pop();
} else if (this.letter == 'R'){
push();
scale(this.scale);

noFill();
stroke(255);
strokeWeight(5);
beginShape();
vertex(this.pos.x,this.pos.y-25);
vertex(this.pos.x,this.pos.y+53-25);
endShape();
arc(this.pos.x+18,this.pos.y-5,35,35,184,340);
strokeWeight(3);
beginShape();
vertex(this.pos.x+7,this.pos.y+19-25);
vertex(this.pos.x+7,this.pos.y+45-25);
endShape();
arc(this.pos.x+18,this.pos.y-5,22,22,180,340);
pop();

pop();
} 
	


	}
}