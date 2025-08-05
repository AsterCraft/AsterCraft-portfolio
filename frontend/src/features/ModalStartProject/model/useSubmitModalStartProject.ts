import axios from "axios";

import { useModalStartProjectStore } from "./store";

export const useSubmitModalStartProject = () => {
  const { firstName, lastName, email, phone, message } =
    useModalStartProjectStore();

  const handleSubmit = async () => {
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
    } catch (error) {
      console.log("Error sending data: ", error);
    }
  };

  return { handleSubmit };
};
