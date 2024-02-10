import Express from "express";

import routerProductos from "./src/routes/ProductoRoutes.js"
import routerOrdenProvision from "./src/routes/OrdenProvisionRoutes.js"
import routerProveedores from "./src/routes/ProveedorRoutes.js"
import routerCategoria from "./src/routes/CategoriaRoutes.js"

const PORT = process.env.PORT ?? 1234;

const app = Express();
app.use(Express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Etapa 2 TP DAN corriendo"
    })
})

//use de routers

app.use('/api/producto', routerProductos);
app.use('/api/orden', routerOrdenProvision);
app.use('/api/proveedor', routerProveedores);
app.use('/api/categoria', routerCategoria);

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada (404)</h1>')
});

app.listen(PORT, () => {
    console.log("Server escuchando en puerto http://localhost:" + PORT.toString());
})














