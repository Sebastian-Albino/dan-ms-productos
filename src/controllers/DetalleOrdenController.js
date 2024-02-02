import detalleOrdenService from "../services/DetalleOrdenService.js";

async function crearDetalleOrden(req, res){

    const detalle = req.body;
    const camposFaltantes = checkData(req);

    if(camposFaltantes.length > 0){
        return res.status(400).json({
            error: "Campos incompletos",
            camposFaltantes: camposFaltantes
        });
    }

    try{

        const detalleCreado = await detalleOrdenService.crearDetalle(detalle);
        return res.status(201).json(detalleCreado);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

function checkData(prod) {
    let camposFaltantes = [];

    if(!prod.nombre) camposFaltantes.push('nombre');
    if(!prod.descripcion) camposFaltantes.push('descripcion');
    if(!prod.proveedorId) camposFaltantes.push('proveedorId');
    if(!prod.stockActual) camposFaltantes.push('stockActual');
    if(!prod.categoriaId) camposFaltantes.push('categoriaId');
    
    return camposFaltantes;
}

async function listarDetalles(req, res){

    try{
        const detalles = await detalleOrdenService.listarDetalles();
        return res.status(200).json(detalles);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

async function listarDetallePorId(req, res){

    try{
        const idDet = req.params.id;
        const detalle = await detalleOrdenService.listarDetallePorId(idDet);
        return res.status(200).json(detalle);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

async function listarDetallesPorOrden(req, res){

    try{
        const idOrden = req.params.id;
        const detalles = await detalleOrdenService.listarDetallesPorOrden(idOrden);
        return res.status(200).json(detalles);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function listarDetallesPorIdProducto(req, res){

    try{
        const idProd = req.params.id;
        const detalles = await detalleOrdenService.listarDetallesPorOrden(idProd);
        return res.status(200).json(detalles);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function modificarDetalle(req, res){

    try{
        const idDet = req.params.id;
        const detalle = await detalleOrdenService.modificarDetalle(idDet);
        return res.status(200).json(detalle);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

export default {crearDetalleOrden, listarDetalles, listarDetallePorId,
listarDetallesPorIdProducto, listarDetallesPorOrden,
modificarDetalle}


































































