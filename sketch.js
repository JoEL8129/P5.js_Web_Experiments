// ------------------------------------------------------------------
// Object Variables
let creature_1;
let dna1;

let objective_1;
let objective_2;

let Objectives = [];
let Creatures = [];


let p;

let num = 150;
let noiseScale = 0.02;

// UI
var button_1;
var rect;
let uxarray = [];

// Logic
let CreatureCreationPossible = 0;

//
let word = []; 
let letters = [];


let Particles = [];

let eas;

let dummyCircles = []; 
let xoff = 0.0;
let yoff = 0.0;
let portalWeightOffsets = [];
let portalAngleOffsets = [];
let portalElements = 40;
let animSpeed = 0.5;
let hoverOffset = 0;
// ------------------------------------------------------------------


function setup() {
// Init Canvas
	createCanvas(windowWidth, windowHeight);
// Setup Canvas  
 	background (0); 
angleMode(DEGREES);


eas = new p5.Ease();


// Setup Name 

word[0] = 'J';
word[1] = 'O';
word[2] = 'E';
word[3] = 'L';
word[4] = 'S';
word[5] = 'C';
word[6] = 'H';
word[7] = 'A';
word[8] = 'E';
word[9] = 'F';
word[10] = 'E';
word[11] = 'R';

// Init "JLetter" Objects
for (var i = 0; i< word.length; i++){
	letters[i] = new JLetter(word[i]);
	
	letters[i].setScale(0.6);

	letters[i].setPosition(windowWidth/1.4+59*i,75);

	dummyCircles.push(createVector(windowWidth/2.5+33*i,40));
}

uxNoFill();
uxNoStroke();

uxRect(windowWidth/2.5-30, 15, 420, 50).uxEvent('hover', hoverOverName);


// Position Kalibration For Better Look 
letters[3].setOffset(-17,0);
letters[5].setOffset(-5,0);
letters[6].setOffset(-15,0);
letters[7].setOffset(-25,0);
letters[8].setOffset(-28,0);
letters[9].setOffset(-40,0);
letters[10].setOffset(-55,0);
letters[11].setOffset(-75,0);



//  Particles


	for(let i = 0; i< num;i++){
	Particles[i] = new Particle();
	Particles[i].setPosition(random(windowWidth),random(windowHeight));
	if(random(1)>0.5){
	Particles[i].setNoiseMult(1);
} else {
	Particles[i].setNoiseMult(-1);

	}
}


//  DNAs
	dna1 = new Dna(15);

  dna1.generateGenes();

//  Objectives 
  	objective_1 = new Objective();
  	objective_2 = new Objective();
  	Objectives.push(objective_1);
  	Objectives.push(objective_2);

  	objective_1.setPosition(createVector(200,200));
  	

//  Creature 
  	creature_1 = new Creature();
  	Creatures.push(creature_1);

  	creature_1.setup(windowWidth/2,windowHeight/2);

// Portal 
for (var i = 0; i < portalElements; i++) {
	portalWeightOffsets[i] = random(2.0);
	portalAngleOffsets[i] = random(-2,5);




}

	uxCircle(windowWidth/2,windowHeight/2,150,150).uxEvent('hover', unHoverPortal);
	uxCircle(windowWidth/2,windowHeight/2,50,50).uxEvent('hover', hoverPortal);
			uxNoFill();
	
	uxCircle(windowWidth/2,windowHeight/2,25,25).uxEvent('click', portalButton);

}
// ------------------------------------------------------------------
// 
function draw() {

	background(0);
	stroke(255);
 	let mouseV = createVector(mouseX,mouseY);
	displayPortal();

// if (frameCount*10 <= 1000){
// scale(eas.bounceIn(frameCount*10/1000));
// } else {
// 	scale(1); 
// }

push();
angleMode(RADIANS);

	for(let i = 0; i<num;i++){
		stroke(550-dist(Particles[i].getPosition().x,Particles[i].getPosition().y,mouseV.x,mouseV.y));
		Particles[i].update(Particles);
		if(!onScreen(Particles[i].getPosition())){
		//
	  Particles[i].setNoiseMult(Particles[i].getNoiseMult()*-1);		
		
		Particles[i].setPosition(createVector(random(windowWidth),random(windowHeight)));		
		}
		if(mouseV.dist(Particles[i].getPosition()) < 120){
			Particles.forEach(element =>{
				//// - strange error here:
      	// let dis = Particles[i].getPosition().dist(element.getPosition()); 
      	//// - this works somehow:
      		let dis = dist(Particles[i].getPosition().x,Particles[i].getPosition().y,element.getPosition().x,element.getPosition().y); 
      		if(dis>20 && dis<75) {      			
					stroke(225-mouseV.dist(Particles[i].getPosition()));
					Particles[i].drawLines(element.getPosition());
					//Particles[i].applyForce(mouseV);
      			} 
			}); // 2. forEach 		
		} // 1. if 

}


pop();

push();
//scale(0.6);
	for (let i = 0; i< word.length; i++){
angleMode(DEGREES);
//circle(dummyCircles[i].x,dummyCircles[i].y,30);
push();
	
	letters[i].setStrokeColor(300-constrain(dummyCircles[i].dist(mouseV),0,300)+50);
	letters[i].checkDistance2Actor(mouseX,mouseY);
	letters[i].visualize();
pop();
}

pop();

noFill();
  		objective_2.setPosition(createVector(mouseX,mouseY));

  	//objective_1.visualize();

  	for(let i = 0; i<Creatures.length;i++){
  		Creatures[i].update();
  	  

  		if(Creatures[i].getPosition().dist(createVector(windowWidth/2,windowHeight/2)) < 350){
  		Creatures[i].computeTarget(Particles);
  		Creatures[i].aimTarget();
  	} else {
  		Creatures[i].setTarget(random(windowWidth/2-100,windowWidth/2+100),random(windowHeight/2-50,windowHeight/2+50));
  	}

  		for (let j = 0; j < Particles.length; j++) {
  		if(Creatures[i].getPosition().dist(Particles[j].getPosition()) < 75){
  		Particles[j].setIsTarget(1);
  	} else {
  		Particles[j].setIsTarget(0);
  	}
  }

	}

  	//dna1.visualize();
   //text(Objectives[1].getPosition().x, width/2, height/2);
}

