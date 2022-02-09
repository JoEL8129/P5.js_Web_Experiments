
class Dna {
  constructor(_DnaLength){
    this.genes = [];
    this.xoff = 0.1;
    this.length = _DnaLength;
  }
  
  generateGenes() {
    for(var i = 0; i <= this.length;i++){
      this.genes[i] = noise(this.xoff);

      this.xoff = this.xoff + 10;
    }
  }
  
  
  visualize(){
    for(var i = 0; i <= this.length;i++){

      circle(i*100,25,map(this.genes[i],0,1,5,80));
    }
  

  }
    
}