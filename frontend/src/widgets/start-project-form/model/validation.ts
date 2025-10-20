import { z } from "zod";
import i18n from "@shared/lib/i18n";

const t = (key: string) => i18n.t(key, { ns: "startProjcetForm" });

export const firstNameSchema = z
  .string()
  .min(1, t("validation.firstName.required"))
  .min(2, t("validation.firstName.tooShort"))
  .max(50, t("validation.firstName.tooLong"));

export const emailSchema = z
  .email(t("validation.email.invalid"))
  .min(1, t("validation.email.required"));

export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, t("validation.phone.invalid"))
  .optional()
  .or(z.literal(""));

export const telegramSchema = z
  .string()
  .regex(/^@?[a-zA-Z][a-zA-Z0-9_.]{4,31}$/, t("validation.telegram.invalid"))
  .optional()
  .or(z.literal(""));

export const messageSchema = z
  .string()
  .max(5000, t("validation.message.tooLong"))
  .optional()
  .or(z.literal(""));

export const contactFormSchema = z.object({
  firstName: firstNameSchema,
  email: emailSchema,
  phone: phoneSchema,
  telegram: telegramSchema,
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type FieldName = keyof ContactFormData;
