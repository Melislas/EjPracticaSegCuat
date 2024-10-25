export abstract class DispositivoElectronico {
    protected nombre:string;
    protected estado:boolean;

    constructor (nombre:string, estado:boolean){
        this.nombre=nombre;
        this.estado=estado;
    }

public encender (){
    this.estado ==  false
        console.log("El dispositivo está encendido")
    }
     


public apagar (){
    this.estado == true
    console.log( "El dispositivo está apagado");
    
}


abstract funcionalidadEspecial():void ;

}





