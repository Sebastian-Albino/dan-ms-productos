import { Router } from "express";
import controller from "../controllers/ProveedorController.js";

const routerProveedor = Router();


routerProveedor.post('/', controller.crearProveedor);
routerProveedor.get('/nombre/:nombre', controller.listarProveedoresPorNombre);
routerProveedor.get('/id/:id', controller.listarProveedorPorId);

export default routerProveedor;
