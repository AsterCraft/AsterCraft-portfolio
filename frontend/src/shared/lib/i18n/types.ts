type Immutabletkeys = "id";

/**
 * Transforms a translation object type to allow different string values
 * while preserving the exact structure (keys and nesting)
 *
 * Keys listed in ImmutableKeys preserve their literal types to ensure
 * consistency across all translations (e.g., IDs).
 *
 * @example
 * const en = {greeting: "Hello"} as const;
 * type Translation = DeepString<typeof en>;
 * const uk = {greeting: "Привіт"} as const satisfies Translation;
 */
export type DeepString<T> = T extends object
  ? { [K in keyof T]: K extends Immutabletkeys ? T[K] : DeepString<T[K]> }
  : string;
