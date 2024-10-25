import { CuentaBancaria } from "./CuentaBancaria";

export class CuentaDeAhorros extends CuentaBancaria {
    tipoDeCuenta(): void {
        console.log("Cuenta de Ahorros");
    }
    
}