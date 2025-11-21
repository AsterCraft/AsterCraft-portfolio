import { z } from "zod";
import i18n from "i18next";

export const createContactFormSchema = () => {
  return z.object({
    firstName: z
      .string()
      .min(1, i18n.t("startProjectForm:validation.firstName.required"))
      .min(2, i18n.t("startProjectForm:validation.firstName.tooShort"))
      .max(50, i18n.t("startProjectForm:validation.firstName.tooLong")),

    email: z
      .email(i18n.t("startProjectForm:validation.email.invalid"))
      .min(1, i18n.t("startProjectForm:validation.email.required")),

    // doesnt allow whitespaces - change it?
    phone: z
      .string()
      .regex(
        /^\+?[1-9]\d{1,14}$/,
        i18n.t("startProjectForm:validation.phone.invalid")
      )
      .optional()
      .or(z.literal("")),

    telegram: z
      .string()
      .regex(
        /^@?[a-zA-Z][a-zA-Z0-9_.]{4,31}$/,
        i18n.t("startProjectForm:validation.telegram.invalid")
      )
      .optional()
      .or(z.literal("")),

    message: z
      .string()
      .max(5000, i18n.t("startProjectForm:validation.message.tooLong"))
      .optional()
      .or(z.literal("")),
  });
};

export type ContactFormData = z.infer<
  ReturnType<typeof createContactFormSchema>
>;

export type FieldName = keyof ContactFormData;
