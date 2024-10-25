export class Libro {
    private nombre:string;
    private autor:string;
    private anioEdicion:number;

    constructor(nombre:string, autor:string, anioEdicion:number){
    this.nombre=nombre;
    this.autor=autor;
    this.anioEdicion=anioEdicion;
}

public encontrarLibro(libro: Libro[], nombreBuscado: string): Libro  {
    return libro.find(libro => libro.getnombre() === nombreBuscado);
}



public getnombre():string {
    return this.nombre
}

public getautor():string {
    return this.autor
}

public getanioEdicion():number {
    return this.anioEdicion
}

public setnombre(NuevoNombre:string):void {
    if (NuevoNombre != undefined && NuevoNombre.length<5)  
    this.nombre =NuevoNombre;
}

public setautor(NuevoAutor:string):void {
    this.nombre =NuevoAutor;
}

public setanioEdicion(NuevoanioEdicion:number):void {
    this.anioEdicion =NuevoanioEdicion;
}







}