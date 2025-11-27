import globalEnSchemas from "./en";
import globalUkSchemas from "./uk";

const globalSchemas = {
  en: globalEnSchemas,
  uk: globalUkSchemas,
} as const;

export default globalSchemas;
