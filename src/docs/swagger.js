import swaggerJsdoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "Backend Ecoomerce Bsale",
    version: "1.0.0",
    description: "Api REST para prueba tecnica de Bsale",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    schemas: {
      Category: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID de la categoria",
          },
          name: {
            type: "string",
            description: "Nombre de la categoria",
          },
        },
      },
      Product: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID del producto",
          },
          name: {
            type: "string",
            description: "Nombre del producto",
          },
          price: {
            type: "float",
            description: "Precio del producto",
          },
          discount: {
            type: "int",
            description: "Descuento del producto",
          },
          url_image: {
            type: "string",
            description: "URL de la imagen del producto",
          },
          category: {
            type: "integer",
            description: "ID de la categoria del producto",
          },
        },
      },
    },
  },
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

export default swaggerJsdoc(swaggerOptions);
