import { Router } from "express";
import controller from "../controllers/ProductoController";

const routerProductos = Router();

routerProductos.post('/', controller.crearProducto);
routerProductos.get('/', controller.listarProductos);
routerProductos.get('/:id', controller.listarProductoPorId);
routerProductos.get('/proveedor/:nombre', controller.listarProductoPorNombreProveedor);
routerProductos.get('/categoria/:nombre', controller.listarProductosPorNombreCategoria);
routerProductos.get('/stock/:cantidad', controller.listarProductoPorStockActual);
routerProductos.put('/:id', controller.modificarProducto);
routerProductos.delete('/:id', controller.eliminarProducto);