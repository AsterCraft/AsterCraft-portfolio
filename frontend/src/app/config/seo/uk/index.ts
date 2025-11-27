import organizationSchema from "./organization-schema";
import webSiteSchema from "./website-schema";

const globalUkSchemas = {
  organizationSchema,
  webSiteSchema,
} as const;

export default globalUkSchemas;
