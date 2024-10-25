export class Persona {
    private nombre: string;
    private apellido:string;
    private numeroPasaporte: number;
    private fechaNacimiento:string;

constructor (nombre: string , apellido:string, pasaporte:number , fechaNac:string){
    this.nombre= nombre;
    this.apellido=apellido
    this.numeroPasaporte=pasaporte
    this.fechaNacimiento=fechaNac
}

public getnombre():string {
    return this.nombre

}

public getapellido():string {
    return this.apellido

}

public getnumeroPasaporte():number {
    return this.numeroPasaporte

}

public getfechaNacimiento():string {
    return this.fechaNacimiento

}

}

