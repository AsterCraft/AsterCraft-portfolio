import { useTranslation } from "react-i18next";

import { textAreaStyles } from "../lib/styles";
import { useModalStartProjectStore } from "../model/store";

const MessageField = () => {
  const { message, setMessage } = useModalStartProjectStore();

  const { t } = useTranslation("features");

  return (
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      name="Project_Details"
      id="Project-Details"
      placeholder={t("contactForm.fields.projectDetails.placeholder")}
      className={textAreaStyles}
    ></textarea>
  );
};

export default MessageField;
