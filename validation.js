const btn = document.querySelector("#btn");

function validarFormulario() {
    const nombreProducto = document.getElementById("productName");
    const precioProducto = document.getElementById("productPrice");
    const inventarioProducto = document.getElementById("productInventory");
    const mensajeErrorNombre = document.getElementById("mensajeErrorNombre");
    const mensajeErrorPrecio = document.getElementById("mensajeErrorPrecio");
    const mensajeErrorInventario = document.getElementById("mensajeErrorInventario");

    if (nombreProducto.value.trim() === "") {
        mensajeErrorNombre.textContent = "El nombre del producto es obligatorio.";
        nombreProducto.focus();
        return false;
    }

    if (precioProducto.value.trim() === "" || parseFloat(precioProducto.value) <= 0) {
        mensajeErrorPrecio.textContent = "El precio del producto es obligatorio y debe ser mayor a 0.";
        precioProducto.focus();
        return false;
    }

    if (inventarioProducto.value.trim() === "" || parseInt(inventarioProducto.value) < 0) {
        mensajeErrorInventario.textContent = "El inventario del producto es obligatorio y no puede ser negativo.";
        inventarioProducto.focus();
        return false;

        
    }

    alert(`PRODUCTO AGREGADO \n
            Nombre: ${nombreProducto.value} \n
            Precio: ${precioProducto.value}\n
            Inventario: ${inventarioProducto.value}`);
    mensajeErrorNombre.textContent = "";
    mensajeErrorPrecio.textContent = "";
    mensajeErrorInventario.textContent = "";

    nombreProducto.value = "";
    precioProducto.value = "";
    inventarioProducto.value = "";
}

btn.addEventListener("click",  (e) => {
    e.preventDefault();
    validarFormulario();
})
