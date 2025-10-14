import { useModalStartProjectStore } from "../model/store";
import {
  emailSchema,
  firstNameSchema,
  messageSchema,
  phoneSchema,
  telegramSchema,
  type FieldName,
} from "../model/validation";

export const validateField = (
  fieldName: FieldName,
  value: string
): string | undefined => {
  switch (fieldName) {
    case "firstName": {
      const result = firstNameSchema.safeParse(value);
      return result.success ? undefined : result.error.issues[0].message;
    }
    case "email": {
      const result = emailSchema.safeParse(value);
      return result.success ? undefined : result.error.issues[0].message;
    }
    case "phone": {
      const result = phoneSchema.safeParse(value);
      return result.success ? undefined : result.error.issues[0].message;
    }
    case "telegram": {
      const result = telegramSchema.safeParse(value);
      return result.success ? undefined : result.error.issues[0].message;
    }
    case "message": {
      const result = messageSchema.safeParse(value);
      return result.success ? undefined : result.error.issues[0].message;
    }
    default:
      return undefined;
  }
};

export const validateFieldOnBlur = (fieldName: FieldName, value: string) => {
  const { setFieldError, setFieldTouched } =
    useModalStartProjectStore.getState();

  setFieldTouched(fieldName);
  const error = validateField(fieldName, value);
  setFieldError(fieldName, error);
};
