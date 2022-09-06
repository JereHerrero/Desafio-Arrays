// Aca creo la clase del objeto producto como base para cargar los productos 

class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }


vender(cantidad) {
    this.stock = this.stock - cantidad;
}
}

//Inicializo arrays para las categorias de los productos

const remeras = [];
const buzos = [];
const pantalones = [];

//Cargo el stock de productos segun su categoria

//Polos

remeras.push(new Producto("Polo Lacoste Blanco", 1, 2000, "blanco", 30));
remeras.push(new Producto("Polo Label Negro", 2, 1400, "negro", 10));
remeras.push(new Producto("Polo Montagne Negro", 3, 1400, "negro", 20));

//Buzos

buzos.push(new Producto("Buzo Cuello Alto Negro", 5, 4000, "Negro", 20));
buzos.push(new Producto("Buzo Deportiva Negro", 6, 3800, "Negro", 40));
buzos.push(new Producto("Buzo Blanca", 7, 3800, "blanco", 40));

//Pantalones

pantalones.push(new Producto("Jogger Gris", 8, 2900, "Gris", 10));
pantalones.push(new Producto("Jogger Azul Marino", 9, 1000, "Azul Marino", 10));
pantalones.push(new Producto("Pantalón Deportivo Negro", 9, 1000, "Negro", 10));


// Recorro los arrays para mostrarle los productos al usuario

for (const remera of remeras) {
    alert("ID (" + remera.id + ") - " + remera.nombre);
}
for (const buzo of buzos) {
    alert("ID (" + buzo.id + ") - " + buzo.nombre);
}
for (const pantalon of pantalones) {
    alert("ID (" + pantalon.id + ") - " + pantalon.nombre);
}

// Funcion para calcular el precio final de la compra

function calcularPrecio(precioPrenda, cantidadPrenda, costoEnvio) {
    return ((precioPrenda * 1.21) * cantidadPrenda) + costoEnvio;
}

// Solicito al usuario el ID de la prenda

let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const remeraBuscada = remeras.find(remera => remera.id === prendaSeleccionada);
const buzoBuscado = buzos.find(buzo => buzo.id == prendaSeleccionada);
const pantalonBuscado = pantalones.find(pantalon => pantalon.id == prendaSeleccionada);


// Solicito al usuario la cantidad de la prenda

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar de la prenda seleccionada:"));

// Costo de envio promedio dentro de CABA

const envio = 350;

// Salidas de consola indicando el precio final de la compra segun la prenda elegida

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <= 4) {
    alert("El precio final de tu compra es: $" + calcularPrecio(remeraBuscada.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    remeraBuscada.vender(cantidad);
} else if (prendaSeleccionada <= 7) {
    alert("El precio final de tu compra es: $" + calcularPrecio(buzoBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    buzoBuscado.vender(cantidad);
} else if (prendaSeleccionada <= 9) {
    alert("El precio final de tu compra es: $" + calcularPrecio(pantalonBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    pantalonBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}