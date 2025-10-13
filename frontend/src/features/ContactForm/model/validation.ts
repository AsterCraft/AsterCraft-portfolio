import { z } from "zod";

export const firstNameSchema = z
  .string()
  .min(1, "Name is required")
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name is too long");

export const emailSchema = z
  .email("Please enter a valid email address")
  .min(1, "Email is required");

export const phoneSchema = z
  .string()
  .regex(
    /^\+?[1-9]\d{9,12}$/,
    "Please enter a valid phone number (e.g. +380321973018)"
  )
  .optional()
  .or(z.literal(""));

export const telegramSchema = z
  .string()
  .regex(
    /^@?[a-zA-Z][a-zA-Z0-9_.]{4,31}$/,
    "Please enter a valid Telegram username (e.g. @AsterCraft)"
  )
  .optional()
  .or(z.literal(""));

export const messageSchema = z
  .string()
  .max(5000, "Message is too long (max 5000 characters)")
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
