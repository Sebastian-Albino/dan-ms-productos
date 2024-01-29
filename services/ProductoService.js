import productoRepo from "../repositories/ProductoRepo";

async function crearProducto(producto){

    return await productoRepo.createProducto(producto);
}

async function listarProductos(nombre){
    //TODO: validar logica de negocio
    return await productoRepo.getProductosByNombre(nombre);
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

async function modificarProducto(producto){

    return await productoRepo.updateProducto(producto);
}

async function eliminarProducto(idProd){

    return await productoRepo.deleteProducto(idProd);
}

export default {crearProducto, listarProductos, listarProductosPorCategoria,
listarProductosPorProveedor, listarProductosPorStock, modificarProducto,
eliminarProducto}