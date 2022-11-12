import express from "express";
import {
  getAllProducts,
  getProductById,
  getProductByName,
} from "../controller/product.controller.js";

const router = express.Router();

//Rutas de productos
/**
 * @openapi
 * /api/products:
 *  get:
 *    tags:
 *    - Products
 *    summary: Listado de productos
 *    description: Obtener todas los productos
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.get("/", getAllProducts);

/**
 * @openapi
 * /api/products/{id}:
 *  get:
 *    tags:
 *    - Products
 *    summary: Listado de productos por id
 *    description: Obtener un producto por su id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID del producto
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
router.get("/:id", getProductById);

/**
 * @openapi
 * /api/products/name/{name}:
 *  get:
 *    tags:
 *    - Products
 *    summary: Buscar productos por nombre
 *    description: Buscador de productos por el nombre
 *    parameters:
 *      - name: name
 *        in: path
 *        description: Nombre del producto
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      404:
 *        description: Not Found
 */
router.get("/name/:name", getProductByName);

export default router;
