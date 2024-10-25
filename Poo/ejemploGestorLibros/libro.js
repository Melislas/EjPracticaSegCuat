"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombre, autor, anioEdicion) {
        this.nombre = nombre;
        this.autor = autor;
        this.anioEdicion = anioEdicion;
    }
    Libro.prototype.encontrarLibro = function (libro, nombreBuscado) {
        return libro.find(function (libro) { return libro.getnombre() === nombreBuscado; });
    };
    Libro.prototype.getnombre = function () {
        return this.nombre;
    };
    Libro.prototype.getautor = function () {
        return this.autor;
    };
    Libro.prototype.getanioEdicion = function () {
        return this.anioEdicion;
    };
    Libro.prototype.setnombre = function (NuevoNombre) {
        if (NuevoNombre != undefined && NuevoNombre.length < 5)
            this.nombre = NuevoNombre;
    };
    Libro.prototype.setautor = function (NuevoAutor) {
        this.nombre = NuevoAutor;
    };
    Libro.prototype.setanioEdicion = function (NuevoanioEdicion) {
        this.anioEdicion = NuevoanioEdicion;
    };
    return Libro;
}());
exports.Libro = Libro;
