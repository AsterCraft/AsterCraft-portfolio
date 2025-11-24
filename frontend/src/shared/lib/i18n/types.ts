/**
 * Transforms a translation object type to allow different string values
 * while preserving the exact structure (keys and nesting)
 *
 * @example
 * const en = {greeting: "Hello"} as const;
 * type Translation = DeepString<typeof en>;
 * const uk = {greeting: "Привіт"} as const satisfies Translation;
 */
export type DeepString<T> = T extends object
  ? { [K in keyof T]: DeepString<T[K]> }
  : string;
