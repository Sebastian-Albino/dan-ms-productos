import proveedorService from "../services/ProveedorService.js";

//TODO: agregar metodo para crear

async function crearProveedor(req, res){
 
    try{
        const prov = req.body;
        const provCreado = await proveedorService.crearProveedor(prov);
        return res.status(201).json(provCreado);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}



async function listarProveedoresPorNombre(req, res){

    try{
        const nombre = req.params.nombre;
        console.log(nombre);
        const proveedores = await proveedorService.listarProveedorPorNombre(nombre);
        return res.status(200).json(proveedores);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

async function listarProveedorPorId(req, res){

    try{
        const idProv = req.params.id;
        const proveedor = await proveedorService.listarProveedorPorId(idProv);
        return res.status(200).json(proveedor);
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}


export default {listarProveedorPorId, listarProveedoresPorNombre,
crearProveedor}

