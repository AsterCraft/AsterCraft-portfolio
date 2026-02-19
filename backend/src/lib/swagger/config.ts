import env from "@lib/env";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AsterCraft API",
      version: "1.0.0",
      description:
        "Backend API for AsterCraft projects - handles contact form submissions",
      contact: {
        name: "AsterCraft",
      },
    },
    tags: [
      {
        name: "Health",
        description: "Health check endpoints",
      },
      {
        name: "Documentation",
        description: "Documentation endpoints",
      },
      {
        name: "Email",
        description: "Email sending endpoints",
      },
    ],
  },

  apis: ["./src/app.ts", "./src/lib/swagger/schemas.ts"],
} satisfies swaggerJsdoc.Options;

const openApiSpecification = swaggerJsdoc(options);

export default openApiSpecification;
