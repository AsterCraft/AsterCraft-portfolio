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
    servers: [
      {
        url: "https://backend-prod-6575778207.europe-central2.run.app",
        description: "Production server",
      },
      {
        url: "https://backend-dev-6575778207.europe-central2.run.app",
        description: "Development server",
      },
      {
        url: `http://localhost:${env.PORT}`,
        description: "Local development",
      },
    ],
    tags: [
      {
        name: "Health",
        description: "Health check endpoints",
      },
      {
        name: "Email",
        description: "Email sending endpoints",
      },
    ],
  },

  explorer: true,

  apis: ["./src/app.ts", "./src/lib/swagger/schemas.ts"],
} satisfies swaggerJsdoc.Options;

const openApiSpecification = swaggerJsdoc(options);

export default openApiSpecification;
