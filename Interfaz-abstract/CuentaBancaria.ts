import { OperacionesBancarias } from "./OperacionesBancarias";

export abstract class CuentaBancaria implements OperacionesBancarias {

    saldo:number = 0;

    constructor (saldo:number){
        this.saldo=saldo
    }


    depositar(cantidad: number): number {
        this.saldo += cantidad; 
        return this.saldo
        
    }
    retirar(cantidad: number): number {
        if (cantidad > this.saldo){
            console.log("Saldo insuficiente ");
            return this.saldo
            } else {
                this.saldo -= cantidad;
      return this.saldo 

            }
      
    }

abstract tipoDeCuenta():void;

}