import { getConnection } from "../database/database.js";

// Obtener todas las categorias /categories/
const getAllCategories = async (req, res) => {
  const connection = await getConnection();
  const sql = "SELECT * FROM category";
  connection.query(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else if (rows.length === 0) {
      res.status(404).json({ message: "No categories found" });
    } else {
      res.json(rows);
    }
  });
};

// Obtener todos los productos de una categoria /categories/:id/products
const getProductsByCategory = async (req, res) => {
  const connection = await getConnection();
  const sql = `SELECT * FROM product WHERE category = ${req.params.id}`;
  connection.query(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else if (rows.length === 0) {
      res.status(404).json({ message: "No products found" });
    } else {
      res.json(rows);
    }
  });
};

export { getAllCategories, getProductsByCategory };
