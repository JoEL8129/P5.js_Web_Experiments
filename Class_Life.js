class Life {
   constructor(_Dna){
   	this.dna = _Dna;



   }


   create(){

   		this.dna.read();

   }

   live(){
		this.dna.write();
		this.dna.read();
   }


   kill(){

		this.dna.write();
   		
   }



}