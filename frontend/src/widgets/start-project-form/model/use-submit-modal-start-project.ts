import { useRef, useState } from "react";

import useSendEmail from "../lib/use-send-email";
import { useModalStartProjectStore } from "./store";
import { createContactFormSchema, type FieldName } from "./validation";
import { trackFormSubmitConversion } from "@shared/lib/analytics/gtag";

export const useSubmitModalStartProject = () => {
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const { sendEmail, isLoading: isSubmitting } = useSendEmail();

  const hasAttemptedSubmitRef = useRef(false);

  const {
    firstName,
    email,
    phone,
    message,
    telegram,
    errors,
    setFieldError,
    setFieldTouched,
    resetModalStartProject,
    clearErrors,
  } = useModalStartProjectStore();

  const hasValidationErrors = Object.values(errors).some(
    (error) => error !== undefined
  );
  const requiredFieldsEmpty = !firstName || !email;
  const validated =
    !hasAttemptedSubmitRef.current ||
    (!hasValidationErrors && !requiredFieldsEmpty);

  const handleSubmit = async () => {
    hasAttemptedSubmitRef.current = true;

    const fields: FieldName[] = [
      "firstName",
      "email",
      "phone",
      "telegram",
      "message",
    ] as const;

    fields.forEach((field) => setFieldTouched(field));

    const validateResult = createContactFormSchema().safeParse({
      firstName,
      email,
      phone,
      telegram,
      message,
    });

    if (!validateResult.success) {
      validateResult.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as FieldName;
        setFieldError(fieldName, issue.message);
      });

      return;
    }

    clearErrors();
    const result = await sendEmail({
      firstName,
      email,
      phone,
      telegram,
      message,
    });

    if (!result.success) {
      console.error("Failed to send email:", result.error);
      return;
    }

    trackFormSubmitConversion();
    hasAttemptedSubmitRef.current = false;
    setIsSentSuccessfully(() => {
      console.log(`isSentSuccessfully: true`);
      return true;
    });

    setTimeout(() => {
      setIsSentSuccessfully(false);
    }, 3000);

    resetModalStartProject();
  };

  return { handleSubmit, isSubmitting, isSentSuccessfully, validated };
};
