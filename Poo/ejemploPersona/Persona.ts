class Persona  {
    //propiedades
   private altura:number;
   private peso:number;
   private nombre:string;
   private sexo:string;
   private dni:number;
   
    
  //metodos
  constructor(nombre:string, dni:number,altura?:number){
    this.nombre=nombre;
    this.dni=dni;
    if (altura == undefined)
      this.altura = 0;
      else
      this.altura = altura;
  }

  public getDni():number{
       return this.dni;
    }

 public getAltura():number{
    return this.altura;
 }

 public getPeso():number {
    return this.peso;
 }
 public getNombre():string {
    return this.nombre;
 }

public setNombre(parametroNombre:string):void{
  if (parametroNombre!=""){
    this.nombre=parametroNombre;
  }
}
  
  public caminar():string{
    return "caminando";
  }
  public hablar():string{
    return "bla bla bla";
  }
  public dormir():string{
    return "zzz";
  }
}



