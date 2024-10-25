import { Vehiculos } from "./Vehiculos";
import {AutoDeportivo} from "./autoDeportivo";
import {Camioneta} from "./camioneta";
import { AutoCiudad } from "./autoCiudad";




const autoCiudad:Vehiculos= new AutoCiudad ("Ford", 12345, "nafta");
console.log(autoCiudad.acelerar());

const camioneta:Vehiculos=new Camioneta ("Chevrolet", 12345, "nafta");
console.log(camioneta.acelerar());


const autoDeportivo:Vehiculos=new AutoDeportivo ("Ferrari", 12345, "nafta")
console.log(autoDeportivo.acelerar());
