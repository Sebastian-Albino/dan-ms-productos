import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createDetalle(detalleOrden) {
    
    try{
        return await prisma.ordenProvisionDetalle.create({
            data: {
            fechaGeneracion: detalleOrden.fechaGeneracion,
            fechaRecepcion: detalleOrden.fechaGeneracion,
            esCancelada: detalleOrden.esCancelada,
            ordenProvisionId: {connect: {id: detalleOrden.ordenProvisionId}}
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getDetalleById(ordId){

    try{

        return await prisma.ordenProvisionDetalle.findUnique({
            where: {
                id: parseInt(ordId)
            } 
        });
    }
    catch(error){
        throw error;
    }
}

async function getAllDetalles(){

    try{
        return await prisma.ordenProvisionDetalle.findMany();
    }
    catch(error){
        throw error;
    }
}

async function getDetalleByOrdenId(idOrden){

    try{
        return await prisma.ordenProvisionDetalle.findMany({
            where: {
                ordenProvisionId: {
                    id: parseInt(idOrden)
                }
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getDetalleByProductoId(prodId){

    try{
        return await prisma.ordenProvisionDetalle.findMany({
            where: {
                productoId: parseId(prodId)
            }
        });
    }
    catch(error){
        throw error;
    }
}



async function updateOrden(idOrden, orden) {
    
    try{
        return await prisma.ordenProvision.update({
            where: {
                id: parseInt(idProd)
            },
            data: {
            fechaGeneracion: orden.fechaGeneracion,
            fechaRecepcion: orden.fechaGeneracion,
            esCancelada: orden.esCancelada,
            proveedorId: {connect: {id: prod.proveedorId}}
            }
        });
    }
    catch(error){
        throw error;
    }
}

export default {createOrden, getAllOrdenes, getOrdenById, getOrdenByProveedorId,
    getOrdenesPorFecha, updateEstadoOrden, updateOrden}

