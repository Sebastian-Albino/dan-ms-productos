import proveedorRepo from "../repositories/ProveedorRepo.js";

async function crearProveedor(proveedor){

    return await proveedorRepo.createProveedor(proveedor);
}

async function listarProveedorPorId(idProv){

    return await proveedorRepo.getProveedorById(idProv);
}

async function listarProveedores(){
    return await proveedorRepo.getAllProveedores();
}

async function listarProveedorPorNombre(nombre){

    return await proveedorRepo.getProveedorByName(nombre);
}

export default {crearProveedor, listarProveedorPorId, listarProveedores,
listarProveedorPorNombre}