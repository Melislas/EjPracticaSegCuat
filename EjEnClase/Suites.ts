import {Habitacion } from "./Habitacion";
 

class Estandar extends Habitacion {


    protected internet:boolean=true;
    protected desayuno:boolean=true;
    protected spa:boolean=true;
    protected gym:boolean=true;
    
    
constructor (numero:number, precioBase:number, cantidadDias:number){
    super(numero,precioBase,cantidadDias)
}


public calcularCostoTotal():number{
    
}


}