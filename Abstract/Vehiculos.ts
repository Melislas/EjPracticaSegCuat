export abstract class Vehiculos {
    protected marca:string;
    protected km:number=12345;
    protected tipoDeCombustible:string;
    protected velocidadActual:number=0

constructor(marca:string,km:number,tipoDeCombustible:string,velocidadActual:number){
    this.marca=marca;
    this.km=km;
    this.tipoDeCombustible=tipoDeCombustible;
    this.velocidadActual=velocidadActual;
}


abstract acelerar():void;

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}









