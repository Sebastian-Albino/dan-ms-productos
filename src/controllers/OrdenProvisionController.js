import ordenProvisionService from "../services/OrdenProvisionService.js";
import productoService from "../services/ProductoService.js";

async function crearOrdenProvision(req, res){

    const orden = req.body;
    const camposFaltantes = checkData(orden);

    if(camposFaltantes.length > 0){
        return res.status(400).json({
            error: 'Campos incompletos',
            camposFaltantes: camposFaltantes
        });
    }

    if(orden.esCancelada)
       return res.status(400).json({
        error: 'No se puede crear una orden cancelada'
        });

    if(orden.fechaRecepcion)
        return res.status(400).json({
            error: 'No se puede crear una orden ya recibida'
        });
    
    try{

        const ordenProv = await ordenProvisionService.crearOrden(orden);
        return res.status(201).json(ordenProv);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
   
}

function checkData(orden) {
    let camposFaltantes = [];

    //Se comenta el check de fecha generacion porque ya esta
    //como default la actual de la máquina en la db y la fecha
    // recepcin esta por defecto como null
    //if(!orden.fechaGeneracion) camposFaltantes.push('fechaGeneracion');
    //if(!orden.fechaRecepcion) camposFaltantes.push('fechaRecepcion');
    if(!orden.proveedorId) camposFaltantes.push('proveedorId');
    if(orden.esCancelada) camposFaltantes.push('esCancelada');
    
    return camposFaltantes;
}


async function listarOrdenes(req, res){

    try{
        const ordenes = await ordenProvisionService.listarOrdenes();
        return res.status(200).json(ordenes);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}



async function listarOrdenesPorId(req, res){

    try{
        const idOrden = req.params.id;
        const orden = await ordenProvisionService.listarOrdenPorId(idOrden);
        return res.status(200).json(orden);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function listarOrdenesPorIdProveedor(req, res){

    try{
        const idProv = req.params.id;
        console.log(idProv);
        const ordenes = await ordenProvisionService.listarOrdenesPorProveedor(idProv);
        return res.status(200).json(ordenes);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function listarOrdenesPorFecha(req, res){

    try{
        const fechaDesde = req.params.desde;
        const fechaHasta = req.params.hasta;
        const orden = await ordenProvisionService.listarOrdenesPorFecha(fechaDesde, fechaHasta);
        return res.status(200).json(orden);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function modificarOrden(req, res){

    try{
        const idOrden = req.params.id;
        const orden = req.body;
        const ordenResultante = await ordenProvisionService.modificarOrden(idOrden, orden);
        return res.status(200).json(ordenResultante);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


async function modificarEstadoOrden(req, res){

    try{
        const idOrden = req.params.id;
        const fechaRecep = req.params.fechaRecep;
        const orden = await ordenProvisionService.modificarEstadoOrden(idOrden, fechaRecep);

        if(orden.fechaRecepcion)
            return res.status(200).json({
                orden: orden,
                productos: actualizarStockProds(orden.id)
            });
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

async function actualizarStockProds(idOrden){

    try{
        const detalles = await detalleOrdenService.listarDetallesPorOrden(idOrden);
        let productosAct = [];

        detalles.forEach(async detalle => {
            const prod = await productoService.
            modificarStockProducto(detalle.productoId, detalle.cantidad);
            productosAct.push(prod);
            
        });

        return res.status(200).json(productosAct);
        
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}




export default {crearOrdenProvision, listarOrdenes, listarOrdenesPorFecha,
listarOrdenesPorId, listarOrdenesPorIdProveedor, modificarOrden,
modificarEstadoOrden, actualizarStockProds}




































































