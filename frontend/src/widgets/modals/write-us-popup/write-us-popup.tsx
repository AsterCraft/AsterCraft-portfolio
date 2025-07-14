import { X } from "lucide-react";
import { useWriteUsModal } from "./store/useWriteUsModal";

import { useState, useRef } from "react";
import axios from "axios";
import classNames from "classnames";

import BtnSend from "./ui/btn-send/btn-send";
import Input from "./ui/input/input";
import InputPhoneNumber from "./ui/input-phone-number/input-phone-number";
import ModalMessage from "./ui/modal-message/modal-message";
import TextArea from "./ui/text-area/text-area";
import ModalLoading from "./ui/ModalLoading/ModalLoading";

import "./write-us-popup.scss";

const WriteUsPopup = () => {
  const { isOpen, close } = useWriteUsModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const clearForm = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusMessageType, setStatusMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL =
        window.location.hostname === "localhost"
          ? "http://localhost:3000/api/send-email"
          : "https://back-gules-pi.vercel.app/api/send-email";

      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      setStatusMessage("Повідомлення надіслано успішно!");
      setStatusMessageType("success");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Помилка:", error.response?.data || error.message);
      } else {
        console.error("Невідома помилка:", error);
      }

      setStatusMessage("Помилка при надсиланні. Спробуйте ще раз.");
      setStatusMessageType("error");
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
      clearForm.current?.reset();
      setTimeout(() => {
        close();
      }, 3500);
    }
  };

  return (
    <>
      {isSubmitting && <ModalLoading />}

      {statusMessage && (
        <ModalMessage
          statusMessage={statusMessage}
          type={statusMessageType}
          onClose={() => setStatusMessage("")}
        />
      )}

      <div
        className={classNames("write-us-popup", "light")}
        onClick={close}
      >
        <div
          className={classNames("write-us-popup__content", "light")}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={close}
            className="close-window"
          >
            <X />
          </button>
          <form
            ref={clearForm}
            className="form"
            onSubmit={handleSubmit}
          >
            <Input
              value={formData.name}
              onChange={(value) => handleInputChange("name", value)}
              type="text"
              name="name"
              placeholder="Your name"
            />
            <InputPhoneNumber
              value={formData.phone}
              onChange={(value) => handleInputChange("phone", value)}
            />
            <Input
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <TextArea
              value={formData.message}
              onChange={(value) => handleInputChange("message", value)}
            />
            <BtnSend text={"Send"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteUsPopup;
