
import { Vehiculos } from "./Vehiculos";

class AutoCiudad extends Vehiculos {


acelerar():void{
    this.velocidadActual= this.velocidadActual + 10 
}

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}