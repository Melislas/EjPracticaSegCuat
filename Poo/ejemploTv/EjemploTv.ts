class Televisor{
   private estaPrendido: boolean= true;
   private volumenActual:number;
   private canalActual:number;


   constructor (prendidoApagado:boolean, volumen:number, canal:number){
       this.estaPrendido=prendidoApagado
       this.volumenActual=volumen
       this.canalActual=canal
   }
   
 

public prenderApagar():void {
    if (this.estaPrendido){
        this.estaPrendido=false
    } else {
        this.estaPrendido=true
    }
}


public subirVolumen():void {
    this.volumenActual = this.volumenActual + 1 
}

public bajarVolumen():void {
    this.volumenActual= this.volumenActual - 1
}

public subirCanal():void { 
    this.canalActual = this.canalActual + 1

}

public bajarCanal (): void {
    this.canalActual = this.canalActual -1 
}




}

const Televisor1= new Televisor(false,50,13);

Televisor1.prenderApagar();  