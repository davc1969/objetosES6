//Funcion constructora de la clase Impuestos
// debe ser exportable

export default class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones       = deducciones;
    };

    //GETTERS de los atributos
    get monto_bruto_anual() {
        return this._monto_bruto_anual
    }

    get deducciones() {
        return this._deducciones
    }

    //SETTERS de los atributos
    set monto_bruto_anual(nuevoMonto) {
        this._monto_bruto_anual = nuevoMonto;
    }

    set deducciones(nuevaDedduccion) {
        this._deducciones = nuevaDedduccion;
    }

}