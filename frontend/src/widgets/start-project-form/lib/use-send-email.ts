import { useState } from "react";

import apiClient from "@shared/lib/api";
import type { components } from "@shared/lib/api";

type SuccessResponse = components["schemas"]["SuccessResponse"];
type ErrorResponse = components["schemas"]["ErrorResponse"];
type SendEmailRequest = components["schemas"]["SendEmailRequest"];
type ValidationErrorResponse = components["schemas"]["ValidationErrorResponse"];
type RateLimitErrorResponse = components["schemas"]["RateLimitErrorResponse"];

type ApiErrors =
  | ValidationErrorResponse
  | RateLimitErrorResponse
  | ErrorResponse;

const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (formData: {
    firstName: string;
    email: string;
    phone?: string;
    telegram: string;
    message?: string;
  }) => {
    setIsLoading(true);
    setError(null);

    const requestBody: SendEmailRequest = {
      project: "astercraft-portfolio",
      sender: {
        name: formData.firstName,
        email: formData.email,
      },
      subject: "AsterCraft Contact Form Submission",
      body: {
        message: formData.message || "",
        ...(formData.phone && { phone: formData.phone }),
        ...(formData.telegram && { telegram: formData.telegram }),
      },
    };

    try {
      const { data, error, response } = await apiClient.POST(
        "/api/send-email",
        {
          body: requestBody,
        }
      );

      if (error) {
        if (
          "details" in error &&
          error.details &&
          "fieldErrors" in error.details
        ) {
          const validationError = error as ValidationErrorResponse;
          setError(validationError.error);

          return { success: false as const, error: validationError };
        }

        if (
          "details" in error &&
          error.details &&
          "retryAfter" in error.details
        ) {
          const rateLimitError = error as RateLimitErrorResponse;
          const retryAfter = rateLimitError.details.retryAfter || 60;
          setError(
            `Too many requests. Please try again in ${retryAfter} seconds.`
          );

          return { success: false as const, error: rateLimitError };
        }

        setError(error.error);
        return { success: false as const, error };
      }

      return { success: true as const, data };
    } catch (err) {
      const errorMessage = "Network error - please try again";
      setError(errorMessage);
      return {
        success: false as const,
        error: { error: errorMessage } as ErrorResponse,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading, error };
};

export default useSendEmail;
