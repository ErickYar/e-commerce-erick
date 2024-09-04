

        // Función para obtener parámetros de la URL
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // Función para mostrar los detalles del producto

        // hasta aquí en la noche cuando termine mis trabajos continuo
        function displayProductDetails(product) {
            const detailsContainer = document.getElementById('pro');
            detailsContainer.innerHTML = `
 
                <img src=${product.imagen} alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>cartoon Astronaut T-Shirts</h5>
                  
                     <!-- función -->
                      <div class="stars" id=${product.cant_estrellas}></div>
                    <h4>$78 hola</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
         
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
                name: "Cartera Marrón",
                imagen: "img/productos/album1.jpg",
                price: "S/100",
                description: "Cartera de Marrón pequeña muy bonita para el uso diario. Con su correa con diseño de cadena ",
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