// ------------------------------------------------------------------

//Functions
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function mousePressed(){
	createCreature();
}
function createCreature() {
	if(isCreatureCreationPossible()){
	let newCreature = new Creature();
	newCreature.setup(mouseX,mouseY);
	Creatures.push(newCreature);
	}	else {
	noiseSeed(random(5000));
	}
}
function switchCreatureCreationPossible(){
	if(!isCreatureCreationPossible()){
		CreatureCreationPossible = true;
	}	else {
		CreatureCreationPossible = false;
	}	
}
function isCreatureCreationPossible (){
	return CreatureCreationPossible;
}
function onScreen(v){
	return v.x >= 0 && v.x <= windowWidth && v.y >= 0 && v.y <= windowHeight;
}
function hoverOverName() {
	
}
function displayPortal(){


	push();
	noStroke();
	angleMode(DEGREES);
	translate(windowWidth/2,windowHeight/2);

	scale(map(sin(frameCount*animSpeed*1.2%360),-1,1,0.75,1));
	for (var i = 0; i < 25; i++) {

		fill(-15+i*6);

	  circle(0,0,395-i*8,395-i*8);
	 } 
	pop();

push();
fill(0);
	noStroke();
	angleMode(DEGREES);

	translate(windowWidth/2,windowHeight/2);

	scale(map(sin(frameCount*animSpeed*1.2%360),-1,1,0.75,1));

	  circle(windowWidth/2,windowHeight/2,195,195);

pop(); 
		push();
	angleMode(DEGREES);
	translate(windowWidth/2,windowHeight/2);

	scale(map(sin(frameCount*animSpeed*1.2%360),-1,1,0,1));

	noStroke();
	for (var i = 0; i < 20; i++) {
		fill(135-i*9);
	  circle(0,0,195-i*8,195-i*8);

	  }
	pop();



	push();

	angleMode(DEGREES);
	translate(windowWidth/2,windowHeight/2);
	rotate(frameCount*animSpeed*2.2%360);
	scale(map(sin(frameCount*animSpeed*1.2%360),-1,1,3.95,4.15));

	noFill();
	xoff = xoff + 0.02 *(deltaTime/50);
	yoff = yoff + 0.02 *(deltaTime/50);

	let n = noise(xoff*0.03) * 90;


	for (var i = 0; i < portalWeightOffsets.length; i++) {

	  noFill();

		if(i < 2){

		stroke(map(i,0,portalWeightOffsets.length,255,0)-hoverOffset,map(i,0,portalWeightOffsets.length,255,0)-hoverOffset,map(i,0,portalWeightOffsets.length,255,0));
	  } else {
		stroke(map(i,0,portalWeightOffsets.length,255,0));
	  }
		scale(0.98);

		strokeWeight(0.25+i*n/90/12+portalWeightOffsets[i]);
		arc(0,0,5+5*i,5+5*i,n*i+portalAngleOffsets[i]*10,n*i-180+portalAngleOffsets[i]*10);

				stroke(map(i,0,portalWeightOffsets.length,155,0));

		strokeWeight(0.15+i/100/12+portalWeightOffsets[i]);
		arc(0,0,7+5*i,7+5*i,n*i+portalAngleOffsets[i]*10,n*i-160+portalAngleOffsets[i]*10);

	}
	pop();



}

function hoverPortal(){
	hoverOffset = 150;
}
function unHoverPortal(){
	hoverOffset = 0;
}
function portalButton(){
	background(255);
}

	// for(let i = 0; i<num;i++){
	// 	let c = Particles[i];
	// 	stroke(555-mouseV.dist(c),555-mouseV.dist(c),555-mouseV.dist(c));
	// 	strokeWeight(1);
		
	// 	point(c.x,c.y);
	// 	let n = noise(c.x*noiseScale,c.y*noiseScale);
		
	// 	let a = TAU * n;
	// 	c.x += cos(a);
	// 	c.y += sin (a);
	// 	if(!onScreen(c)){
	// 	c.x = random(windowWidth);
	// 	c.y = random(windowHeight);
		
	// }
	//  if(mouseV.dist(c) < 120){
	// 		Particles.forEach(element =>{
 
 //      let dis = dist(c.x,c.y,element.x,element.y);
 //      if(dis>20 && dis<95) {
 //        push();


 //        stroke(255-mouseV.dist(c),255-mouseV.dist(c),255-mouseV.dist(c));
 //        strokeWeight(0.1);
 //        line(c.x,c.y,element.x,element.y);
      
 //        pop();
 //      }
 //    });
	// 	}
	// }

