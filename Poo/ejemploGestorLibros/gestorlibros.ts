import { Libro } from "./libro";

export class Gestorlibros {
    private nombre:string;
    private listaLibros:Libro[];


constructor (nombre:string){
    this.nombre=nombre;
    this.listaLibros=[];
}

public getnombre():string { // controlar lo  pasamos//
    return this.nombre
}

public getlistaLibros():Libro[] {

const copiaLibros:Libro[]=this.listaLibros.map(lib=>({...lib}) as Libro);  // hago una copia del arreglo sin romper el arr orignal//
 
    return copiaLibros;
}

public setnombre(nuevoNombre:string):void{  //controlar siempre lo que llega //
    this.nombre=nuevoNombre

}

public setlistaLibros(listaLibros:Libro[]):void {
    this.listaLibros=listaLibros
}



public eliminarLibro(libroAElimininar:Libro):void{
if (libroAElimininar != undefined && this.listaLibros.includes(libroAElimininar)){  // esot me dice si el libro esta o no esta parapoder eliminarlo //
    const posLibro:number=this.listaLibros.indexOf(libroAElimininar);  // posicion del libro //
    this.listaLibros.splice(posLibro,1)   // elimina// 
}
}


public agregarLibro(nombre:string,autor:string, anio:number):void{
let nuevoLibro:Libro= new Libro(nombre,autor,anio);   // controlar indefinidos
if   (!this.listaLibros.some (lib=>
    lib.getnombre()==nombre && lib.getautor()==autor && lib.getanioEdicion()== anio))
    this.listaLibros.push(nuevoLibro);
}

}

