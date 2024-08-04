import { json } from "express";

async function mostrarEstado(req, res){
 
    try{
        res.status(200).json({
            app: "ms-productos",
            status: "OK"
        });
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

export default { mostrarEstado }