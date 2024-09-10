
// Función para inicializar los eventos de los productos
function initializeProductEvents() {
    const products = document.querySelectorAll('.pro');

    products.forEach(product => {
        product.addEventListener('click', () => {
            const productId = product.getAttribute('data-product-id');
            handleProductClick(productId);
        });
    });
}

// Función para manejar el clic en un producto
function handleProductClick(productId) {
    redirectToDetailPage(productId);
}

// Función para redirigir a la página de detalles con el ID del producto
function redirectToDetailPage(productId) {
    const url = `sproduct.html?productId=${encodeURIComponent(productId)}`;
    window.location.href = url;
}

// Inicializar eventos al cargar la página
document.addEventListener('DOMContentLoaded', initializeProductEvents);
