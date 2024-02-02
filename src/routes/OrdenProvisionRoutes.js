import { Router } from "express";
import controller from "../controllers/OrdenProvisionController.js";

const routerOrdenProvision = Router();

routerOrdenProvision.post('/', controller.crearOrdenProvision);
routerOrdenProvision.get('/', controller.listarOrdenes);
routerOrdenProvision.get('/:id', controller.listarOrdenesPorId);
routerOrdenProvision.get('/proveedor/:id', controller.listarOrdenesPorIdProveedor);
routerOrdenProvision.get('/fecha/:id', controller.listarOrdenesPorFecha);
routerOrdenProvision.put('/:id', controller.modificarOrden);
routerOrdenProvision.put('/estado/:id', controller.modificarEstadoOrden);

export default routerOrdenProvision;