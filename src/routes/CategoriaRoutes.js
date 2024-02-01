import { Router } from "express";
import controller from "../controllers/CategoriaController";

const routerCategoria = Router();

routerCategoria.post('/', controller.crearCategoria);
routerCategoria.get('/', controller.listarCategorias);
routerCategoria.get('/id/:id', controller.listarCategoriaPorId);
routerCategoria.get('/nombre/:nombre', controller.listarCategoriasPorNombre);

export default {routerCategoria}
