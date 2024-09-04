
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
            1: {
                name: "Libretas",
                imagen: "img/productos/libreta1-1.jpg",
                price: "S/100",
                description: "Libretas con espiral con un dibujo de diseño ",
                cant_estrellas:"stars1",
                categoria:"libretas",
            
            },
            2: {
                name: "Cartera Marrón",
                imagen: "img/productos/album1.jpg",
                price: "S/100",
                description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
                cant_estrellas:"stars2",
                categoria:"libretas",
            },
            3: {
                name: "Cartera Marrón",
                imagen: "img/productos/album1.jpg",
                price: "S/100",
                description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
                cant_estrellas:"stars3",
                categoria:"libretas",
                      },
            4: {
                name: "Cartera Marrón",
                imagen: "img/productos/album1.jpg",
                price: "S/100",
                description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
                cant_estrellas:"stars4",
                categoria:"libretas",

            }
        };
