import { Servicio} from "./Servicio";


export abstract class Habitacion {

    protected numero:number;
    protected precioBase:number;
    protected disponibilidad:boolean= true; 
    protected cantidadDias:number;
    protected listaServiciosExtra:string[]=[];

constructor (numero:number,precioBase:number, cantidadDias:number){
    this.numero=numero;
    this.precioBase=precioBase;
    this.cantidadDias=cantidadDias;
   
}


public reservar():void {
    if (this.disponibilidad != false) {
        console.log(" La habitacion esta disponible para reservar ");
        
    }

}

public liberar (): void {
    if (this.disponibilidad != true ){
        console.log(" Se debe liberar la habitacion ");
        
    }
}


abstract calcularCostoTotal(): number;

public agregarServicioExtra(servicio:string):void{
    this.listaServiciosExtra.push(servicio)
}





}