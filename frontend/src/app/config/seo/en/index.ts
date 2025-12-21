import organizationSchema from "./organization-schema";
import webSiteSchema from "./website-schema";

const globalEnSchemas = {
  organizationSchema,
  webSiteSchema,
} as const;

export default globalEnSchemas;
