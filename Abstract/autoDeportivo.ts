
import { Vehiculos } from "./Vehiculos";

class AutoDeportivo extends Vehiculos {


acelerar():void{
    this.velocidadActual= this.velocidadActual + 50
}

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}