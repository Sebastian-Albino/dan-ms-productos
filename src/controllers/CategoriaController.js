import categoriaService from "../services/CategoriaService.js";

async function crearCategoria(req, res) {
  try {
    const nombre = req.body;
    // console.log(nombre);
    const cat = await categoriaService.createCategoria(nombre);
    return res.status(201).json(cat);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

async function listarCategoriasPorNombre(req, res) {
  try {
    const nombre = req.params.nombre;
    const cats = await categoriaService.listarCategoriasPorNombre(nombre);
    return res.status(200).json(cats);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

async function listarCategoriaPorId(req, res) {
  try {
    const idCat = req.params.id;
    const cat = await categoriaService.listarCategoriaPorId(idCat);
    if (!cat) {
      return res.status(404).json();
    }
    return res.status(200).json(cat);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

async function listarCategorias(req, res) {
  try {
    const cats = await categoriaService.listarCategorias();
    return res.status(200).json(cats);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export default {
  listarCategoriaPorId,
  listarCategoriasPorNombre,
  listarCategorias,
  crearCategoria,
};
