import type { DeepString } from "@shared/lib/i18n/types";

const en = {} as const;

export type Translation = DeepString<typeof en>;

export default en;
