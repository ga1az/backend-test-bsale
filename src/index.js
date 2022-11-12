import app from "./app.js";

// Encendemos el servidor en el puerto 3000|
const main = () => {
  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
};

main();
