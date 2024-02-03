import productoService from "../services/ProductoService.js";

async function crearProducto(req, res){

    const prod = req.body;
    const camposFaltantes = checkData(req);

    if(camposFaltantes.length > 0){
        return res.status(400).json({
            error: "Campos incompletos",
            camposFaltantes: camposFaltantes
        });
    }

    try{

        const producto = await productoService.crearProducto(prod);
        return res.status(201).json(producto);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }


}


//Ver si hay campos vacios en el producto
function checkData(prod) {
    let camposFaltantes = [];

    if(!prod.nombre) camposFaltantes.push('nombre');
    if(!prod.descripcion) camposFaltantes.push('descripcion');
    if(!prod.proveedorId) camposFaltantes.push('proveedorId');
    if(!prod.stockActual) camposFaltantes.push('stockActual');
    if(!prod.categoriaId) camposFaltantes.push('categoriaId');
    
    return camposFaltantes;
}


async function listarProductos(req, res){

    try{
        const nombre = req.query.nombre;
        console.log(nombre);
        const productos = await productoService.listarProductos(nombre);
        return res.status(200).json(productos);
    }catch(error){
        return res.status(500).json({
            error: error.message,
        });
    }
}


async function listarProductoPorId(req, res){

    try{
        const id = req.params.id;
        const producto = await productoService.listarProductoPorId(id);
        return res.status(200).json(producto);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function listarProductosPorNombreCategoria(req, res){

    try{
        const nombre = req.params.nombre;
        const productos = await productoService.listarProductosPorCategoria(nombre);
        return res.status(200).json(productos);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }

}

async function listarProductoPorNombreProveedor(req, res){

    try{
        const nombre = req.params.nombre;
        const productos = await productoService.listarProductosPorProveedor(nombre);
        return res.status(200).json(productos);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

async function listarProductoPorStockActual(req, res){

    try{
        const cantidad = req.params.cantidad;
        const productos = await productoService.listarProductosPorStock(cantidad);
        return res.status(200).json(productos);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

async function modificarProducto(req, res){

    try{
        const id = req.params.id;
        const prod = req.body;
        const producto = await productoService.modificarProducto(id, prod);
        return res.status(200).json(producto);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

async function modificarStockProducto(req, res){

    try{
        const id = req.params.id;
        const cantidad = req.params.cantidad;
        const producto = await productoService.modificarStockProducto(id, cantidad);
        return res.status(200).json(producto);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}



async function eliminarProducto(req, res){

    try{
        const id = req.params.id;
        const producto = await productoService.eliminarProducto(id);
        return res.status(200).json(producto);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

export default {crearProducto, listarProductoPorId, listarProductos,
listarProductoPorNombreProveedor, listarProductoPorStockActual,
listarProductosPorNombreCategoria, listarProductosPorNombreCategoria,
listarProductoPorNombreProveedor, modificarProducto, eliminarProducto,
modificarStockProducto}
























































