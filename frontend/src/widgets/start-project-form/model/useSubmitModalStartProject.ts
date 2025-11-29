import axios from "axios";
import { useRef, useState } from "react";

import { useModalStartProjectStore } from "./store";
import { createContactFormSchema, type FieldName } from "./validation";
import { API_ENDPOINTS } from "@shared/config/api";
import { trackFormSubmitConversion } from "@shared/lib/analytics/gtag";

export const useSubmitModalStartProject = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);

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
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        API_ENDPOINTS.sendEmail,
        {
          name: firstName,
          telegram,
          email,
          phone,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to send data");
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
    } catch (error) {
      console.log("Failed to send data: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting, isSentSuccessfully, validated };
};
