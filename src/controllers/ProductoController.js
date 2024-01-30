import productoService from "../services/ProductoService";

async function crearProducto(req, res){

    const prod = req.body;
    const camposFaltantes = checkData(req);

    if(camposFaltantes.length > 0){
        return res.status(400).json({
            error: "Faltan campos",
            camposFaltantes: camposFaltantes
        })
    }

    try{

        const producto = productoService.crearProducto(prod);
        return res.status(200).json(producto);
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
        const productos = productoService.listarProductos(prod);
        return res.status(200).json(productos);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function listarProductoPorId(req, res){

    try{
        const id = req.params.id;
        const producto = productoService.listarProductoPorId(id);
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
        const productos = productoService.listarProductosPorCategoria(nombre);
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
        const productos = productoService.listarProductosPorProveedor(nombre);
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
        const productos = productoService.listarProductosPorStock(cantidad);
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
        const producto = productoService.modificarProducto(id, prod);
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
        const producto = productoService.eliminarProducto(id);
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
listarProductoPorNombreProveedor, modificarProducto, eliminarProducto}
























































