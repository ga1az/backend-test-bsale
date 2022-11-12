import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

// Coneccion a la base de datos MySQL, usando createPool para evitar error de conexion
const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Exportar la conexion manejando errores
const getConnection = () => {
  return new Promise((resolve, reject) => {
    connection.getConnection((err, conn) => {
      if (err) {
        reject(err);
      } else {
        resolve(conn);
      }
    });
  });
};

export { getConnection };
