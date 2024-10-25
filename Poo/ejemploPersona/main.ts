const persona1:Persona = new Persona("juan", 37355241);
console.log(persona1.getNombre());
console.log("nombre: "+persona1.getNombre()+" y su dni es : "+persona1.getDni());
persona1.setNombre("Marcos");
console.log("su nuevo nombre es: "+persona1.getNombre());

const persona2:Persona= new Persona ("Maria", 34343434);


let nombre:string=persona2.getNombre();