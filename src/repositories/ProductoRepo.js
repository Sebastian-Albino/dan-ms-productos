import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createProducto(prod) {
    //console.log(prod);
    try{
        return await prisma.producto.create({
            data: {
                nombre: prod.nombre,
                descripcion: prod.descripcion,
                stockActual: prod.stockActual,
                proveedor: {
                    connect: {
                        id: prod.proveedorId
                    }
                },
                categoria: {
                    connect: {
                        id: prod.categoriaId
                    }
                }
                
            }
        });
    }
    catch(error){
        console.error(error);
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
        let nameClause = {};
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
                categoria: {
                    nombre: {
                        contains: nombreCat
                    }
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

async function getProductoByProveedor(nombreProv){

    try{
        return await prisma.producto.findMany({
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

// Solo se modifican los campos pasados en el body,
// los demas campos no pasados quedan como estaban en la db
async function updateProducto(idProd, prod) {
    
    try{
        const prodDb = await getProductoById(idProd);

        return await prisma.producto.update({
            where: {
                id: parseInt(idProd)
            },
            data: {
            nombre: prod.nombre ? prod.nombre : prodDb.nombre,
            descripcion: prod.descripcion ? prod.descripcion : prodDb.descripcion,
            stockActual: prod.stockActual ? prod.stockActual : prodDb.stockActual,
            proveedorId: prod.proveedorId ? prod.proveedorId : prodDb.proveedorId,
            categoriaId: prod.categoriaId ? prod.categoriaId : prodDb.categoriaId
            }
        });
    }
    catch(error){
        throw error;
    }
}

async function updateStockProducto(idProd, cantidad){

    try{
        const updatedProd = prisma.producto.update({
            where: {
                id: idProd
            },
            data: {
                stockActual: {
                    decrement: cantidad
                }
            }
        });
        return updatedProd;
    }catch(error){
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
    updateProducto,updateStockProducto, deleteProducto}

