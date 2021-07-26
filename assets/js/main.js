
// Importacion de módulos donde se definieron las clases
import Cliente from "./clase_cliente.js";
import Impuestos from "./clase_impuestos.js";

//Instancia de la clase Impuestos, importado del modulo correspondiente
let impuesto01 = new Impuestos(20000000, 10000000);

// Instancia de Objeto CLiente, iportado del módulo clase_cliente
let cliente01 = new Cliente("Dario", impuesto01);

//Se kuestra en pantalla el resultado de la instancia del objeto
console.log(cliente01);
console.log(cliente01.calcularImpuesto());