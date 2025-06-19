/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  bracketSameLine: false,

  proseWrap: "preserve",

  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
