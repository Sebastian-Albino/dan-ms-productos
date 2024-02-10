import ordenRepo from "../repositories/OrdenProvisionRepo.js";
import productoRepo from "../repositories/ProductoRepo.js";
import detalleOrdenRepo from "../repositories/DetalleOrdenRepo.js";


async function crearOrden(orden){

    try {
        
        await Promise.all(orden.detalles.map(async detalle => {

            const prod = await productoRepo.getProductoById(detalle.productoId);

            if(!prod)
                console.log("Producto no encontrado"); //TODO: Hacer excepcion

            if(prod.stockActual < detalle.catidad)
                console.log("Stock insuficiente"); //TODO: hacer excepcion

            if(prod.proveedorId !== orden.proveedorId)
                console.log("Los productos deben pertenecer al mismo proveedor"); //TODO: hacer exc

        }));

        const ordenCreada = await ordenRepo.createOrden(orden);
        await Promise.all(orden.detalles.map(async detalle => {
            detalle.ordenProvisionId = ordenCreada.id;
            await detalleOrdenRepo.createDetalle(detalle);
        }));
        return ordenCreada;
    } catch (error) {
        throw error;
    }

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