// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
let creature_1;
let dna1;

let objective_1;
let objective_2;

let Objectives = [];
let Creatures = [];
let Particles = [];

let p;



const num = 500;
const noiseScale = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background ("gray"); 


	for(let i = 0; i< num;i++){
		Particles.push(createVector(random(windowWidth),random(windowHeight)));

	}


  // Create a new canvas to match the browser size


  dna1 = new Dna(15);

  dna1.generateGenes();

  objective_1 = new Objective();
  objective_2 = new Objective();
  Objectives.push(objective_1);
  Objectives.push(objective_2);

  objective_1.setPosition(createVector(200,200));
  objective_2.setIsTarget(1);

  creature_1 = new Creature(windowWidth/2,windowHeight/2);
  Creatures.push(creature_1);
 } 

// ------------------------------------------------------------------
// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ------------------------------------------------------------------
// Main render loop 
function draw() {
  
	background(0,10);


	stroke(255);
	for(let i = 0; i<num;i++){
		let c = Particles[i];
		point(c.x,c.y);
		let n = noise(c.x*noiseScale,c.y*noiseScale);
		let a = TAU * n;
		c.x += cos(a);
		c.y += sin (a);
		if(!onScreen(c)){
		c.x = random(windowWidth);
		c.y = random(windowHeight);
		}

	}

  	
  	objective_1.visualize();


  	for(let i = 0; i<Creatures.length;i++){
  		Creatures[i].update(Objectives);
  		objective_2.setPosition(createVector(mouseX,mouseY));
		}



  	dna1.visualize();


   //text(Objectives[1].getPosition().x, width/2, height/2);
}

function mouseClicked() {
	Creatures.push(new Creature(mouseX,mouseY));
}

function onScreen(v){
	return v.x >= 0 && v.x <= windowWidth && v.y >= 0 && v.y <= windowHeight;

}


