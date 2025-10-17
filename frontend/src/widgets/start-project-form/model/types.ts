import type { FieldName } from "./validation";

export type ModalStartProjecStore = {
  firstName: string;
  email: string;
  phone: string;
  message: string;
  telegram: string;

  errors: FieldErrors;

  touchedFields: Set<FieldName>;

  setFirstName: (firstNameValue: string) => void;
  setTelegram: (telegramValue: string) => void;
  setEmail: (emailValue: string) => void;
  setPhone: (phoneValue: string) => void;
  setMessage: (messageValue: string) => void;

  setFieldError: (field: FieldName, error: string | undefined) => void;
  setFieldTouched: (field: FieldName) => void;
  clearErrors: () => void;

  resetModalStartProject: () => void;
};

export type FieldErrors = {
  firstName?: string;
  email?: string;
  phone?: string;
  telegram?: string;
  message?: string;
};
