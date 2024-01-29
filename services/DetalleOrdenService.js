import detalleRepo from "../repositories/DetalleOrdenRepo";


async function crearDetalle(detalleOrden){

    return await detalleRepo.createDetalle(detalleOrden);
}

async function listarDetalles(){
    //TODO: validar logica de negocio
    return await detalleRepo.getAllDetalles();
}

async function listarDetallePorId(idDetalle){

    return await detalleRepo.getDetalleById(idDetalle);
}


async function listarDetallesPorOrden(idOrden){

    return await detalleRepo.getDetalleByOrdenId(idOrden);
}

async function listarDetallePorIdProducto(idProd){

    return await detalleRepo.getDetalleByProductoId(idProd);
}

async function modificarDetalle(idDetalle, detalleOrd){

    return await detalleRepo.updateDetalle(idDetalle, detalleOrd);
}


export default {crearDetalle, listarDetallePorId, listarDetalles,
listarDetallePorIdProducto, listarDetallesPorOrden}