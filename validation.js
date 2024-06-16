const productForm = document.querySelector("#productForm");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreProducto = document.getElementById("productName");
    const precioProducto = document.getElementById("productPrice");
    const inventarioProducto = document.getElementById("productInventory");
    const msmErrorNombre = document.getElementById("msmErrorNombre");
    const msmErrorPrecio = document.getElementById("msmErrorPrecio");
    const msmErrorInventario = document.getElementById("msmErrorInventario");

    let hasError = false;

    if (nombreProducto.value.trim() === "") {
        msmErrorNombre.textContent = "El nombre del producto es obligatorio.";
        nombreProducto.focus();
        hasError = true;
    } else {
        msmErrorNombre.textContent = "";
    }

    if (precioProducto.value.trim() === "" || parseFloat(precioProducto.value) <= 0) {
        msmErrorPrecio.textContent = "El precio del producto es obligatorio y debe ser mayor a 0.";
        precioProducto.focus();
        hasError = true;
    } else {
        msmErrorPrecio.textContent = "";
    }

    if (inventarioProducto.value.trim() === "" || parseInt(inventarioProducto.value) < 0) {
        msmErrorInventario.textContent = "El inventario del producto es obligatorio y no puede ser negativo.";
        inventarioProducto.focus();
        hasError = true;
    } else {
        msmErrorInventario.textContent = "";
    }

    if (!hasError) {
        alert(`PRODUCTO AGREGADO \n
            Nombre: ${nombreProducto.value} \n
            Precio: ${precioProducto.value}\n
            Inventario: ${inventarioProducto.value}`);

        // Limpiamos los campos después de agregar el producto
        nombreProducto.value = "";
        precioProducto.value = "";
        inventarioProducto.value = "";
    }
});