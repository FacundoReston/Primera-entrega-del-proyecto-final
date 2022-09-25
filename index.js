const suma = (a, b) => a + b;    /* Funciones flecha*/   
const resta = (a, b) => a - b;   
const iva = x => x * 0.21;       
const venta = y => y * 3;        
const descuento = z => z * 0.10;
let nombre = prompt("Ingrese el nombre del articulo")
let precioCosto = parseInt(prompt("Ingrese el precio del articulo"));
let precioVenta = parseInt(suma(venta(precioCosto), iva(precioCosto)));
// Al comprar articulos para vender en mi negocio, voy a multiplicar su valor por 3 y sumarle el iva //

const miArreglo = ["giudicatti", "gitano", "usual", "rusty"];

if (precioCosto > 5000) {
    alert("El precio excede el presupuesto del negocio");
} else {
    alert(`El precio de venta es ${precioVenta}`);
    if (precioVenta < 4000) {
        alert("Ubicación del articulo: Cajón");
    } else if (precioVenta < 8000) {
        alert("Ubicacion del articulo: Mostrador");
    } else {
        let nuevoPrecio = parseInt(resta(precioVenta, descuento(precioVenta)));
        alert(`El precio con descuento es ${nuevoPrecio}`);
        alert("Ubicación del articulo: Vidriera");
    }
}  // Condicional para saber si puedo comprar ciertos articulos, para darles una ubicacion en mi local y para hacer un descuento si superan los $8000 //

if (nombre !== "") {
    miArreglo.push(nombre);
    alert(miArreglo);
} else {
    alert("No se ingresó el nombre");
}





