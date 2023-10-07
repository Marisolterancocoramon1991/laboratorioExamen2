// Aereo.js
const Vehiculo = require('./Vehiculo');

class Aereo extends Vehiculo {
  constructor(id, modelo, anioFabricacion, velocidadMaxima, alturaMaxima, autonomia) {
    super(id, modelo, anioFabricacion, velocidadMaxima);
    if (alturaMaxima <= 0) {
      throw new Error('La altura máxima debe ser mayor a 0');
    }
    if (autonomia <= 0) {
      throw new Error('La autonomía debe ser mayor a 0');
    }

    this.alturaMaxima = alturaMaxima;
    this.autonomia = autonomia;
  }
}

module.exports = Aereo;
