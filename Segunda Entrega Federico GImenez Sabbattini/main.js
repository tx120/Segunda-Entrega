//segunda entrega 

let productos = [{ tipo: "computadora", precio: 150000 }, { tipo: "monitor", precio: 80000 }, { tipo: "celular", precio: 120000 }];
let cliente = { nombre: "", carrito: [] };

//función tienda
function tienda(){
    cliente.nombre = prompt("Ingrese su nombre")
    let opciones;

    do{
        opciones = mostrarMenu(cliente.nombre)
        opciones = parseInt(opciones, 10)
        switch(opciones){
            case 1:
                mostrarProductos()
                break;
            case 2:
                verCarrito()
                break;
            case 3:
                quitarCarrito()
                break;
            case 4:
                mostrarTotal()
                break;
            case 5:
                servicios()
                break;
            case 6:
                alert("Gracias por visitar nuestra tienda.")
                break;
            default:
                alert("Opcion invalida")
        }
    }while (opciones !== 6)
}

//menu
function mostrarMenu(nombre){
    return prompt(
        "Bienvenido " +nombre+ "\n"+
        "Seleccione una opción:\n"+
        "1 - Ver productos\n"+
        "2 - Ver carrito\n"+
        "3 - Quitar del carrito\n"+
        "4 - Precio total del carrito\n"+
        "5 - Servicios\n"+
        "6 - Salir"

    )
}

//mostrar productos y carrito

function mostrarProductos(){
    let mensaje = "Productos disponibles:\n"
    productos.forEach((producto, i) => {mensaje += `${i + 1}. ${producto.tipo} - $${producto.precio}\n`})
    let opciones = prompt("Ingrese el numero del producto que desea agregar el carrito\n"+ mensaje)
    opciones = parseInt(opciones, 10)
    if (opciones > 0 && opciones < 4){
        agregarCarrito(opciones)

    }else{
        alert("Seleccion invalida")
    }


}

function agregarCarrito(opciones){
    cliente.carrito.push(productos[opciones - 1])
    alert("Producto agregado al carrito")

}

function verCarrito(){
    if (cliente.carrito.length === 0){
        alert("El carrito esta vacio")
    }else{
        let mensaje = "Productos en el carrito:\n"
        cliente.carrito.forEach((producto, i) => {mensaje += `${i + 1}. ${producto.tipo} - $${producto.precio}\n`})
        alert(mensaje)
    }
}

function quitarCarrito(){
    let mensaje = "Ingrese el numero del producto que desea quitar del carrito\n"
    cliente.carrito.forEach((producto, i) => {mensaje += `${i + 1}. ${producto.tipo} - $${producto.precio}\n`})
    let opciones = parseInt(prompt(mensaje))
    if (opciones > 0 && opciones <= cliente.carrito.length){
        cliente.carrito.splice(opciones -1, 1)
        alert("Producto removido del carrito")
    }else{
        alert("Seleccion invalida")
    }

}

// precio total

function mostrarTotal(){
    let total = cliente.carrito.reduce((suma, producto) => suma + producto.precio, 0)
    alert(`El total del carrito es: $${total}`)
}

// servicios
function servicios() {
    alert("Bienvenido a Servicios")
    let check;
    do {
        let opciones = prompt("Para reparación de computadoras ingrese 1\nPara consultar por tratamiento de RAEES ingrese 2")
        opciones = parseInt(opciones, 10)
        switch (opciones) {
            case 1:
                check = confirm("¿Desea consultar por el servicio de reparación de computadoras?");
                if (check == true) {
                    let contact = prompt("Ingrese un numero de contacto y uno de nuestros técnicos se contactara con usted")
                    if (contact) {
                        alert("Gracias, nos comunicaremos en breve")
                    } else {
                        check = false
                    }
                }
                break;
            case 2:
                check = confirm("¿Desea consultar por el servicio de tratamiento de RAEES?");
                if (check == true) {
                    let contact = prompt("Ingrese un numero de contacto y uno de nuestros asesores se contactara con usted")
                    if (contact) {
                        alert("Gracias, nos comunicaremos en breve")
                    } else {
                        check = false
                    }
                }
            break;
            default:
                alert("Opción no valida")
                check = false
                break;
            
        }

    } while (check == false)

};

// llamado a la tienda
tienda();

