
import { Vehiculos } from "./Vehiculos";

export class Camioneta extends Vehiculos {


acelerar():number{
   return  this.velocidadActual= this.velocidadActual + 20
}

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}