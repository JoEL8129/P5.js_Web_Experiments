
var vertices = [];

var uRect_1;

function setup(){
	createCanvas(windowWidth, windowHeight);
 	background (255,255,255); 

	uxNoFill();
	uxNoStroke();
 	uxRect(0, 0, 100, 65).uxEvent('hover', trigger);
 	
}

function draw(){

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function trigger(){
	spawnParticles
}

function mousePressed(){
	var v = createVector(mouseX,mouseY);
	vertices.push(v);

}