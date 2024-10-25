 export class Alumno {
    
    private nombre:string;
    private nota:number;

constructor (nombre:string, nota:number) {
    this.nombre= nombre;
    this.nota=nota;
}


getnombre():string {
    return this.nombre;
}

getnota():number{
    return this.nota;
}

getaprobado():boolean{
    if (this.nota >=7){
      return true;
        
    } else {
        return false;
        
    }
}

}


