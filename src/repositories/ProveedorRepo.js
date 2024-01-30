import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createProveedor(prov){

    try{
        return await prisma.proveedor.create({
            data: {
                nombre: prov.nombre,
                mail: prov.mail
            }
        });
    }
    catch(error){
        throw error;
    }
}


async function getProveedorById(provId){

    try{

        return await prisma.proveedor.findUnique({
            where: {
                id: parseInt(provId)
            } 
        });
    }
    catch(error){
        throw error;
    }
}

async function getProveedorByName(provName){

    try{

        return await prisma.proveedor.findMany({
            where: {
                nombre: {contains: provName}
            } 
        });
    }
    catch(error){
        throw error;
    }
}

async function getAllProveedores(){

    try{

        return await prisma.proveedor.findMany();
    }
    catch(error){
        throw error;
    }
}

export default {createProveedor, getAllProveedores, getProveedorById,
    getProveedorByName}