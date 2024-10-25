import { Persona } from "./persona";

export class Futbolista extends Persona{
 private  numeroCamiseta:number;
 private posicion:string;
 private esCapitan:boolean;


constructor (numeroCamiseta:number, posicion:string, esCapitan:boolean , nombre:string, apellido:string, numeroPasaporte:number, fechaNacimiento:number){
    super (nombre,apellido,numeroPasaporte,fechaNacimiento)
this.esCapitan=esCapitan
this.posicion=posicion
this.numeroCamiseta=numeroCamiseta
}





}