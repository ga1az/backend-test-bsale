// Importaciones
import express from "express";
import * as dotenv from "dotenv";
import productRoutes from "./routes/product.js";
import categoryRoutes from "./routes/category.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.js";
import cors from "cors";

// configuracion dotenv
dotenv.config();

// Inicializaciones
const app = express();
// Middleware para recibir datos en formato json
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Puerto
const port = process.env.PORT || 3000;

app.set("port", port);

// Exportar la app
export default app;
