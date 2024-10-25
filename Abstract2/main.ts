import { DispositivoElectronico } from "./DispositivoElectronico";
import{Tv} from "./Tv";
import {Radio} from "./Radio";



const nuevoTv:DispositivoElectronico= new Tv ("Smart",false);
nuevoTv.encender();
nuevoTv.funcionalidadEspecial();


const nuevaRadio:DispositivoElectronico= new Radio ("Lala",true);
nuevaRadio.apagar();
nuevaRadio.funcionalidadEspecial();


