import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/index.tsx"),
  route("uk", "./routes/uk/index.tsx"),
  route("en", "./routes/en/index.tsx"),
  route("api/locales/:lng/:ns", "./routes/locales.ts"),
] satisfies RouteConfig;
