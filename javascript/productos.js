
// Función para obtener parámetros de la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}



// Función para mostrar los detalles del producto

// hasta aquí en la noche cuando termine mis trabajos continuo
function displayProductDetails(product) {
    const detailsContainer = document.getElementById('prodetails');
    detailsContainer.innerHTML = `

        <div class="single-pro-image">
        
            <img src=${product.imagen} width="100%"  id="MainImg" alt="producto">
            <div class="small-img-group" id="imgContainer1"></div>
            
        </div>

     
        <div class="single-pro-details">
            <h3>${product.name}</h3>
            <h2> ${product.price}</h2>
            <input type="number" name="1">
            <button class="normal">Add To Cart</button>
            <h4>Descripción</h4>
            <br>
            <br>
            <span>${product.description}</span>
        </div>

       `;
}

// Al cargar la página de detalles, obtener el ID del producto y mostrar sus detalles
document.addEventListener('DOMContentLoaded', () => {
    const productId = getQueryParam('productId');
    if (productId) {
        const product = getProductById(productId);
        if (product) {
            displayProductDetails(product);
        }
    }
});

// Función para obtener el producto por su ID
function getProductById(id) {
    return productsData[id];
}

// Datos de productos (simulación)
const productsData = {

    //libretas
    1: {
        name: "Libretas",
        imagen: "img/productos/libretas/libreta1-1.jpg",
        price: "S/100",
        description: "Libretas con espiral con un dibujo de diseño ",
        cant_estrellas: "stars1",
        categoria: "libretas",

    },
    2: {
        name: "Libretas",
        imagen: "img/productos/libretas/libreta2-1.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars2",
        categoria: "libretas",
    },
    3: {
        name: "Libretas",
        imagen: "img/productos/libretas/libreta3.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars3",
        categoria: "libretas",
    },
    4: {
        name: "Libretas",
        imagen: "img/productos/libretas/album1.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5: {
        name: "Libretas",
        imagen: "img/productos/libretas/album2-1.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    6: {
        name: "Libretas",
        imagen: "img/productos/libretas/a3.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },

    //carteras

    5000: {
        name: "Cartera",
        imagen: "img/productos/carteras/c1.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5001: {
        name: "Cartera",
        imagen: "img/productos/carteras/c2.jpg",
        price: "S/101",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5002: {
        name: "Cartera",
        imagen: "img/productos/carteras/c3.jpg",
        price: "S/102",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5003: {
        name: "Cartera",
        imagen: "img/productos/carteras/c4.jpg",
        price: "S/103",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5004: {
        name: "Cartera",
        imagen: "img/productos/carteras/c5.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5005: {
        name: "Cartera",
        imagen: "img/productos/carteras/c6.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5006: {
        name: "Cartera",
        imagen: "img/productos/carteras/c7.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5007: {
        name: "Cartera",
        imagen: "img/productos/carteras/c1.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    5008: {
        name: "Cartera",
        imagen: "img/productos/carteras/c1.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    //melamine

    10000: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-1.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10001: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-2.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10002: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-3.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10003: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-4.png",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10004: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-5.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10005: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-6.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10006: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-7.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10007: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-8.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10008: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-9.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10009: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-10.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10010: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-11.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10011: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-12.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10012: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-13.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10013: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-14.jpeg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10014: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-15.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    },
    10015: {
        name: "Melamine",
        imagen: "img/productos/melamine/imagen-16.jpg",
        price: "S/100",
        description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
        cant_estrellas: "stars4",
        categoria: "libretas",

    }

};
