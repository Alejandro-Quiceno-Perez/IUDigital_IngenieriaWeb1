const productForm = document.querySelector("#productForm");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombreProducto = document.getElementById("productName");
    const precioProducto = document.getElementById("productPrice");
    const inventarioProducto = document.getElementById("productInventory");
    const msmErrorNombre = document.getElementById("msmErrorNombre");
    const msmErrorPrecio = document.getElementById("msmErrorPrecio");
    const msmErrorInventario = document.getElementById("msmErrorInventario");


    if (nombreProducto.value && precioProducto.value && inventarioProducto.value) {
        alert(`Se agrego correctamente
            Nombre: ${nombreProducto.value}
            Precio: ${precioProducto.value}
            Inventario: ${inventarioProducto.value}`)

        nombreProducto.value = "";
        precioProducto.value = "";
        inventarioProducto.value = "";

        msmErrorNombre.textContent = ""
        msmErrorPrecio.textContent = "";
        msmErrorInventario.textContent = "";
    } else {
        if (!nombreProducto.value) {
            msmErrorNombre.textContent = "Este campo es requerido"
        } else {
            msmErrorNombre.textContent = "";
        }

        if (!precioProducto.value) {
            msmErrorPrecio.textContent = "Este campo es requerido"
        } else {
            msmErrorPrecio.textContent = "";
        }

        if (!inventarioProducto.value) {
            msmErrorInventario.textContent = "Este campo es requerido"
        } else {
            msmErrorInventario.textContent = "";
        }
    }
})