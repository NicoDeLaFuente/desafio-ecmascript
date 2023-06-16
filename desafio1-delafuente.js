class ProductManager {
    products;

    static ultimoId = 0;

    constructor (){
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        ProductManager.ultimoId++
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.ultimoId
        }

        // si hay un dato faltante, arroja error. 
        if (!title, !description, !price, !thumbnail, !code, !stock) {
            throw new Error("Por favor completar todos los campos necesarios");
        }

        const checkExistence = this.products.findIndex(product => product.code === code) 
        
        // si el codigo del producto coincide con uno existente, arroja error. 
        if (checkExistence !== -1) {
            throw new Error(`El producto ${title} ya existe`)
        }

        //pushea el producto en caso de pasar las verificaciones. 
        this.products.push(producto);
    }

    getProductById(id){
        const findId = this.products.findIndex(product => product.id === id)

        if (findId === -1) {
            throw new Error(`El id ${id} no ha sido encontrado`);
        }

        return this.products[findId];
    }
}

