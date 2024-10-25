
import { Vehiculos } from "./Vehiculos";

export class AutoCiudad extends Vehiculos {


acelerar():number{
    return this.velocidadActual= this.velocidadActual + 10 
}

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}