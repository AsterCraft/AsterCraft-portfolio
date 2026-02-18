import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AsterCraft API",
      version: "1.0.0",
      description: "Backend API for AsterCraft projects",
    },
  },

  explorer: true,

  apis: ["./src/features/**/*.ts", "./src/lib/api-responses/index.ts"],
} satisfies swaggerJsdoc.Options;

const openApiSpecification = swaggerJsdoc(options);

export default openApiSpecification;
