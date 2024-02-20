import { Router } from "express";
import controller from "../controllers/HealthController.js";

const routerHealth = Router();


routerHealth.get('/', controller.mostrarEstado);

export default routerHealth;
