class Vehiculo {
    constructor(id, modelo, anioFabricacion, velocidadMaxima) {
      if (id <= 0) {
        throw new Error('El ID debe ser mayor a 0');
      }
      if (modelo === '') {
        throw new Error('El modelo no puede estar vacío');
      }
      if (anioFabricacion > 1885) {
        throw new Error('El año de fabricación debe ser mayor a 1885');
      }
      if (velocidadMaxima <= 0) {
        throw new Error('La velocidad máxima debe ser mayor a 0');
      }
  
      this.id = id;
      this.modelo = modelo;
      this.anioFabricacion = anioFabricacion;
      this.velocidadMaxima = velocidadMaxima;
    }
  
    toString() {
      return `Vehículo - ID: ${this.id}, Modelo: ${this.modelo}, Año: ${this.anioFabricacion}, Velocidad Máxima: ${this.velocidadMaxima}`;
    }
  }