import { Alumno } from "./alumnos";

 class Profesor{

    private nombre:string;
    private alumnos: Alumno[];

    constructor (nombre:string) {
        this.nombre= nombre;
        this.alumnos= [];

    }



}