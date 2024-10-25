import { Libro } from "./libro";
import { Gestorlibros } from "./gestorlibros";

const MartinFierro=new Libro("Martin Fierro","Jose Hernandez", 1970);


const gestorLibros1= new Gestorlibros ("gestorlibroOlav");


gestorLibros1.agregarLibro("Martin Fierro","Jose Hernandez", 1971);
gestorLibros1.agregarLibro("Martin Fierro","Jose Hernandez", 1972);
console.log(gestorLibros1.getlistaLibros());
gestorLibros1.eliminarLibro(MartinFierro);
console.log(gestorLibros1.getlistaLibros().length);
