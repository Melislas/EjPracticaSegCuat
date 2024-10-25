"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestorlibros = void 0;
var libro_1 = require("./libro");
var Gestorlibros = /** @class */ (function () {
    function Gestorlibros(nombre) {
        this.nombre = nombre;
        this.listaLibros = [];
    }
    Gestorlibros.prototype.getnombre = function () {
        return this.nombre;
    };
    Gestorlibros.prototype.getlistaLibros = function () {
        var copiaLibros = this.listaLibros.map(function (lib) { return (__assign({}, lib)); }); // hago una copia del arreglo sin romper el arr orignal//
        return copiaLibros;
    };
    Gestorlibros.prototype.setnombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Gestorlibros.prototype.setlistaLibros = function (listaLibros) {
        this.listaLibros = listaLibros;
    };
    Gestorlibros.prototype.eliminarLibro = function (libroAElimininar) {
        if (libroAElimininar != undefined && this.listaLibros.includes(libroAElimininar)) { // esot me dice si el libro esta o no esta parapoder eliminarlo //
            var posLibro = this.listaLibros.indexOf(libroAElimininar); // posicion del libro //
            this.listaLibros.splice(posLibro, 1); // elimina// 
        }
    };
    Gestorlibros.prototype.agregarLibro = function (nombre, autor, anio) {
        var nuevoLibro = new libro_1.Libro(nombre, autor, anio); // controlar indefinidos
        if (!this.listaLibros.some(function (lib) {
            return lib.getnombre() == nombre && lib.getautor() == autor && lib.getanioEdicion() == anio;
        }))
            this.listaLibros.push(nuevoLibro);
    };
    return Gestorlibros;
}());
exports.Gestorlibros = Gestorlibros;
