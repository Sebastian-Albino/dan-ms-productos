import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createCategoria(cat){

    try{
        return await prisma.categoria.create({
            data: {
                nombre: cat.nombre
            }
        });
    }
    catch(error){
        throw error;
    }
}


async function getCategoriaById(catId){

    try{

        return await prisma.categoria.findUnique({
            where: {
                id: parseInt(catId)
            } 
        });
    }
    catch(error){
        throw error;
    }
}

async function getCategoriaByName(catName){

    try{

        return await prisma.categoria.findMany({
            where: {
                nombre: {contains: catName}
            } 
        });
    }
    catch(error){
        throw error;
    }
}

async function getAllCategorias(){

    try{

        return await prisma.categoria.findMany();
    }
    catch(error){
        throw error;
    }
}

export default {createCategoria, getAllCategorias, getCategoriaById,
getCategoriaByName}