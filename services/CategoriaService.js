import categoriaRepo from "../repositories/CategoriaRepo";

async function createCategoria(categoria){

    return await categoriaRepo.createCategoria(categoria);
}

async function listarCategoriaPorId(idCat){

    return await categoriaRepo.getCategoriaById(idCat);
}

async function listarCategorias(){
    return await categoriaRepo.getAllCategorias();
}

async function listarCategoriasPorNombre(nombre){

    return await categoriaRepo.getCategoriaByName(nombre);
}

export default {createCategoria, listarCategoriaPorId,
listarCategorias, listarCategoriasPorNombre}