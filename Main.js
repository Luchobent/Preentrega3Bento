const ProductManager = require('./ProductManager');

const productManager = new ProductManager('products.json');

// Agregar productos de ejemplo
productManager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: 10.99,
    thumbnail: 'imagen1.jpg',
    code: '123',
    stock: 20,
});

productManager.addProduct({
    title: 'Producto 2',
    description: 'Descripción del Producto 2',
    price: 24.99,
    thumbnail: 'imagen2.jpg',
    code: '456',
    stock: 15,
});

// Obtener y mostrar productos
const products = productManager.getProducts();
console.log('Productos:', products);

// Obtener producto por ID
const productIdToFind = 2;
const productById = productManager.getProductById(productIdToFind);
if (productById) {
    console.log('Producto encontrado:', productById);
} else {
    console.error('Error: Producto no encontrado.');
}

// Actualizar un producto
const productIdToUpdate = 1;
const updatedFields = {
    title: 'Producto Actualizado',
    price: 19.99,
};
if (productManager.updateProduct(productIdToUpdate, updatedFields)) {
    console.log('Producto actualizado con éxito.');
} else {
    console.error('Error: Producto no encontrado para actualizar.');
}

// Eliminar un producto
const productIdToDelete = 2;
if (productManager.deleteProduct(productIdToDelete)) {
    console.log('Producto eliminado con éxito.');
} else {
    console.error('Error: Producto no encontrado para eliminar.');
}
