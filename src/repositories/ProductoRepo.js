import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createProducto(prod) {
    
    try{
        return await prisma.producto.create({
            data: {
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            stockActual: prod.stockActual,
            proveedorId: {connect: {id: prod.proveedorId}},
            categoriaId: {connect: {id: prod.categoriaId}}
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getProductoById(prodId){

    try{

        return await prisma.producto.findUnique({
            where: {
                id: parseInt(prodId)
            },
            include: {
                proveedor: true,
                categoria: true
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getProductosByNombre(nombreProd){

    try{
        const nameClause = {};
        if(nombreProd !== null){
            nameClause = {nombre: {contains: nombreProd}};
        }
        return await prisma.producto.findMany({
            where: nameClause,
            include: {
                proveedor: true,
                categoria: true
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getProductosByNombreDeCat(nombreCat){

    try{
        return await prisma.producto.findMany({
            where: {
                categoria: nombreCat
            },
            include: {
                proveedor: true,
                categoria: true
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getProductoByProveedor(nombreProv){

    try{
        return await prisma.findMany({
            where: {
                proveedor: {
                    nombre: {contains: nombreProv}
                }
            },
            include: {
                proveedor: true,
                categoria: true
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function getProductosByStock(stock){

    try{

        return await prisma.producto.findMany({
            where: {
                stockActual: parseInt(stock)
            },
            include: {
                proveedor: true,
                categoria: true
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function updateProducto(idProd, prod) {
    
    try{
        return await prisma.producto.update({
            where: {
                id: parseInt(idProd)
            },
            data: {
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            stockActual: prod.stockActual,
            proveedorId: {connect: {id: prod.proveedorId}},
            categoriaId: {connect: {id: prod.categoriaId}}
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function deleteProducto(idProd){

    try{
        return await prisma.producto.delete({
            where:{
                id: parseInt(idProd)
            }
        });
    }
    catch(error){
        throw error;
    }
}

export default {createProducto, getProductoById, getProductoByProveedor,
    getProductosByNombre, getProductosByNombreDeCat, getProductosByStock,
    updateProducto, deleteProducto}

