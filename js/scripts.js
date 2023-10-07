
import { vehiculosData } from './datos.js';

const datoFiltrado = document.getElementById('filtro');
const tablaDatos = document.getElementById('tabla-datos');
const btnCalcularEdad = document.getElementById('calcular-velocidad-button'); // Cambiado a calcular velocidad
const textBoxEdadPromedio = document.getElementById('velocidad-input'); // Cambiado a velocidad
const btnAgregarPersona = document.getElementById('boton-agregar'); // Cambiado a agregar

const txbId = document.getElementById('col-id');
const txbModelo = document.getElementById('col-modelo'); // Cambiado a modelo
const txbAnioFabri = document.getElementById('col-anio-fabri'); // Cambiado a año fabri
const txbVelMax = document.getElementById('col-vel-max');
const txbAltMax = document.getElementById('col-alt-max');
const txbAutonomia = document.getElementById('col-autonomia');
const txbCantPue = document.getElementById('col-cant-pue');
const txbCantRue = document.getElementById('col-cant-rue');

const btnAceptar = document.getElementById('aceptar');
const btnCancelar = document.getElementById('cancelar');

const headerRow = document.querySelector('#tabla-datos thead tr');

const chkId = document.getElementById('col-id');
const chkModelo = document.getElementById('col-modelo'); // Cambiado a modelo
const chkAnioFabri = document.getElementById('col-anio-fabri'); // Cambiado a año fabri
const chkVelMax = document.getElementById('col-vel-max');
const chkAltMax = document.getElementById('col-alt-max');
const chkAutonomia = document.getElementById('col-autonomia');
const chkCantPue = document.getElementById('col-cant-pue');
const chkCantRue = document.getElementById('col-cant-rue');

const cabeceraId = document.getElementById('col-id'); // Cambiado a col-id
const cabeceraModelo = document.getElementById('col-modelo'); // Cambiado a col-modelo
const cabeceraAnioFabri = document.getElementById('col-anio-fabri'); // Cambiado a col-anio-fabri
const cabeceraVelMax = document.getElementById('col-vel-max');
const cabeceraAltMax = document.getElementById('col-alt-max');
const cabeceraAutonomia = document.getElementById('col-autonomia');
const cabeceraCantPue = document.getElementById('col-cant-pue');
const cabeceraCantRue = document.getElementById('col-cant-rue');




document.addEventListener('DOMContentLoaded', () => {
    llenarTabla(vehiculosData);
});

function llenarTabla(data) {
    limpiarTabla();
    data.forEach((vehiculo) => {
        crearFila(vehiculo);
    });
}

function limpiarTabla() {
    const tbody = tablaDatos.querySelector('tbody');
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

function crearFila(vehiculo) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${vehiculo.id}</td> 
        <td>${vehiculo.modelo}</td>
        <td>${vehiculo.anioFab}</td>
        <td>${vehiculo.velMax}</td>
        <td>${vehiculo.altMax || ''}</td>
        <td>${vehiculo.autonomia || ''}</td>
        <td>${vehiculo.cantPue || ''}</td>
        <td>${vehiculo.cantRue || ''}</td>
    `;
    tablaDatos.querySelector('tbody').appendChild(fila);
}

datoFiltrado.addEventListener("change", () => {
    const valorSeleccionado = datoFiltrado.value;  
        if (valorSeleccionado !== "Todos") {
            const listaFiltrada = devolverPorFiltro(vehiculosData, valorSeleccionado);
            llenarTabla(listaFiltrada);
        } else {
            limpiarTabla();
            llenarTabla(vehiculosData);
        }
    
});

function devolverPorFiltro(data, filtro) {
    const listaFiltrada = [];

    data.forEach((dato) => {
        if ((filtro === "Terrestre" && (dato.cantPue !== undefined || dato.cantRue !== undefined)) ||
            (filtro === "Aereo" && dato.altMax !== undefined && dato.autonomia !== undefined) ||
            filtro === "Todos") {
            listaFiltrada.push(dato);
        }
    });

    return listaFiltrada;
}

btnCalcularEdad.addEventListener("click", () => {
    const valorSeleccionado = datoFiltrado.value;

    const listaFiltrada = devolverPorFiltro(vehiculosData, valorSeleccionado);

    let velTotal = 0;

    listaFiltrada.map((vehiculos) => {
        velTotal += vehiculos.velMax;
    });

    const promedioEdad = velTotal / listaFiltrada.length;

    textBoxEdadPromedio.value = promedioEdad;
})

btnAgregarPersona.addEventListener("click", () => {
    document.getElementsByClassName('form-abm')[0].hidden = false;

    txbId.value = devolverIdMaximo(personasData) + 1;

});

function limpiarFormulario() {
    document.getElementById('col-id').value = '';
    document.getElementById('col-modelo').value = '';
    document.getElementById('col-anio-fabri').value = '';
    document.getElementById('col-vel-max').value = '';
    document.getElementById('col-alt-max').value = '';
    document.getElementById('col-autonomia').value = '';
    document.getElementById('col-cant-pue').value = '';
    document.getElementById('col-cant-rue').value = '';
    document.getElementById('tipo').value = ''; // Clear the select element
}

document.getElementById('agregar').addEventListener('click', () => {
    const modelo = document.getElementById('col-modelo').value;
    const anioFabri = document.getElementById('col-anio-fabri').value;
    const velMax = document.getElementById('col-vel-max').value;
    const altMax = document.getElementById('col-alt-max').value;
    const autonomia = document.getElementById('col-autonomia').value;
    const cantPue = document.getElementById('col-cant-pue').value;
    const cantRue = document.getElementById('col-cant-rue').value;
    const tipo = document.getElementById('tipo').value;

    const newVehicle = {
        id: generateUniqueId(),
        modelo,
        anoFab: parseInt(anioFabri),
        velMax: parseFloat(velMax),
        altMax: parseFloat(altMax),
        autonomia: parseInt(autonomia),
        cantPue: parseInt(cantPue),
        cantRue: parseInt(cantRue),
        tipo,
    };

    vehiculosData.push(newVehicle);

    limpiarFormulario();

    llenarTabla(vehiculosData);

    document.querySelector('.form-abm').hidden = true;
});

const btnEliminar = document.getElementById('eliminar');

btnEliminar.addEventListener('click', () => {
    const idAEliminar = document.getElementById('col-id').value;

    function eliminarVehiculoPorID(id) {
        const index = vehiculosData.findIndex(vehiculo => vehiculo.id === id);
        if (index !== -1) {
            vehiculosData.splice(index, 1);
        }
    }

    eliminarVehiculoPorID(idAEliminar);

    limpiarFormulario();

    llenarTabla(vehiculosData);

    document.querySelector('.form-abm').hidden = true;
});


