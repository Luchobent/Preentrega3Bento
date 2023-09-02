class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(product) {
        if (!this.isProductValid(product)) {
            console.error('Error: Campos obligatorios faltantes o código duplicado.');
            return;
        }

        product.id = this.nextProductId++;
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error('Error: Producto no encontrado.');
            return null;
        }
        return product;
    }

    isProductValid(product) {
        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        const hasAllRequiredFields = requiredFields.every(field => product[field]);
        const isCodeUnique = !this.products.some(p => p.code === product.code);
        return hasAllRequiredFields && isCodeUnique;
    }
}

module.exports = ProductManager;
