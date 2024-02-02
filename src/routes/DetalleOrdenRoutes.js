import { Router } from "express";
import controller from "../controllers/DetalleOrdenController.js";

const routerDetalleOrden = Router();

routerDetalleOrden.post('/', controller.crearDetalleOrden);
routerDetalleOrden.get('/', controller.listarDetalles);
routerDetalleOrden.get('/:id', controller.listarDetallePorId);
routerDetalleOrden.get('/orden/:id', controller.listarDetallesPorOrden);
routerDetalleOrden.get('/producto/:id', controller.listarDetallesPorIdProducto);
routerDetalleOrden.put('/:id', controller.modificarDetalle);

export default {routerDetalleOrden}
