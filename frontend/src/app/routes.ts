import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/_index.tsx"),
  route("uk", "./routes/uk._index.tsx"),
  route("en", "./routes/en._index.tsx"),
  route("api/locales/:lng/:ns", "./routes/api.locales.$lng.$ns.ts"),
] satisfies RouteConfig;
