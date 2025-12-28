import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../../model/store";
import { validateFieldOnBlur } from "../../lib/validateFields";

import s from "./styles.module.scss";

interface Props extends React.ComponentPropsWithRef<"textarea"> {}

const MessageField = ({ className, ...props }: Props) => {
  const { message, setMessage, errors, touchedFields } =
    useModalStartProjectStore();

  const { t } = useTranslation("startProjectForm");

  const handleBlur = () => {
    validateFieldOnBlur("message", message);
  };

  return (
    <>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={!!errors.message}
        aria-describedby={errors.message ? "message-error" : undefined}
        name="Project_Details"
        id="Project-Details"
        placeholder={t("contactForm.fields.projectDetails.placeholder")}
        className={className}
        {...props}
      ></textarea>

      {touchedFields.has("message") && errors.message && (
        <span
          className={s.error}
          id="message-error"
        >
          {t(errors.message)}
        </span>
      )}
    </>
  );
};

export default MessageField;
