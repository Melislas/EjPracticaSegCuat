import { CuentaBancaria } from "./CuentaBancaria";
import { CuentaCorriente } from "./CuentaCorriente";
import { CuentaDeAhorros } from "./CuentaDeAhorros";


const ctaCorriente:CuentaBancaria= new CuentaCorriente (20000);
ctaCorriente.tipoDeCuenta();
console.log(ctaCorriente.depositar(10000));
console.log(ctaCorriente.retirar (2000));
ctaCorriente.retirar(30000);



const ctaAhorro:CuentaBancaria= new CuentaDeAhorros(40000);
ctaAhorro.tipoDeCuenta();
console.log(ctaAhorro.depositar(10000));
console.log(ctaAhorro.retirar(2000));
ctaAhorro.retirar(50000);
