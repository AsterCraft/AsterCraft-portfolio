import axios from "axios";
import { useRef, useState } from "react";

import { useModalStartProjectStore } from "./store";
import { contactFormSchema, type FieldName } from "./validation";

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

    const validateResult = contactFormSchema.safeParse({
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
      let API_URL = "";

      if (window.location.hostname === "localhost") {
        API_URL = "http://localhost:3000/api/send-email";
      } else if (window.location.hostname === "aster-craft.vercel.app") {
        API_URL = "https://backend-aster-craft.vercel.app/api/send-email"; // TODO: change api_url
      }

      const response = await axios.post(
        API_URL,
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

      setIsSentSuccessfully(true);

      setTimeout(() => {
        setIsSentSuccessfully(false);
        console.log(isSentSuccessfully);
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
