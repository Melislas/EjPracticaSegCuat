
import { Vehiculos } from "./Vehiculos";

export class AutoDeportivo extends Vehiculos {


acelerar():number{
    return this.velocidadActual= this.velocidadActual + 50
}

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}