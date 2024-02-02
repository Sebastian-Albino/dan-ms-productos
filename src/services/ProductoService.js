import productoRepo from "../repositories/ProductoRepo.js";

async function crearProducto(producto){

    return await productoRepo.createProducto(producto);
}

async function listarProductos(nombre){
    //TODO: validar logica de negocio
    return await productoRepo.getProductosByNombre(nombre);
}

async function listarProductoPorId(idProd){

    return await productoRepo.getProductoById(idProd);
}

async function listarProductosPorCategoria(nombreCat){
    return await productoRepo.getProductosByNombreDeCat(nombreCat);
}

async function listarProductosPorProveedor(proveedor){

    return await productoRepo.getProductoByProveedor(proveedor);
}

async function listarProductosPorStock(stock){

    return await productoRepo.getProductosByStock(stock);
}

async function modificarProducto(idProd, producto){

    return await productoRepo.updateProducto(idProd, producto);
}

async function modificarStockProducto(idProd, cantidad){

    return await productoRepo.updateStockProducto(idProd, cantidad);
}

async function eliminarProducto(idProd){

    return await productoRepo.deleteProducto(idProd);
}

export default {crearProducto, listarProductos, listarProductoPorId,
listarProductosPorCategoria, modificarStockProducto,
listarProductosPorProveedor, listarProductosPorStock, modificarProducto,
eliminarProducto}