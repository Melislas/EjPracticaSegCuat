export abstract class Vehiculos {
    protected marca:string;
    protected km:number=12345;
    protected tipoDeCombustible:string;
    protected velocidadActual:number;

constructor(marca:string,km:number,tipoDeCombustible:string){
    this.marca=marca;
    this.km=km;
    this.tipoDeCombustible=tipoDeCombustible;
    this.velocidadActual=0
}


abstract acelerar():void;

public marcaKm():number{
    return this.km 
}


public frenar (): void {
    this.velocidadActual=0
}

}









