import express from "express";
import {
  getAllCategories,
  getProductsByCategory,
} from "../controller/category.controller.js";

const router = express.Router();

//Rutas de categorias
/**
 * @openapi
 * /api/categories:
 *  get:
 *    tags:
 *    - Categories
 *    summary: Listado de categorias
 *    description: Obtener todas las categorias
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.get("/", getAllCategories);

/**
 * @openapi
 * /api/categories/{id}/products:
 *  get:
 *    tags:
 *    - Categories
 *    summary: Listado de productos por categoria
 *    description: Obtener todos los productos que pertenecen a una categoria
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID de la categoria
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      404:
 *        description: Not Found
 */
router.get("/:id/products", getProductsByCategory);

export default router;
