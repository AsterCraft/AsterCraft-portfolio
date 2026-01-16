import type { DeepString } from "@shared/lib/i18n/types";
const en = {
  heading: "Start with a consultation - fill out a form",

  infoForm: {
    heading: "Sign up for a free consultation, in which you’ll get:",
    first: "Answers for all of your questions",
    double: "List of your requirements from the website",
    third: "Unique proposition adjusted for your budget",
  },
  comment:
    "After you feel like you were completely understood - we will transform your business-tasks into finished solutions.",
} as const;

export type Translation = DeepString<typeof en>;
export default en;
