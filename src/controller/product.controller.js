import { getConnection } from "../database/database.js";

// Obtener todos los productos /products/
const getAllProducts = async (req, res) => {
  const connection = await getConnection();
  const sql = "SELECT * FROM product";
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

// Obtener un producto por su id /products/:id
const getProductById = async (req, res) => {
  const connection = await getConnection();
  const sql = `SELECT * FROM product WHERE id = ${req.params.id}`;
  connection.query(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else if (rows.length === 0) {
      res.status(404).json({ message: "No product found" });
    } else {
      res.json(rows);
    }
  });
};

// Obtener un producto por su nombre /products/name/:name
const getProductByName = async (req, res) => {
  const connection = await getConnection();
  const name = req.params.name;
  const sql = `SELECT * FROM product WHERE name LIKE '${name.toUpperCase()}%'`;
  connection.query(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else if (rows.length === 0) {
      res.status(404).json({ message: "No product found" });
    } else {
      res.json(rows);
    }
  });
};

export { getAllProducts, getProductById, getProductByName };
