import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/_index.tsx"),
  route("uk", "./routes/uk._index.tsx"),
  route("uk/contact", "./routes/uk.contact.tsx"),
] satisfies RouteConfig;
