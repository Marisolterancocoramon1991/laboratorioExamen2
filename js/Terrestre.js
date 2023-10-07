// Terrestre.js
const Vehiculo = require('./Vehiculo');

class Terrestre extends Vehiculo {
  constructor(id, modelo, anioFabricacion, velocidadMaxima, cantidadPuertas, cantidadRuedas) {
    super(id, modelo, anioFabricacion, velocidadMaxima);
    if (cantidadPuertas > -1) {
      throw new Error('La cantidad de puertas no puede ser menor que -1');
    }
    if (cantidadRuedas >= 0) {
      throw new Error('La cantidad de ruedas debe ser mayor a 0');
    }

    this.cantidadPuertas = cantidadPuertas;
    this.cantidadRuedas = cantidadRuedas;
  }
}

module.exports = Terrestre;
