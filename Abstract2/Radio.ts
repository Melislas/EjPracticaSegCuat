
import { DispositivoElectronico } from "./DispositivoElectronico";

export class Radio extends DispositivoElectronico{
    
    constructor (nombre:string, estado:boolean) {
        super (nombre,estado)
    }

public funcionalidadEspecial(): void {
   console.log( "Cambiando Emisora");
    
}

}