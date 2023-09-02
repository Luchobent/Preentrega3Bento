const fs = require('fs/promises'); // Importa fs.promises para trabajar con Promesas

class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.products = [];
        this.loadProductsFromFile(); // Cargar productos al inicio
    }

    async loadProductsFromFile() {
        try {
            const fileData = await fs.readFile(this.filePath, 'utf8');
            this.products = JSON.parse(fileData);
        } catch (error) {
            this.products = [];
        }
    }

    async saveProductsToFile() {
        try {
            await fs.writeFile(this.filePath, JSON.stringify(this.products, null, 4), 'utf8');
        } catch (error) {
            console.error('Error al guardar productos en el archivo.');
        }
    }

    addProduct(product) {
        if (!this.isProductValid(product)) {
            console.error('Error: Campos obligatorios faltantes o código duplicado.');
            return;
        }

        product.id = this.products.length + 1;
        this.products.push(product);
        this.saveProductsToFile();
    }

    async getProducts(limit) {
        await this.loadProductsFromFile();
        if (!limit) {
            return this.products;
        } else {
            return this.products.slice(0, limit);
        }
    }

    async getProductById(id) {
        await this.loadProductsFromFile();
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error('Producto no encontrado.');
        }
        return product;
    }

    async updateProduct(id, updatedFields) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = {
                ...this.products[productIndex],
                ...updatedFields,
                id: id,
            };
            this.saveProductsToFile();
            return true;
        } else {
            console.error('Error: Producto no encontrado para actualizar.');
            return false;
        }
    }

    async deleteProduct(id) {
        const initialLength = this.products.length;
        this.products = this.products.filter(product => product.id !== id);
        if (this.products.length !== initialLength) {
            this.saveProductsToFile();
            return true;
        } else {
            console.error('Error: Producto no encontrado para eliminar.');
            return false;
        }
    }

    isProductValid(product) {
        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        const hasAllRequiredFields = requiredFields.every(field => product[field]);
        const isCodeUnique = !this.products.some(p => p.code === product.code);
        return hasAllRequiredFields && isCodeUnique;
    }
}

module.exports = ProductManager;
