// ------------------------------------------------------------------
// Object Variables
let creature_1;
let dna1;

let objective_1;
let objective_2;

let Objectives = [];
let Creatures = [];


let p;

let num = 200;
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

	letters[i].setPosition(windowWidth/1.5+59*i,75);

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

	

//UI

//uxRect(100, 100, 50, 50).uxEvent('click', trigger);

//button_1 = createButton("YOOOO");
//button_1.mousePressed(switchCreatureCreationPossible);
//button_1.position(100,75);


//  Particles
	for(let i = 0; i< num;i++){
	Particles.push(createVector(random(windowWidth),random(windowHeight)));
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
  	objective_2.setIsTarget(1);

//  Creature 
  	creature_1 = new Creature();
  	Creatures.push(creature_1);

  	creature_1.setup(windowWidth/2,windowHeight/2);



  
} 

// ------------------------------------------------------------------
// On Tick
function draw() {

	background(0);
	stroke(255);

 let mouseV = createVector(mouseX,mouseY);

// if (frameCount*10 <= 1000){
// scale(eas.bounceIn(frameCount*10/1000));
// } else {
// 	scale(1); 
// }

push();

	for(let i = 0; i<num;i++){
angleMode(RADIANS);

		let c = Particles[i];
		stroke(555-mouseV.dist(c),555-mouseV.dist(c),555-mouseV.dist(c));
strokeWeight(1);
		
		point(c.x,c.y);
		let n = noise(c.x*noiseScale,c.y*noiseScale);
		
		let a = TAU * n;
		c.x += cos(a);
		c.y += sin (a);
		if(!onScreen(c)){
		c.x = random(windowWidth);
		c.y = random(windowHeight);
		
	}
	 if(mouseV.dist(c) < 120){
			Particles.forEach(element =>{
 
      let dis = dist(c.x,c.y,element.x,element.y);
      if(dis>20 && dis<95) {
        push();


        stroke(255-mouseV.dist(c),255-mouseV.dist(c),255-mouseV.dist(c));
        strokeWeight(0.1);
        line(c.x,c.y,element.x,element.y);
      
        pop();
      }
    });
		}
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

  	//objective_1.visualize();

  	for(let i = 0; i<Creatures.length;i++){
  		Creatures[i].update(Objectives);
  	//	Creatures[i].connectCreatures(Particles);
  		objective_2.setPosition(createVector(mouseX,mouseY));
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

