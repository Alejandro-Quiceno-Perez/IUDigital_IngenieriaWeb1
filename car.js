const products = [
    {
        name: 'Camiseta Blanca',
        image: 'https://www.camiseriaeuropea.com/cdn/shop/files/Blanca002_001_1.jpg?v=1682535338',
        price: 15,
        quantity: 3,
    },
    {
        name: 'Jeans Azules',
        image: 'https://fashionspark.com/media/catalog/product/6/8/68a59782f2ba8f4c98a1ca2b6a4991.jpg?quality=100&fit=bounds&height=&width=',
        price: 40,
        quantity: 4,
    },
    {
        name: 'Sombrero de Paja',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51I0Q8qa3U1kOexxQVyop2-Qbg9rNz7V5Tz6c_ge6wA&s',
        price: 20,
        quantity: 6,
    },
    {
        name: 'Sudadera Gris',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhYbAEM2pLlXjvmN9N2rychKnv8HYckL2zmuRiUqydA&s',
        price: 30,
        quantity: 1,
    }
];

function printProducts(products) {
    // Seleccionamos el contenedor donde se pintarán los productos
    const container = document.querySelector("#section-car");

    // Variable para almacenar el valor total de la compra, Se iguala a 0 Para poder hacer la suma del total
    let totalValue = 0;

    // Iteramos sobre cada producto
    products.forEach(product => {
        const productTotal = product.price * product.quantity;

        // sumamos el valor total de la compra a la compra 
        totalValue += productTotal;

        // Creamos un elemento div para cada producto
        const productoElement = document.createElement('div');
        productoElement.classList.add('product');

        // Creamos el contenido HTML del producto(Nombre, img, precio, precio total)
        productoElement.innerHTML = `
        <div class="container">

        <div class="inventory-item">
            <img src="${product.image}"
                alt="${product.name}">
            <div class="inventory-details">
                <h2>${product.name}</h2>
                <p>Precio: <span>$${product.price}</span></p>
                <p>Cantidad: <span>$${product.quantity}</span></p>
                <p>Total: <span>$${productTotal}</span></p>
                </div>
        </div>
        </div>
        `;

        //Agregamos el elemento del producto al contenedor
        container.appendChild(productoElement);
    });
}

// finalizamos llamando la funcion para que pueda pintar todos los productos en pantalla
printProducts(products);
