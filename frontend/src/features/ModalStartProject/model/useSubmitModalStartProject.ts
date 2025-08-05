import axios from "axios";
import { useState } from "react";

import { useModalStartProjectStore } from "./store";

export const useSubmitModalStartProject = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { firstName, lastName, email, phone, message, resetModalStartProject } =
    useModalStartProjectStore();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      let API_URL = "";

      if (window.location.hostname === "localhost") {
        API_URL = "http://localhost:3000/api/send-email";
      } else if (
        window.location.hostname === "web-agency-portfolio.vercel.app"
      ) {
        API_URL = "https://backend-aster-craft.vercel.app/";
      }

      const response = await axios.post(
        API_URL,
        {
          name: `${firstName} ${lastName}`,
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

      setIsSubmitting(false);
      resetModalStartProject();
    } catch (error) {
      console.log("Error sending data: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};
