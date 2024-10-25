import { Televisor } from "./herencia";

class SmartTV extends  Televisor {
    private sistemaOperativo: string= "";



    constructor (volumenActual:number ,canalActual:number, sistOperativo:string) {
    super (volumenActual, canalActual);
    this.sistemaOperativo=sistOperativo;
}






}

let SmartTv = new SmartTV (10 , 20, "android"); 