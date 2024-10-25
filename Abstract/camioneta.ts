
import { Vehiculos } from "./Vehiculos";

class Caioneta extends Vehiculos {


acelerar():void{
    this.velocidadActual= this.velocidadActual + 20
}

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}