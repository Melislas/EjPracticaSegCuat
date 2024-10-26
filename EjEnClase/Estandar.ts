import {Habitacion } from "./Habitacion";
 

export class Estandar extends Habitacion {

    protected internet:boolean=true;
    protected desayuno:boolean=true;
    protected spa:boolean=false;
    protected gym:boolean=false;
    
constructor (numero:number, precioBase:number, cantidadDias:number){
    super(numero,precioBase,cantidadDias)
}


public calcularCostoTotal() :number {
    
    
}




}