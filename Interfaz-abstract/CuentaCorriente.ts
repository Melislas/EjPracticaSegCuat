import { CuentaBancaria } from "./CuentaBancaria";

export class CuentaCorriente extends CuentaBancaria {
    tipoDeCuenta(): void {
        console.log("Cuenta Corriente");
    }
    
}