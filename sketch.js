// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
let creature_1;
let dna1;

let objective_1;
let objective_2;
let Objectives = [];

let p;

console.log('ml5 version:', ml5.version);

function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  background ("gray"); 

  dna1 = new Dna(15);
  Objectives = [];
  dna1.generateGenes();

  objective_1 = new Objective(0);
  objective_2 = new Objective(1);
  Objectives.push(objective_1);
  Objectives.push(objective_2);
  objective_1.setPosition(200,200);

   creature_1 = new Creature(windowWidth/2,windowHeight/2);
 } 

// ------------------------------------------------------------------
// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ------------------------------------------------------------------
// Main render loop 
function draw() {
  
  background(220);
  objective_1.update(200,200);
  objective_1.visualize();
  objective_2.update(mouseX,mouseY);
  objective_2.visualize();
  objective_2.setIsTarget(1);

  creature_1.update(0.5,2,0,Objectives);
  dna1.visualize();
  text(ml5.version, width/2, height/2);
}


