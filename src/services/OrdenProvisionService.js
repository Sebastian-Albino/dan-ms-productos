import ordenRepo from "../repositories/OrdenProvisionRepo.js";


async function crearOrden(orden){

    return await ordenRepo.createOrden(orden);
}

async function listarOrdenes(){
    //TODO: validar logica de negocio
    return await ordenRepo.getAllOrdenes();
}

async function listarOrdenPorId(idOrden){
    return await ordenRepo.getOrdenById(idOrden)
}


async function listarOrdenesPorProveedor(idProv){

    return await ordenRepo.getOrdenByProveedorId(idProv);
}

async function listarOrdenesPorFecha(desde, hasta){

    return await ordenRepo.getOrdenesPorFecha(desde, hasta);
}

async function modificarOrden(idOrden, orden){

    return await ordenRepo.updateOrden(idOrden, orden);
}

async function modificarEstadoOrden(idOrden, fechaRecep){

    return await ordenRepo.updateEstadoOrden(idOrden, fechaRecep);
}

export default {crearOrden, listarOrdenes, listarOrdenesPorFecha,
listarOrdenesPorProveedor, modificarEstadoOrden, modificarOrden,
listarOrdenPorId}