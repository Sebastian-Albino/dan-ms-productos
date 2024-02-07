import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createOrden(orden) {
    
    try{
        return await prisma.ordenProvision.create({
            data: {
            fechaGeneracion: orden.fechaGeneracion,
            fechaRecepcion: orden.fechaGeneracion,
            esCancelada: orden.esCancelada,
            proveedor: {connect: {id: prod.proveedorId}}
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getOrdenById(ordId){

    try{

        return await prisma.ordenProvision.findUnique({
            where: {
                id: parseInt(ordId)
            } 
        });
    }
    catch(error){
        throw error;
    }
}

async function getAllOrdenes(){

    try{
        return await prisma.ordenProvision.findMany();
    }
    catch(error){
        throw error;
    }
}

async function getOrdenByProveedorId(idProv){

    try{
        return await prisma.ordenProvision.findMany({
            where: {
                proveedor: {
                    id: parseInt(idProv)
                }
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getOrdenesPorFecha(desde, hasta){

    try{
        return await prisma.ordenProvision.findMany({
            where: {
                fechaGeneracion:{
                    gte: desde,
                    lte: hasta
                }
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
                id: parseInt(idOrden)
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

async function updateEstadoOrden(idOrden, fechaRecep){

    try{

        const recibida = fechaRecep !== null;
        if(!recibida){
            return await prisma.ordenProvision.update({
                where:{
                    id: parseInt(idOrden)
                },
                data: {
                    esCancelada: true
                }
            });
        }
        else{
            return await prisma.ordenProvision.update({
                where:{
                    id: parseInt(idProd)
                },
                data: {
                    esCancelada: false,
                    fechaRecepcion: fechaRecep
                }
            });
        }
    }
    catch(error){
        throw error;
    }
}

export default {createOrden, getAllOrdenes, getOrdenById, getOrdenByProveedorId,
    getOrdenesPorFecha, updateEstadoOrden, updateOrden}

