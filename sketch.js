// ------------------------------------------------------------------
// Variables
let creature_1;
let dna1;

let objective_1;
let objective_2;

let Objectives = [];
let Creatures = [];
let Particles = [];

let p;

const num = 150;
const noiseScale = 0.01;

// UI
var button_1;

var rect;
// Logic
let CreatureCreationPossible = 0;




// ------------------------------------------------------------------
// On beginPlay
function setup() {
// Init Canvas
	createCanvas(windowWidth, windowHeight);
// Setup Canvas  
 	background ("gray"); 

//UI

uxRect(100, 100, 50, 50).uxEvent('click', trigger);

button_1 = createButton("YOOOO");
button_1.mousePressed(switchCreatureCreationPossible);
button_1.position(100,75);


// Init Particles
	for(let i = 0; i< num;i++){
//	Particles.push(createVector(random(windowWidth),random(windowHeight)));
	}


// Init DNAs
	dna1 = new Dna(15);

// Setup DNAs
  	dna1.generateGenes();

// Init Objectives 
  	objective_1 = new Objective();
  	objective_2 = new Objective();
  	Objectives.push(objective_1);
  	Objectives.push(objective_2);

// Setup Objectives
  	objective_1.setPosition(createVector(200,200));
  	objective_2.setIsTarget(1);

// Init Creature 
  	creature_1 = new Creature();
  	Creatures.push(creature_1);

// Setup Creature  
  	creature_1.setup(windowWidth/2,windowHeight/2);
} 

// ------------------------------------------------------------------
// On Tick
function draw() {

	background(255,20);
	stroke(0);
	// for(let i = 0; i<num;i++){
	// 	let c = Particles[i];
	// 	stroke(0,0,0);
		
	// 	point(c.x,c.y);
	// 	let n = noise(c.x*noiseScale,c.y*noiseScale);
	// 	noiseDetail(2.5);
	// 	let a = TAU * n;
	// 	c.x += cos(a);
	// 	c.y += sin (a);
	// 	if(!onScreen(c)){
	// 	c.x = random(windowWidth);
	// 	c.y = random(windowHeight);
	// 	}
	// }

  	objective_1.visualize();

  	for(let i = 0; i<Creatures.length;i++){
  		Creatures[i].update(Objectives);
  		objective_2.setPosition(createVector(mouseX,mouseY));
	}

  	dna1.visualize();
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


function trigger() {
  console.log('uxRect just got clicked!');
}