// Definición de la Clase Cliente
// Se indica que es exportable
export default class Cliente {
    // Función constructora de la clase
    constructor(nombre, impuesto){
        this.nombre   = nombre;
        this.impuesto = impuesto;
    }

    // Getters del atributo nombre
    get nombre() {
        return this._nombre
    }

    //Setter del atributo nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    //Función para calcular el impuesto
    calcularImpuesto = (monto_bruto_anual, deducciones) => {
        const montoAnual     = this.impuesto.monto_bruto_anual;
        const deduccionAnual = this.impuesto.deducciones
        return (montoAnual - deduccionAnual) * 0.21;
    }

}