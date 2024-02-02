import { Router } from "express";
import controller from "../controllers/ProveedorController.js";

const routerProveedor = Router();

routerProveedor.get('/:nombre', controller.listarProveedoresPorNombre);
routerProveedor.get('/:id', controller.listarProveedorPorId);

export default {routerProveedor}
