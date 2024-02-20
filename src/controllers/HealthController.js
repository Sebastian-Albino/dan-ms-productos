import { json } from "express";

async function mostrarEstado(req, res){
 
    try{
        res.json({
            app: "ms-productos",
            status: "OK"
        });
        return res.status(200).json();
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
}

export default { mostrarEstado }