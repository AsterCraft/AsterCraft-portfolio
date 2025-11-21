import { useModalStartProjectStore } from "../model/store";
import { createContactFormSchema, type FieldName } from "../model/validation";

export const validateField = (
  fieldName: FieldName,
  value: string
): string | undefined => {
  const partialData = { [fieldName]: value };
  const schema = createContactFormSchema().pick({ [fieldName]: true });

  const result = schema.safeParse(partialData);
  return result.success ? undefined : result.error.issues[0]?.message;
};

export const validateFieldOnBlur = (fieldName: FieldName, value: string) => {
  const { setFieldError, setFieldTouched } =
    useModalStartProjectStore.getState();

  setFieldTouched(fieldName);
  const error = validateField(fieldName, value);
  setFieldError(fieldName, error);
};
